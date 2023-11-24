import shell from 'shelljs'
import { copyFile, renameFile, writeFile, readFile, prettierFormat } from '../utils/utils.mjs'
import { cypresslink, firstTest, importCypress } from '../utils/constants.mjs'
import { parse } from 'node-html-parser'

export class Library {
  constructor({ projectName, prefixName }) {
    this.projectName = projectName
    this.prefixName = prefixName
    this.init()
  }

  init() {
    this.generateNX()
    this.tailwindManipulation()
    this.filesManipulation()
    this.cypressManipulation()
  }

  async generateNX() {
    shell.cd('libs')
    await shell.exec(
      `yarn nx g @nx/react:library --name=${this.projectName} --bundler=vite --compiler=swc --importPath=@r7/${this.projectName} --projectNameAndRootFormat=as-provided --publishable=true`,
    )
  }

  async tailwindManipulation() {
    await copyFile('/tools/src/nx-generate/src/templates/tailwind/', `/libs/${this.projectName}/`)
    const tailwindConfig = await readFile({
      path: `/libs/${this.projectName}/tailwind.config.js`,
      line: 6,
      insertElements: `prefix: '${this.prefixName}',`,
    })
    const tailwindFormat = prettierFormat(tailwindConfig, 'typescript')
    await writeFile(`/libs/${this.projectName}/tailwind.config.js`, tailwindFormat)
  }

  async cypressManipulation() {
    await shell.exec(
      `yarn nx g @nx/react:cypress-component-configuration --project=${this.projectName}`,
    )
    const content = await readFile({
      path: `/libs/${this.projectName}/cypress/support/component-index.html`,
    })
    const $html = parse(content)
    const $link = parse(cypresslink)
    const $head = $html.querySelector('head')
    $head.appendChild($link)
    const formatHTML = prettierFormat(String($html), 'html')
    writeFile(`/libs/${this.projectName}/cypress/support/component-index.html`, formatHTML)

    const cypressConponent = await readFile({
      path: `/libs/${this.projectName}/cypress/support/component.ts`,
      line: 18,
      insertElements: importCypress,
    })
    writeFile(`/libs/${this.projectName}/cypress/support/component.ts`, cypressConponent)

    // copyFile('/tools/src/generate-lib/src/templates/cypress/tsconfig.json',`/libs/${this.projectName}/cypress/`,)
    // copyFile('/tools/src/generate-lib/src/templates/cypress/cypress.config.ts',`/libs/${this.projectName}/`)
  }

  async filesManipulation() {
    await renameFile(
      `/libs/${this.projectName}/src/lib`,
      `/libs/${this.projectName}/src/components`,
    )
    await renameFile(
      `/libs/${this.projectName}/src/components/${this.projectName}.spec.tsx`,
      `/libs/${this.projectName}/src/components/${this.projectName}.cy.tsx`,
    )
    await writeFile(
      `/libs/${this.projectName}/src/components/${this.projectName}.cy.tsx`,
      firstTest,
    )
    const indexContent = await readFile({ path: `/libs/${this.projectName}/src/index.ts` })
    const updateIndexContent = indexContent.replace(/'\.\/lib\//g, "'./components/")
    writeFile(`/libs/${this.projectName}/src/index.ts`, updateIndexContent)
  }
}
