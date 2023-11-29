import { SVGR, svgrImport } from '../../utils/constants.mjs'
import { readAndAddItemsToArray, readAndModifyFile, writeFile } from '../../utils/utils.mjs'

export async function viteConfig(projectName) {
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
