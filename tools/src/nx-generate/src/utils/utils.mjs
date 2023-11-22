import fse from 'fs-extra'
import fs from 'fs'
import { rootDir } from './constants.mjs'

export async function readFile({ path, line, insertElement }) {
  try {
    const content = await fse.readFile(rootDir + path, 'utf8')
    if (!line) return content

    const lines = content.split('\n')
    lines.splice(line - 1, 0, insertElement)

    const updateContent = lines.join('\n')
    return updateContent
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}

export async function writeFile(path, content) {
  try {
    await fse.writeFile(rootDir + path, content)
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
export async function rename(to, from) {
  try {
    await fs.renameSync(rootDir + to, rootDir + from)
  } catch (error) {
    console.log('Erro ao renomear', error)
  }
}
