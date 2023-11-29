import { templatesDir } from '../../utils/constants.mjs'
import { copyFile } from '../../utils/utils.mjs'

export async function storybook(projectName) {
  await copyFile(
    `${templatesDir}/storybook/template.stories.tsx`,
    `libs/${projectName}/src/components/${projectName}.stories.tsx`,
  )
}
