const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

/** Centraliza todas os parametros do script passaveis */
class Config {
  constructor() {
    /** Pasta base da lib */
    this.baseFolder = getParam('--baseDir')
    /** Pasta dos arquivos que vão virar tipagem */
    this.inputFolder = `${this.baseFolder}/${getParam('--inputFolder')}`
    /** Extensão do arquivo, `ex: .svg` */
    this.inputExtension = `${getParam('--inputExtension')}`
    /** Nome do arquivo de tipagem `ex: svg-icon.types.ts` */
    this.outputFileName = `${getParam('--outputFileName')}`
    /** Diretório onde vai ser gerado o arquivo de tipagem */
    this.outputFile = `${this.baseFolder}/${getParam('--outputFolder')}/${this.outputFileName}`
    /** Nome da tipagem, por exemplo `SvgIcons` */
    this.typeName = `${getParam('--typeName')}`
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
  }
}

/** Centraliza todas os parametros do script passaveis em `cfg` */
const cfg = new Config()

function init() {
  const { createDynamicTypesFile, showTypesTable } = dynamicTypes()

  /** Apenas mostra uma tabela com todas as tipagens */
  if (cfg.showOnlyTypesTable) return showTypesTable()

  /** Cria/atualiza o arquivo com as tipagens dinâmicas */
  createDynamicTypesFile()
}

/** Inicializa toda a lógica */
init()

/** Core da tipagem dinâmica - Retorna funções pra tratar ela */
function dynamicTypes() {
  /** Retorna uma array com os nomes dos arquivos na pasta */
  function getFileNames() {
    const svgFiles = fs.readdirSync(cfg.inputFolder)
    return (
      svgFiles
        // Pega apenas arquivos com a extensão passada por parametro
        .filter(file => path.extname(file).toLowerCase() === cfg.inputExtension)
        // Remove a extensão do nome do arquivo
        .map(file => path.basename(file, cfg.inputExtension))
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
      !cfg.showOnlyTypesTable &&
        console.log(`\n\x1b[90m> Updating file "${cfg.outputFileName}"...\x1b[0m `)
      // Retorna uma array com os ícones presentes na tipagem
      return typesUnionWithoutPrefix.split(' | ')
    } catch (error) {
      if (error.code === 'ENOENT') {
        !cfg.showOnlyTypesTable &&
          console.log(`\n\x1b[90m> Creating file "${cfg.outputFileName}"...\x1b[0m`)
      } else {
        console.error(`\x1b[31m[41mError reading the file ${cfg.outputFileName}`, error)
        // Reseta a cor vermelha "\x1b[31m" acima senão os logs abaixo ficam vermelhos
        console.log(`\x1b[0m`)
      }
      // Retorna array vazia se não existir o arquivo da tipagem ainda
      return []
    }
  }

  /** Todos os nomes dos arquivos na pasta */
  const names = getFileNames()
  /** Nomes de arquivo já presentes na tipagem */
  const oldNamesOnType = getNamesAlreadyOnType()
  const namesAdded = names.filter(icon => !oldNamesOnType.includes(icon))
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
    const noTypesMessage = '\x1b[33mNo types yet, try running the generate command first\x1b[0m'
    const namesOnType = oldNamesOnType.length > 0 ? oldNamesOnType : noTypesMessage
    console.table(namesOnType)
  }

  function createDynamicTypesFile() {
    // Cria ou modifica o arquivo, por exemplo: svg-icons.types.ts
    fs.writeFile(cfg.outputFile, typeContentWithPrettier, error => {
      if (!error) {
        const hasIconsOnType = oldNamesOnType.length > 0
        const message = `${hasIconsOnType ? 'updated' : 'generated'}`
        console.log(`\x1b[42m Dynamic types ${message} sucessfully! \x1b[0m`)
        console.log(`\x1b[5mPath: ${cfg.outputFile}\n\n\x1b[0m`)
        console.log(`\n\x1b[0mTotal: ${names.length}\n`)
        consoleLogDiff(DIFF_TYPES.added)
        consoleLogDiff(DIFF_TYPES.removed)
      } else {
        console.error('\x1b[41mError while generating dynamic types', error)
        // Reset de cor
        console.log('\x1b[0m')
      }
    })
  }

  const DIFF_TYPES = {
    added: {
      text: 'added',
      array: namesAdded,
      color: '\x1b[32m',
    },
    removed: {
      text: 'removed',
      array: namesRemoved,
      color: '\x1b[31m',
    },
  }

  /** Mostra os ícones adicionados/removidos */
  function consoleLogDiff(type = DIFF_TYPES.added) {
    const values = type.array.map(name => `   ${name}`).join(',\n')
    const hasDiff = type.array.length > 0
    const typesText = `${type.array.length || 'No'} type${type.array.length > 1 ? 's' : ''}`
    const diffText = `${hasDiff ? `: [\n${values}\n]` : ''}`
    console.log(`${type.color}${typesText} ${type.text}${diffText}\x1b[0m\n`)
  }

  return {
    createDynamicTypesFile,
    showTypesTable,
  }
}

/** Pega o valor do parametro do script `--parametro valor`*/
function getParam(param = '', required = true) {
  const paramIndex = process.argv.findIndex(value => value === param)
  // if (paramIndex === -1 && required)
  //   throw new Error(`Parameter ${required} "${param}" does not exist`)
  return paramIndex > -1 ? process.argv[paramIndex + 1] : ''
}

/** Pega uma flag sem valor */
function getBooleanParam(param = '') {
  /** --trueFlagExample */
  return process.argv.includes(param)
}
