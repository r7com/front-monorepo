import { parse } from 'node-html-parser'
import { copyFile, readAndModifyFile, writeFile } from '../../utils/utils.mjs'
import shell from 'shelljs'
import { cypresslink, importCypress, templatesDir } from '../../utils/constants.mjs'

export async function cypress(projectName) {
  await generateCypress()
  await tsConfigManipulation()
  await insertImportToComponent()
  await insertLinkToHead()

  async function generateCypress() {
    await shell.exec(`yarn nx g @nx/react:cypress-component-configuration --project=${projectName}`)
  }

  async function insertLinkToHead() {
    const content = await readAndModifyFile({
      path: `libs/${projectName}/cypress/support/component-index.html`,
    })

    const $html = parse(content)
    const $link = parse(cypresslink)
    const $head = $html.querySelector('head')
    $head.appendChild($link)

    await writeFile({
      path: `libs/${projectName}/cypress/support/component-index.html`,
      content: String($html),
      type: 'html',
    })
  }

  async function insertImportToComponent() {
    await copyFile(
      `${templatesDir}/cypress/component.tsx`,
      `libs/${projectName}/cypress/support/component.tsx`,
    )
  }

  async function tsConfigManipulation() {
    const tsConfig = JSON.parse(
      await readAndModifyFile({ path: `libs/${projectName}/cypress/tsconfig.json` }),
    )

    tsConfig.compilerOptions.types.push('@testing-library/cypress')

    await writeFile({
      path: `libs/${projectName}/cypress/tsconfig.json`,
      content: JSON.stringify(tsConfig),
      type: 'json',
    })

    await copyFile(
      `${templatesDir}/cypress/cypress.config.ts`,
      `libs/${projectName}/cypress.config.ts`,
    )
  }
}
