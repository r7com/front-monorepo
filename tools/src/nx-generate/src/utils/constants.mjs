import path from 'path'

export const rootDir = path.resolve('./')

export const firstTest = `
  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })
`

export const importCypress = [
  "import '@frsource/cypress-plugin-visual-regression-diff'",
  "import '@testing-library/cypress/add-commands'",
  "import '../../src/styles.css'",
]
export const cypresslink = `<link
href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
rel="stylesheet" />`

export const SVGR = `
  svgr({
    svgrOptions: {
      titleProp: true,
    },
  }),
`
