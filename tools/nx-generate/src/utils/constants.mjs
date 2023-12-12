export const templatesDir = 'tools/nx-generate/src/generaters/react-library/templates'

export const firstTest = `
  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
`

export const importCypress = [
  "import '@frsource/cypress-plugin-visual-regression-diff'",
  "import '@testing-library/cypress/add-commands'",
  "import '../../src/styles.css'",
  "import '@r7/ui-base-components/css'",
]

export const cypresslink = `<link
href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
rel="stylesheet" />`

export const SVGR = 'svgr({svgrOptions: { titleProp: true}}),'

export const svgrImport = "import svgr from 'vite-plugin-svgr'"

export const projectJsonObj = {
  typecheck: {
    executor: 'nx:run-commands',
    options: {
      command: 'tsc --noEmit -p {projectRoot}/tsconfig.lib.json',
    },
  },
  version: {
    executor: '@jscutlery/semver:version',
    options: {
      preset: 'angular',
    },
  },
  'build-css-arc': {
    executor: 'nx:run-commands',
    options: {
      command:
        'node tools/add-empty-variable-css/add-empty-variable.js --inputFolder dist/{projectRoot}',
    },
  },
  options: {
    watch: true,
    browser: 'chrome',
  },
  dependsOn: ['^build'],
  configurations: {
    ci: {
      watch: false,
      quiet: true,
      env: {
        pluginVisualRegressionUpdateImages: true,
      },
    },
  },
}
