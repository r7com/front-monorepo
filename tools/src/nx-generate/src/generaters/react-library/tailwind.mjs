import { templatesDir } from '../../utils/constants.mjs'
import { copyFile, readFile, writeFile } from '../../utils/utils.mjs'

export async function tailwind({ prefixName, projectName }) {
  await copyFile(`${templatesDir}/tailwind/`, `/libs/${projectName}/`)
  const tailwindConfig = await readFile({
    path: `/libs/${projectName}/tailwind.config.js`,
    line: 6,
    insertElements: `prefix: '${prefixName}',`,
  })

  // const tailwindFormat = prettierFormat(tailwindConfig, 'typescript')
  await writeFile({
    path: `/libs/${projectName}/tailwind.config.js`,
    content: tailwindConfig,
    type: 'typescript',
  })
}
