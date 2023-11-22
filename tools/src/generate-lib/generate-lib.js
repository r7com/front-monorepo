const inquirer = require('inquirer')
const { exec, cd, cp } = require('shelljs')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const prettier = require('prettier')

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Qual sera o nome do projeto ?',
    validate: function (input) {
      return input.trim() !== '' || 'Por favor, forneça um valor válido.'
    },
  },
  {
    type: 'input',
    name: 'prefixName',
    message: 'Qual sera o prefix ? Ex: prefix-',
    validate: function (input) {
      return input.trim() !== '' || 'Por favor, forneça um valor válido.'
    },
  },
]

const root = path.resolve(__dirname + '../../../../')

const init = () => {
  answersPrompts()
}

const answersPrompts = async () => {
  try {
    const { projectName, prefixName } = await inquirer.prompt(questions)
    cd('libs')
    exec(
      `yarn nx g @nx/react:library --name=${projectName} --bundler=vite --compiler=swc --importPath=@r7/${projectName} --projectNameAndRootFormat=as-provided --publishable=true`,
    )
    cp(
      '-R',
      root + '/tools/src/generate-lib/src/templates/tailwind/*',
      root + `/libs/${projectName}/`,
    )

    // renomeando pasta
    fs.renameSync(
      root + `/libs/${projectName}/src/lib`,
      root + `/libs/${projectName}/src/components`,
    )
    const renameIndexContent = fs.readFileSync(root + `/libs/${projectName}/src/index.ts`, 'utf8')
    const newRenameIndexContent = renameIndexContent.replace(/'\.\/lib\//g, "'./components/")
    fs.writeFileSync(root + `/libs/${projectName}/src/index.ts`, newRenameIndexContent, 'utf8')

    // Leitura do arquivo
    const tailwindConfig = fs.readFileSync(`${root}/libs/${projectName}/tailwind.config.js`, 'utf8')
    const parseTailwindConfig = tailwindConfig.replace(/prefix: '[^']*'/, `prefix: '${prefixName}'`)
    // Gravacao do arquivo
    fs.writeFileSync(`${root}/libs/${projectName}/tailwind.config.js`, parseTailwindConfig, 'utf8')

    // Cypress
    const addContents = [
      "import '@frsource/cypress-plugin-visual-regression-diff'",
      "import '@testing-library/cypress/add-commands'",
      "import '../../src/styles.css'",
    ]
    const $link = `<link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
    rel="stylesheet" />`

    exec(`yarn nx g @nx/react:cypress-component-configuration --project=${projectName}`)
    const $content = fs.readFileSync(
      root + `/libs/${projectName}/cypress/support/component-index.html`,
      'utf8',
    )
    // Carrega o conteúdo HTML no cheerio
    const $ = cheerio.load($content)
    $('head').append($link)

    // Obtém o novo conteúdo HTML modificado
    const newContent = $.html()
    const newContentFormat = prettier.format(newContent, { parser: 'html' })
    fs.writeFileSync(
      root + `/libs/${projectName}/cypress/support/component-index.html`,
      newContentFormat,
      'utf8',
    )

    const cypressConponents = fs.readFileSync(
      root + `/libs/${projectName}/cypress/support/component.ts`,
      'utf8',
    )

    // Adiciona os novos conteúdos ao início do arquivo
    const cypressConponentsContent = addContents.join('\n') + '\n' + cypressConponents

    // Atualização do arquivo com o novo conteúdo
    fs.writeFileSync(
      root + `/libs/${projectName}/cypress/support/component.ts`,
      cypressConponentsContent,
      'utf8',
    )

    //copiando templates do cypress
    cp(
      '-R',
      root + '/tools/src/generate-lib/src/templates/cypress/tsconfig.json',
      root + `/libs/${projectName}/cypress/`,
    )
    cp(
      '-R',
      root + '/tools/src/generate-lib/src/templates/cypress/cypress.config.ts',
      root + `/libs/${projectName}/`,
    )

    // SVGR
    const SVGR = `
      svgr({
          svgrOptions: {
            titleProp: true,
          },
        }),
      `
    const svgrImport = "import svgr from 'vite-plugin-svgr';\n"
    const viteConfig = fs.readFileSync(root + `/libs/${projectName}/vite.config.ts`, 'utf8')
    const viteConfigFull = svgrImport + viteConfig
    // Procura pela posição onde a configuração svgr deve ser adicionada
    const insertPosition = viteConfigFull.indexOf('plugins: [') + 'plugins: ['.length

    // Insere a nova configuração no array de plugins
    const newViteConfig = [
      viteConfigFull.slice(0, insertPosition),
      SVGR,
      viteConfigFull.slice(insertPosition),
    ].join('')

    const viteConfigFullPrettier = prettier.format(newViteConfig, {
      parser: 'typescript',
      ...prettier.resolveConfig.sync(),
    })
    // Atualização do arquivo com o novo conteúdo
    fs.writeFileSync(root + `/libs/${projectName}/vite.config.ts`, viteConfigFullPrettier, 'utf8')

    //Project.json
    const projectJson = JSON.parse(
      fs.readFileSync(root + `/libs/${projectName}/project.json`, 'utf8'),
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

    // Atualização do arquivo com o novo conteúdo
    fs.writeFileSync(
      root + `/libs/${projectName}/project.json`,
      JSON.stringify(projectJson, null, 2),
      'utf8',
    )
  } catch (error) {
    console.log(error)
  }
}

init()
