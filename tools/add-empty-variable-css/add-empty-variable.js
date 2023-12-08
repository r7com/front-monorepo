const fs = require('fs')
const glob = require('glob')
const path = require('path')

function getParam(param = '') {
  const paramIndex = process.argv.findIndex(value => value === param)

  return paramIndex > -1 ? process.argv[paramIndex + 1] : ''
}

const rootDir = getParam('--inputFolder')

function insertCommentInEmptyValues(cssContent) {
  return cssContent
    .replace(/:\s*;/g, ': var(--tw-empty,/*!*/ /*!*/);')
    .replace(/:\s*}/g, ': var(--tw-empty,/*!*/ /*!*/)}')
}

function processCSSFile(filePath) {
  try {
    const cssContent = fs.readFileSync(filePath, 'utf8')
    const newCssContent = insertCommentInEmptyValues(cssContent)

    fs.writeFileSync(filePath, newCssContent, 'utf8')

    console.log(`Regra aplicada com sucesso em: ${filePath}`)
  } catch (error) {
    console.error(`Erro ao processar o arquivo ${filePath}: ${error.message}`)
  }
}

glob('**/style.css', { cwd: rootDir }, (err, files) => {
  if (err) {
    console.error('Erro ao obter lista de arquivos:', err)
    return
  }

  files.forEach(file => {
    const filePath = path.join(rootDir, file)

    processCSSFile(filePath)
  })
})

module.exports = { insertCommentInEmptyValues }
