import shell from 'shelljs'
import { tailwind } from './tailwind.mjs'
import { cypress } from './cypress.mjs'
import { projectJson } from './project-json.mjs'
import { storybook } from './storybook.mjs'
import { filesManipulation } from './files-manipulation.mjs'

export class Library {
  constructor({ projectName, prefixName }) {
    this.projectName = projectName
    this.prefixName = prefixName
    this.init()
  }

  async init() {
    this.generateLib()
    tailwind({ prefixName: this.prefixName, projectName: this.projectName })
    await filesManipulation(this.projectName)
    cypress(this.projectName)
    projectJson(this.projectName)
    storybook(this.projectName)
  }

  async generateLib() {
    shell.cd('libs')
    await shell.exec(
      `yarn nx g @nx/react:library --name=${this.projectName} --bundler=vite --compiler=swc --importPath=@r7/${this.projectName} --projectNameAndRootFormat=as-provided --publishable=true`,
    )
  }
}
