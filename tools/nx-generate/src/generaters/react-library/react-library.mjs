import shell from 'shelljs'
import { tailwind } from './tailwind.mjs'
import { cypress } from './cypress.mjs'
import { projectJson } from './project-json.mjs'
import { storybook } from './storybook.mjs'
import { filesManipulation } from './files-manipulation.mjs'

export async function library({ prefixName, projectName }) {
  await generateLib()
  await filesManipulation(projectName)
  await tailwind({ prefixName, projectName })
  await cypress(projectName)
  await projectJson(projectName)
  await storybook(projectName)

  async function generateLib() {
    await shell.exec(
      `yarn nx g @nx/react:library --name=${projectName} --directory=libs/${projectName} --bundler=vite --compiler=swc --importPath=@r7/${projectName} --projectNameAndRootFormat=as-provided --publishable=true`,
    )
  }
}
