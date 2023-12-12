const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const { getParam } = require('./utils/utils')

/** Centraliza todas os parametros do script passaveis */
class Config {
  constructor() {
    /** Pasta dos arquivos que vão virar tipagem */
    this.inputFolder = getParam('--inputFolder')
    /** OPCIONAL: Pega apenas a extensão do arquivo passada, `ex: .svg` */
    this.inputExtension = getParam('--inputExtension') || '.svg'
    /** Arquivo onde vai ser gerado a tipagem, ex: `libs/app/src/file.types.ts` */
    this.outputFile = getParam('--outputFile')
    /** Nome da tipagem, por exemplo `SvgIcons` */
    this.typeName = getParam('--typeName')
    /** Prefixo da tipagem, por exemplo `export type SvgIcons = ` */
    this.typePrefix = `export type ${this.typeName} = `
    /** Watcher ainda não implementado, talvez usar a lib `chokidar`,
     *  por padrão o watcher do nx roda renomeação de arquivo 2 vezes,
     *  o que atrapalha na implementação
     */
    this.watch = getBooleanParam('--watch')
    /** Não mostra a tabela de todos os nomes tipos na união */
    this.hideTypesTable = getBooleanParam('--hideTypesTable')
    /** Mostra apenas a tabela de todos os nomes tipos na união */
    this.showOnlyTypesTable = getBooleanParam('--showOnlyTypesTable')
    /** Serve pra corrigir a tipagem além de mostrar a tabela com `--showOnlyTypesTable` */
    this.autoFix = getBooleanParam('--autoFix')
  }
}

/** Centraliza todas os parametros do script passaveis em `cfg` */
const cfg = new Config()

function init() {
  const { createDynamicTypesFile, showTypesTable } = dynamicTypes()

  /** Apenas mostra uma tabela com todas as tipagens */
  if (cfg.showOnlyTypesTable) {
    showTypesTable()
    if (!cfg.autoFix) {
      return
    }
  }

  /** Cria/atualiza o arquivo com as tipagens dinâmicas */
  createDynamicTypesFile()
}

/** Inicializa toda a lógica */
init()

/** Core da tipagem dinâmica - Retorna funções pra tratar ela */
function dynamicTypes() {
  class Color {
    constructor() {
      this.getColorFunc = (color = '') => {
        return (text = '') => `${color}${text}\x1b[0m`
      }
      this.added = this.getColorFunc('\x1b[32m')
      this.removed = this.getColorFunc('\x1b[31m')
      this.success = this.getColorFunc('\x1b[32m')
      this.error = this.getColorFunc('\x1b[31m')
      this.warning = this.getColorFunc('\x1b[33m')
      this.titleSuccess = this.getColorFunc('\x1b[42m')
      this.titleError = this.getColorFunc('\x1b[41m')
      this.reset = this.getColorFunc('\x1b[0m')
    }
  }

  /** Centraliza todas as cores pra console.log */
  const color = new Color()

  /** Retorna uma array com os nomes dos arquivos na pasta */
  function getFileNames() {
    const filesOnFolder = fs.readdirSync(cfg.inputFolder)
    // Filtra apenas os arquivos com a extensão passada em `inputExtension`
    if (cfg.inputExtension) {
      return (
        filesOnFolder
          // Pega apenas arquivos com a extensão passada por parametro
          .filter(file => path.extname(file).toLowerCase() === cfg.inputExtension)
          // Remove a extensão do nome do arquivo
          .map(file => path.basename(file, cfg.inputExtension))
      )
    }
    // Não filtra por extensão, pega todas
    return (
      filesOnFolder
        // Remove arquivos que começam com `.`, ex: `.gitkeep`
        .filter(file => !file.startsWith('.'))
        // Remove qualquer extensão do nome do arquivo
        .map(file => path.parse(file).name)
    )
  }

  /** Retorna uma array com os icones já presentes na tipagem */
  function getNamesAlreadyOnType() {
    try {
      const typeContentWithPrettier = fs.readFileSync(cfg.outputFile, 'utf8')
      /** Tipagem em uma linha só, sem formatação `export type SvgIcons = 'a' | 'b' | 'c'...` */
      const typeContentUglyfied = typeContentWithPrettier
        .replace('|', '')
        .replace(/\n\s*/g, ' ')
        .trim()
      /* Remove o prefixo ${typePrefix} */
      const typesUnionWithoutPrefix = typeContentUglyfied
        .replace(cfg.typePrefix, '')
        .replace(/'/g, '')
      // Retorna uma array com os ícones presentes na tipagem
      return {
        names: typesUnionWithoutPrefix.split(' | '),
        isCreatingTypeFile: false,
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error(color.error(`Error reading the file ${cfg.outputFile}`))
        throw new Error(error)
      }
      // Retorna array vazia se não existir o arquivo da tipagem ainda
      return {
        names: [],
        isCreatingTypeFile: true,
      }
    }
  }

  /** Estoura erro quando não acha nenhum arquivo na pasta */
  function validateNames(names = ['']) {
    const noNamesMessage = `Not found any file that matches on the folder ${
      cfg.inputExtension ? `with ${cfg.inputExtension} extension` : ''
    } `

    if (names.length === 0) {
      console.error(color.error(noNamesMessage))
      throw new Error(noNamesMessage)
    }
  }

  /** Todos os nomes dos arquivos na pasta */
  const names = getFileNames()
  validateNames(names)
  /** Nomes de arquivo já presentes na tipagem */
  const { names: oldNamesOnType, isCreatingTypeFile } = getNamesAlreadyOnType()
  /** Arquivos na pasta que agora estão na tipagem */
  const namesAdded = names.filter(icon => !oldNamesOnType.includes(icon))
  /** Arquivos na tipagem que não estavam mais na pasta */
  const namesRemoved = oldNamesOnType.filter(icon => !names.includes(icon))
  /** União dos nomes dos ícones `"circle" | "square" | "rectangle"...` */
  const typesUnion = names.map(name => `'${name}'`).join(' | ')
  /** Tipagem em uma linha só, sem formatação `export type SvgIcons = 'a' | 'b' | 'c'...` */
  const typeContentUnformatted = `${cfg.typePrefix}${typesUnion}`
  /** Roda o prettier no arquivo pra respeitar as regras do projeto */
  const typeContentWithPrettier = prettier.format(typeContentUnformatted, {
    parser: 'typescript',
    //! Não existe mais a partir da versão 3 do Prettier, foi pra prettier/async
    ...prettier.resolveConfig.sync(),
  })

  /** Tabela com todos os ícones */
  function showTypesTable() {
    const noTypesMessage = color.warning('No types yet, run the generate command first\n ')
    const mismatchMessage = color.warning('Found a mismatch between files and types (scroll up)\n ')
    const isNamesMissingOnType = namesAdded.length > 0
    const isTypesMissingOnNames = namesRemoved.length > 0
    const isTypesEmpty = oldNamesOnType.length === 0
    const hasMismatch = isNamesMissingOnType || isNamesMissingOnType

    if (isNamesMissingOnType) {
      console.log(color.warning(`Missing in type file (${namesAdded.length})`))
      console.table(namesAdded)
    }

    if (isTypesMissingOnNames) {
      console.log(color.warning(`Missing in folder (${namesRemoved.length})`))
      console.table(namesRemoved)
    }

    if (!isTypesEmpty) {
      console.log(`All type names (${oldNamesOnType.length})`)
      console.table(oldNamesOnType)
    } else {
      console.log(noTypesMessage)
    }

    if (hasMismatch) {
      console.log(mismatchMessage)
    }
  }

  function createDynamicTypesFile() {
    if (namesAdded.length === 0 && namesRemoved.length === 0) {
      console.log(color.success('Folder files and type file are synced, nothing to change'))
      return
    }
    // Cria ou modifica o arquivo, por exemplo: svg-icons.types.ts
    fs.writeFile(cfg.outputFile, typeContentWithPrettier, error => {
      if (!error) {
        const fileStatus = isCreatingTypeFile ? 'Creating' : 'Updating'
        const fileStatusMessage = `\n > ${fileStatus} file...`
        console.log(fileStatusMessage)
        const message = `${isCreatingTypeFile ? 'generated' : 'updated'}`
        console.log(color.titleSuccess(` Dynamic types ${message} sucessfully! `))
        console.log(cfg.outputFile)
        console.log(`\n \nTotal: ${names.length}\n`)
        consoleLogDiff(DIFF_TYPES.added)
        consoleLogDiff(DIFF_TYPES.removed)
      } else {
        console.error(color.titleError('Error while generating dynamic types'))
        throw new Error(error)
      }
    })
  }

  const DIFF_TYPES = {
    added: {
      text: 'added',
      array: namesAdded,
      color: color.added,
    },
    removed: {
      text: 'removed',
      array: namesRemoved,
      color: color.removed,
    },
  }

  /** Mostra os ícones adicionados/removidos */
  function consoleLogDiff(type = DIFF_TYPES.added) {
    const values = type.array.map(name => `   ${name}`).join(',\n')
    const hasDiff = type.array.length > 0
    const typesText = `${type.array.length || 'No'} type${type.array.length > 1 ? 's' : ''}`
    const diffText = `${hasDiff ? `: [\n${values}\n]` : ''}`
    console.log(type.color(`\n${typesText} ${type.text}${diffText}`))
  }

  return {
    createDynamicTypesFile,
    showTypesTable,
  }
}

/** Pega uma flag sem valor */
function getBooleanParam(param = '') {
  /** --trueFlagExample */
  return process.argv.includes(param)
}
