import fse from 'fs-extra'
import { rootDir } from './constants.mjs'
import prettier from 'prettier'

export async function readFile({ path, line, insertElements }) {
  try {
    const content = fse.readFileSync(rootDir + path, 'utf8')
    if (!line) return content

    const lines = content.split('\n')
    const insertIndex = line - 1
    const elementsArray = Array.isArray(insertElements) ? insertElements : [insertElements]

    lines.splice(insertIndex + 1, 0, ...elementsArray)

    const updatedContent = lines.join('\n')
    return updatedContent
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
    throw err
  }
}

export async function writeFile({ path, content, type }) {
  try {
    if (!type) {
      await fse.writeFileSync(rootDir + path, content)
      return
    }

    const contentFormated = prettier.format(content, {
      parser: type,
      ...prettier.resolveConfig.sync(),
    })

    await fse.writeFileSync(rootDir + path, contentFormated)
    console.log('Arquivo salvo com sucesso!')
  } catch (err) {
    console.error('Erro ao gravar no arquivo:', err)
  }
}

export async function copyFile(to, from) {
  try {
    await fse.copy(rootDir + to, rootDir + from)
    console.log('Arquivo copiado com sucesso!')
  } catch (err) {
    console.error('Erro ao copiar o arquivo:', err)
  }
}
export async function renameFile(to, from) {
  try {
    await fse.move(rootDir + to, rootDir + from, { overwrite: true })
  } catch (error) {
    console.log('Erro ao renomear', error)
  }
}

export async function removeFile(path) {
  try {
    await fse.remove(rootDir + path)
    console.log('Arquivo removido com sucesso!')
  } catch (err) {
    console.error('Erro ao remover o arquivo:', err)
  }
}
