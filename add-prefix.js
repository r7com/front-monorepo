/*
  Insere o prefix em todas as classes do tailwind em arquivos TSX e variants
  Fiz algumas melhorias no código do autor: https://github.com/tailwindlabs/tailwindcss/discussions/2598#discussioncomment-4813766
  Precisava lidar com classes que tem os : antes da classe em si. Exemplo hover:flex. E também com !important.
  Suporte estendido para dentro do arquivo de variants.
*/

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const prettier = require('prettier')

const rootDir = 'libs/ui-card'
const prefix = 'card'
const variantKey = 'iconStyle'
const classNameRegex = new RegExp(`(?:className=|${variantKey}:)\\s*["']([^"']+)["']`, 'g')

glob('**/*.{variants.ts,tsx}', { cwd: rootDir }, (er, files) => {
  files.forEach(file => {
    const filePath = path.join(rootDir, file)
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      const result = data.replace(classNameRegex, (match, classNames) => {
        const updatedClassNames = classNames
          .split(' ')
          .map(className => {
            const classHasBase = new RegExp(`(!?)${prefix}(?:-([^:]+))?$`)
            const classWithoutBaseRx = /^((\w+):|(!)?)(\S+)$/

            let includedPrefix = ''

            if (classHasBase.test(className)) {
              return className
            }

            if (className.match(classWithoutBaseRx)) {
              const [fullClass, _, classWithColon, classWithImportant, finalClassName] =
                className.match(classWithoutBaseRx)

              if (classWithImportant) {
                includedPrefix = `!${prefix}-${finalClassName}`
              } else if (classWithColon) {
                includedPrefix = finalClassName.includes('!')
                  ? `${classWithColon}:!${prefix}-${finalClassName.replace('!', '')}`
                  : `${classWithColon}:${prefix}-${finalClassName}`
              } else {
                includedPrefix = `${prefix}-${finalClassName}`
              }
            }

            return includedPrefix
          })
          .join(' ')

        const correctKey = match.startsWith('className=') ? 'className=' : `${variantKey}:`

        return `${correctKey}"${updatedClassNames}"`
      })

      const typeContentWithPrettier = prettier.format(result, {
        parser: 'typescript',
        ...prettier.resolveConfig.sync(),
      })

      fs.writeFile(filePath, typeContentWithPrettier, 'utf-8', err => {
        if (err) console.error(err)
      })
    })
  })
})
