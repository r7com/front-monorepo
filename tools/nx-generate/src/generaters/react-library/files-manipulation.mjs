import { firstTest } from '../../utils/constants.mjs'
import { readAndModifyFile, renameFile, writeFile } from '../../utils/utils.mjs'

export async function filesManipulation(projectName) {
  await updateFiles()
  await updateRootIndex()

  async function updateFiles() {
    await renameFile(`libs/${projectName}/src/lib`, `libs/${projectName}/src/components`)

    await renameFile(
      `libs/${projectName}/src/components/${projectName}.spec.tsx`,
      `libs/${projectName}/src/components/${projectName}.cy.tsx`,
    )
    await writeFile({
      path: `libs/${projectName}/src/components/${projectName}.cy.tsx`,
      content: firstTest,
    })
  }

  async function updateRootIndex() {
    const indexContent = await readAndModifyFile({
      path: `libs/${projectName}/src/index.ts`,
      insertElements: `export * from './styles/styles'`,
      line: 1,
    })
    const updateIndexContent = indexContent.replace(/'\.\/lib\//g, "'./components/")
    await writeFile({ path: `libs/${projectName}/src/index.ts`, content: updateIndexContent })
  }
}
