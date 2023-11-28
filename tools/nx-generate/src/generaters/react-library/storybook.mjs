import { templatesDir } from '../../utils/constants.mjs'
import { copyFile } from '../../utils/utils.mjs'
import fse from 'fs-extra'

export async function storybook(projectName) {
  await copyFile(
    `${templatesDir}/storybook/template.stories.tsx`,
    `libs/${projectName}/src/components/${projectName}.stories.tsx`,
  )
}
