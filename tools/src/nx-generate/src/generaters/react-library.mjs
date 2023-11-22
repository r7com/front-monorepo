import shell from 'shelljs'
import { copyFile, rename } from '../utils/utils.mjs'

export class Library {
  constructor({ projectName, prefixName, generate }) {
    this.projectName = projectName
    this.prefixName = prefixName
    this.generate = generate
    this.init()
  }

  async init() {
    this.commandExec()
    copyFile('/tools/src/nx-generate/src/templates/tailwind/', `/libs/${this.projectName}/`)
    this.renameFiles()
  }

  commandExec() {
    shell.cd('libs')
    shell.exec(
      `yarn nx g @nx/react:library --name=${this.projectName} --bundler=vite --compiler=swc --importPath=@r7/${this.projectName} --projectNameAndRootFormat=as-provided --publishable=true`,
    )
  }

  async renameFiles() {
    await rename(`/libs/${this.projectName}/src/lib`, `/libs/${this.projectName}/src/components`)
    await rename(
      `/libs/${this.projectName}/src/components/${this.projectName}.spec.tsx`,
      `/libs/${this.projectName}/src/components/${this.projectName}.cy.tsx`,
    )
  }
}
