import { SVGR, firstTest, svgrImport } from '../../utils/constants.mjs'
import { readFile, renameFile, writeFile } from '../../utils/utils.mjs'

export async function filesManipulation(projectName) {
  await updateFiles()
  await updateRootIndex()
  await viteConfigFile()

  async function updateFiles() {
    await renameFile(`/libs/${projectName}/src/lib`, `/libs/${projectName}/src/components`)

    await renameFile(
      `/libs/${projectName}/src/components/${projectName}.spec.tsx`,
      `/libs/${projectName}/src/components/${projectName}.cy.tsx`,
    )
    await writeFile({
      path: `/libs/${projectName}/src/components/${projectName}.cy.tsx`,
      content: firstTest,
    })
  }

  async function updateRootIndex() {
    const indexContent = await readFile({ path: `/libs/${projectName}/src/index.ts` })
    const updateIndexContent = indexContent.replace(/'\.\/lib\//g, "'./components/")
    writeFile({ path: `/libs/${projectName}/src/index.ts`, content: updateIndexContent })
  }

  async function viteConfigFile() {
    const viteSvgrConfig = await readFile({
      path: `/libs/${projectName}/vite.config.ts`,
      line: 1,
      insertElements: svgrImport,
    })

    writeFile({ path: `/libs/${projectName}/vite.config.ts`, content: viteSvgrConfig })

    let viteConfig = await readFile({
      path: `/libs/${projectName}/vite.config.ts`,
      line: 13,
      insertElements: SVGR,
    })

    writeFile({
      path: `/libs/${projectName}/vite.config.ts`,
      content: viteConfig,
      type: 'typescript',
    })
  }
}
