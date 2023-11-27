import shell from 'shelljs'
import { tailwind } from './tailwind.mjs'
import { cypress } from './cypress.mjs'
import { projectJson } from './project-json.mjs'
import { storybook } from './storybook.mjs'
import { filesManipulation } from './files-manipulation.mjs'

export async function library({ prefixName, projectName }) {
  generateLib()
  tailwind({ prefixName, projectName })
  await filesManipulation(projectName)
  cypress(projectName)
  projectJson(projectName)
  storybook(projectName)

  async function generateLib() {
    shell.cd('libs')
    await shell.exec(
      `yarn nx g @nx/react:library --name=${projectName} --bundler=vite --compiler=swc --importPath=@r7/${projectName} --projectNameAndRootFormat=as-provided --publishable=true`,
    )
  }
}
