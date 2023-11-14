const fs = require('fs')
const path = require('path')
const glob = require('glob')
const rootDir = 'libs/ui-base-components'
const classNameRegex = /className=[`']([\s\S]+?)[`']/g

glob('**/*.{ts,tsx}', { cwd: rootDir }, (er, files) => {
  files.forEach(file => {
    const filePath = path.join(rootDir, file)
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      const result = data.replace(classNameRegex, (match, p1) => {
        const classNames = p1.split(' ')
        const prefixedClassNames = classNames.map(className => {
          if (className.startsWith('base-')) {
            return className
          } else if (className.includes(':')) {
            return className.replace(/(?<=:)([^;\s]+)/, 'base-$1')
          } else {
            return `base-${className}`
          }
        })
        return `className="${prefixedClassNames.join(' ')}"`
      })
      fs.writeFile(filePath, result, 'utf-8', err => {
        if (err) console.error(err)
      })
    })
  })
})
