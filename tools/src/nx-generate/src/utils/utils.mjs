import fse from 'fs-extra'
import { rootDir } from './constants.mjs'
import prettier from 'prettier'

/**
 * Reads a file and optionally inserts elements at a specified line.
 *
 * @param {Object} options - The options object.
 * @param {string} options.path - The path to the file.
 * @param {number} [options.line] - The line number where elements should be inserted.
 * @param {string|string[]} [options.insertElements] - The element(s) to insert at the specified line.
 * @returns {Promise<string>} A promise that resolves to the updated content of the file.
 * @throws {Error} If there is an error reading the file.
 */
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

/**
 * Writes content to a file, optionally formatting it based on the specified type.
 *
 * @param {Object} options - The options object.
 * @param {string} options.path - The path to the file.
 * @param {string} options.content - The content to be written to the file.
 * @param {string} [options.type] - The type of formatting to be applied (e.g., 'babel', 'json').
 * @returns {Promise<void>} A promise that resolves when the file has been successfully written.
 * @throws {Error} If there is an error writing to the file.
 */
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
  } catch (err) {
    console.error('Erro ao gravar no arquivo:', err)
  }
}

/**
 * Copies a file from one location to another.
 *
 * @param {string} to - The destination path for the copied file.
 * @param {string} from - The source path of the file to be copied.
 * @returns {Promise<void>} A promise that resolves when the file has been successfully copied.
 * @throws {Error} If there is an error copying the file.
 */
export async function copyFile(to, from) {
  try {
    await fse.copy(rootDir + to, rootDir + from)
  } catch (err) {
    console.error('Erro ao copiar o arquivo:', err)
  }
}

/**
 * Renames a file by moving it from one location to another.
 *
 * @param {string} to - The new path for the file after renaming.
 * @param {string} from - The current path of the file to be renamed.
 * @returns {Promise<void>} A promise that resolves when the file has been successfully renamed.
 * @throws {Error} If there is an error renaming the file.
 */
export async function renameFile(to, from) {
  try {
    await fse.move(rootDir + to, rootDir + from, { overwrite: true })
  } catch (error) {
    console.log('Erro ao renomear', error)
  }
}

/**
 * Removes a file from the specified path.
 *
 * @param {string} path - The path of the file to be removed.
 * @returns {Promise<void>} A promise that resolves when the file has been successfully removed.
 * @throws {Error} If there is an error removing the file.
 */
export async function removeFile(path) {
  try {
    await fse.remove(rootDir + path)
  } catch (err) {
    console.error('Erro ao remover o arquivo:', err)
  }
}
