import { SVGR, firstTest, svgrImport, templatesDir } from '../../utils/constants.mjs'
import {
  readAndAddItemsToArray,
  readAndModifyFile,
  renameFile,
  writeFile,
} from '../../utils/utils.mjs'
import fse from 'fs-extra'

export async function filesManipulation(projectName) {
  await updateFiles()
  await updateRootIndex()
  await viteConfigFile()

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
    const indexContent = await readAndModifyFile({ path: `libs/${projectName}/src/index.ts` })
    const updateIndexContent = indexContent.replace(/'\.\/lib\//g, "'./components/")
    await writeFile({ path: `libs/${projectName}/src/index.ts`, content: updateIndexContent })
  }

  async function viteConfigFile() {
    const viteSvgrConfig = await readAndModifyFile({
      path: `libs/${projectName}/vite.config.ts`,
      line: 1,
      insertElements: svgrImport,
    })

    await writeFile({ path: `libs/${projectName}/vite.config.ts`, content: viteSvgrConfig })

    const viteConfig = await readAndModifyFile({
      path: `libs/${projectName}/vite.config.ts`,
      line: 14,
      insertElements: SVGR,
    })

    await writeFile({
      path: `libs/${projectName}/vite.config.ts`,
      content: viteConfig,
      type: 'typescript',
    })

    const viteConfigExternal = await readAndAddItemsToArray({
      path: `libs/${projectName}/vite.config.ts`,
      arrayName: 'external',
      items: '@r7/ui-base-components',
    })

    await writeFile({
      path: `libs/${projectName}/vite.config.ts`,
      content: viteConfigExternal,
      type: 'typescript',
    })
  }
}
