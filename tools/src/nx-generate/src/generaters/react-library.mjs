import shell from 'shelljs'
import { copyFile, renameFile, writeFile } from '../utils/utils.mjs'
import { firstTest } from '../utils/constants.mjs'

export class Library {
  constructor({ projectName, prefixName }) {
    this.projectName = projectName
    this.prefixName = prefixName
    this.init()
  }

  init() {
    this.generateNX()
    this.tailwindManipulation()
    this.filesManipulation()
    this.cypressManipulation()
  }

  generateNX() {
    shell.cd('libs')
    shell.exec(
      `yarn nx g @nx/react:library --name=${this.projectName} --bundler=vite --compiler=swc --importPath=@r7/${this.projectName} --projectNameAndRootFormat=as-provided --publishable=true`,
    )
  }

  async tailwindManipulation() {
    copyFile('/tools/src/nx-generate/src/templates/tailwind/', `/libs/${this.projectName}/`)
  }

  async cypressManipulation() {}

  async filesManipulation() {
    await renameFile(
      `/libs/${this.projectName}/src/lib`,
      `/libs/${this.projectName}/src/components`,
    )
    await renameFile(
      `/libs/${this.projectName}/src/components/${this.projectName}.spec.tsx`,
      `/libs/${this.projectName}/src/components/${this.projectName}.cy.tsx`,
    )
    await writeFile(
      `/libs/${this.projectName}/src/components/${this.projectName}.cy.tsx`,
      firstTest,
    )
    // const indexContent = await readFile({path: `/libs/${this.projectName}/src/index.ts}`})
    // console.log(indexContent)
    // const updateIndexContent = indexContent.replace(/'\.\/lib\//g, "'./components/")
    // writeFile(`/libs/${this.projectName}/src/index.ts`, updateIndexContent, 'utf8')
  }
}
