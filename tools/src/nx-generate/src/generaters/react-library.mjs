import shell from 'shelljs'
import { copyFile, renameFile, writeFile, readFile, prettierFormat } from '../utils/utils.mjs'
import { SVGR, cypresslink, firstTest, importCypress, svgrImport } from '../utils/constants.mjs'
import { parse } from 'node-html-parser'

export class Library {
  constructor({ projectName, prefixName }) {
    this.projectName = projectName
    this.prefixName = prefixName
    this.init()
  }

  async init() {
    this.generateNX()
    this.tailwindManipulation()
    await this.filesManipulation()
    this.cypressManipulation()
    this.projectJsonManipulation()
    this.storybookManipulation()
  }

  async generateNX() {
    shell.cd('libs')
    await shell.exec(
      `yarn nx g @nx/react:library --name=${this.projectName} --bundler=vite --compiler=swc --importPath=@r7/${this.projectName} --projectNameAndRootFormat=as-provided --publishable=true`,
    )
  }

  async tailwindManipulation() {
    await copyFile('/tools/src/nx-generate/src/templates/tailwind/', `/libs/${this.projectName}/`)
    const tailwindConfig = await readFile({
      path: `/libs/${this.projectName}/tailwind.config.js`,
      line: 6,
      insertElements: `prefix: '${this.prefixName}',`,
    })
    const tailwindFormat = prettierFormat(tailwindConfig, 'typescript')
    await writeFile(`/libs/${this.projectName}/tailwind.config.js`, tailwindFormat)
  }

  async cypressManipulation() {
    await shell.exec(
      `yarn nx g @nx/react:cypress-component-configuration --project=${this.projectName}`,
    )
    const content = await readFile({
      path: `/libs/${this.projectName}/cypress/support/component-index.html`,
    })
    const $html = parse(content)
    const $link = parse(cypresslink)
    const $head = $html.querySelector('head')
    $head.appendChild($link)
    const formatHTML = prettierFormat(String($html), 'html')
    writeFile(`/libs/${this.projectName}/cypress/support/component-index.html`, formatHTML)

    const cypressConponent = await readFile({
      path: `/libs/${this.projectName}/cypress/support/component.ts`,
      line: 18,
      insertElements: importCypress,
    })
    writeFile(`/libs/${this.projectName}/cypress/support/component.ts`, cypressConponent)

    //rever
    let tsConfig = JSON.parse(
      await readFile({ path: `/libs/${this.projectName}/cypress/tsconfig.json` }),
    )
    tsConfig.compilerOptions.types.push('@testing-library/cypress')
    tsConfig = JSON.stringify(tsConfig)
    tsConfig = prettierFormat(tsConfig, 'json')

    writeFile(`/libs/${this.projectName}/cypress/tsconfig.json`, tsConfig)
    await copyFile(
      '/tools/src/nx-generate/src/templates/cypress/cypress.config.ts',
      `/libs/${this.projectName}/cypress.config.ts`,
    )
  }

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

    const indexContent = await readFile({ path: `/libs/${this.projectName}/src/index.ts` })
    const updateIndexContent = indexContent.replace(/'\.\/lib\//g, "'./components/")
    writeFile(`/libs/${this.projectName}/src/index.ts`, updateIndexContent)

    const viteSvgrConfig = await readFile({
      path: `/libs/${this.projectName}/vite.config.ts`,
      line: 1,
      insertElements: svgrImport,
    })
    writeFile(`/libs/${this.projectName}/vite.config.ts`, viteSvgrConfig)

    let viteConfig = await readFile({
      path: `/libs/${this.projectName}/vite.config.ts`,
      line: 13,
      insertElements: SVGR,
    })
    viteConfig = prettierFormat(viteConfig, 'typescript')
    writeFile(`/libs/${this.projectName}/vite.config.ts`, viteConfig)
  }

  async projectJsonManipulation() {
    const projectJson = JSON.parse(
      await readFile({ path: `/libs/${this.projectName}/project.json` }),
    )

    const newContents = {
      typecheck: {
        executor: 'nx:run-commands',
        options: {
          command: 'tsc --noEmit -p {projectRoot}/tsconfig.lib.json',
        },
      },
      version: {
        executor: '@jscutlery/semver:version',
        options: {
          preset: 'angular',
        },
      },
    }

    const updateComponentsTestsOptions = {
      options: {
        watch: true,
        browser: 'chrome',
      },
    }

    const updateComponentsTests = {
      dependsOn: ['^build'],
      configurations: {
        ci: {
          watch: false,
          quiet: true,
          env: {
            pluginVisualRegressionUpdateImages: true,
          },
        },
      },
    }

    // Adiciona o novo objeto dentro do bloco "targets"
    if (!projectJson.targets) {
      projectJson.targets = {}
    }

    projectJson.targets['component-test'] = {
      ...projectJson.targets['component-test'],
      ...updateComponentsTests,
    }

    projectJson.targets['component-test'].options = {
      ...projectJson.targets['component-test'].options,
      ...updateComponentsTestsOptions.options,
    }
    projectJson.targets = { ...projectJson.targets, ...newContents }

    writeFile(`/libs/${this.projectName}/project.json`, JSON.stringify(projectJson, null, 2))
  }

  async storybookManipulation() {
    await copyFile(
      '/tools/src/nx-generate/src/templates/storybook/template.stories.tsx',
      `/libs/${this.projectName}/src/components/${this.projectName}.stories.tsx`,
    )
  }
}
