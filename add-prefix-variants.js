const fs = require('fs')
const path = require('path')
const glob = require('glob')

const rootDir = 'libs/ui-base-components' // Substitua pelo caminho real

glob('**/*.variants.ts', { cwd: rootDir, nodir: true, absolute: true }, (er, files) => {
  files.forEach(file => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      const updatedData = data.replace(/toggle:\s*'([^']+)'/, (match, p1) => {
        const updatedBase = p1
          .split(' ')
          .map(className => {
            if (className.startsWith('base-')) {
              return className
            } else if (className.includes(':')) {
              return className.replace(/(?<=:)([^;\s]+)/, 'base-$1')
            } else {
              return `base-${className}`
            }
          })
          .join(' ')
        return `toggle: '${updatedBase}'`
      })

      fs.writeFile(file, updatedData, 'utf-8', err => {
        if (err) console.error(err)
      })
    })
  })
})
