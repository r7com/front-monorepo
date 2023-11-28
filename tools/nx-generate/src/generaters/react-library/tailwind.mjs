import { templatesDir } from '../../utils/constants.mjs'
import { copyFile, readAndModifyFile, writeFile } from '../../utils/utils.mjs'

export async function tailwind({ prefixName, projectName }) {
  await copyFile(`${templatesDir}/tailwind/`, `libs/${projectName}/`)
  const tailwindConfig = await readAndModifyFile({
    path: `libs/${projectName}/tailwind.config.js`,
    line: 6,
    insertElements: `prefix: '${prefixName}',`,
  })

  await writeFile({
    path: `libs/${projectName}/tailwind.config.js`,
    content: tailwindConfig,
    type: 'typescript',
  })
}
