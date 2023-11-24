import { templatesDir } from '../../utils/constants.mjs'
import { copyFile, prettierFormat, readFile, writeFile } from '../../utils/utils.mjs'

export async function tailwind({ prefixName, projectName }) {
  await copyFile(`${templatesDir}/tailwind/`, `/libs/${projectName}/`)
  const tailwindConfig = await readFile({
    path: `/libs/${projectName}/tailwind.config.js`,
    line: 6,
    insertElements: `prefix: '${prefixName}',`,
  })
  const tailwindFormat = prettierFormat(tailwindConfig, 'typescript')
  await writeFile(`/libs/${projectName}/tailwind.config.js`, tailwindFormat)
}
