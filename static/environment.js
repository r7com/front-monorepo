window.exclude = []
window.watch = false
window.environment = 'release'
window.localMode = 'build'

window.appConfig = {
  showDebugger: false,
  showExperimentalFeatures: false,
  workspaces: [
    {
      id: 'local',
      label: 'local',
      projectGraphUrl: 'project-graph.json',
      taskGraphUrl: 'task-graph.json',
    },
  ],
  defaultWorkspaceId: 'local',
}
window.projectGraphResponse = {
  hash: 'a7626f6afb71c64e693f502ccbc87ee62ca0d35f273a5dde7e60e3e41222c10c',
  projects: [
    {
      name: 'ui-components-admin',
      type: 'lib',
      data: {
        name: 'ui-components-admin',
        $schema: '../../node_modules/nx/schemas/project-schema.json',
        sourceRoot: 'libs/ui-components-admin/src',
        projectType: 'library',
        tags: [],
        targets: {
          lint: {
            inputs: ['default', '{workspaceRoot}/.eslintrc.json', '{workspaceRoot}/.eslintignore'],
            executor: '@nx/linter:eslint',
            outputs: ['{options.outputFile}'],
            options: { lintFilePatterns: ['libs/ui-components-admin/**/*.{ts,tsx,js,jsx}'] },
            configurations: {},
          },
          build: {
            dependsOn: ['^build'],
            inputs: ['production', '^production'],
            executor: '@nx/vite:build',
            outputs: ['{options.outputPath}'],
            defaultConfiguration: 'production',
            options: { outputPath: 'dist/libs/ui-components-admin' },
            configurations: {
              development: { mode: 'development' },
              production: { mode: 'production' },
            },
          },
          test: {
            inputs: ['default', '^production', '{workspaceRoot}/jest.preset.js'],
            executor: '@nx/jest:jest',
            outputs: ['{workspaceRoot}/coverage/{projectRoot}'],
            options: {
              jestConfig: 'libs/ui-components-admin/jest.config.ts',
              passWithNoTests: true,
            },
            configurations: { ci: { ci: true, codeCoverage: true } },
          },
          'component-test': {
            inputs: ['default', '^production'],
            executor: '@nx/cypress:cypress',
            options: {
              cypressConfig: 'libs/ui-components-admin/cypress.config.ts',
              testingType: 'component',
              devServerTarget: '__cypress__:build',
              skipServe: true,
              watch: true,
              browser: 'chrome',
            },
            configurations: {},
          },
          storybook: {
            executor: '@nx/storybook:storybook',
            options: { port: 6606, configDir: 'libs/ui-components-admin/.storybook' },
            configurations: { ci: { quiet: true } },
          },
          'build-storybook': {
            inputs: ['default', '^production', '!{projectRoot}/.storybook/**/*'],
            executor: '@nx/storybook:build',
            outputs: ['{options.outputDir}'],
            options: {
              outputDir: 'dist/storybook/ui-components-admin',
              configDir: 'libs/ui-components-admin/.storybook',
            },
            configurations: { ci: { quiet: true } },
          },
        },
        root: 'libs/ui-components-admin',
        implicitDependencies: [],
      },
    },
    {
      name: '__cypress__',
      type: 'app',
      data: {
        name: '__cypress__',
        $schema: '../../node_modules/nx/schemas/project-schema.json',
        sourceRoot: 'apps/__cypress__/src',
        projectType: 'application',
        targets: {
          build: {
            dependsOn: ['^build'],
            inputs: ['production', '^production'],
            executor: '@nx/vite:build',
            outputs: ['{options.outputPath}'],
            defaultConfiguration: 'production',
            options: { outputPath: 'dist/apps/__cypress__' },
            configurations: {
              development: { mode: 'development' },
              production: { mode: 'production' },
            },
          },
          serve: {
            executor: '@nx/vite:dev-server',
            defaultConfiguration: 'development',
            options: { buildTarget: '__cypress__:build' },
            configurations: {
              development: { buildTarget: '__cypress__:build:development', hmr: true },
              production: { buildTarget: '__cypress__:build:production', hmr: false },
            },
          },
          preview: {
            executor: '@nx/vite:preview-server',
            defaultConfiguration: 'development',
            options: { buildTarget: '__cypress__:build' },
            configurations: {
              development: { buildTarget: '__cypress__:build:development' },
              production: { buildTarget: '__cypress__:build:production' },
            },
          },
          test: {
            inputs: ['default', '^production', '{workspaceRoot}/jest.preset.js'],
            executor: '@nx/vite:test',
            outputs: ['coverage/apps/__cypress__'],
            options: { passWithNoTests: true, reportsDirectory: '../../coverage/apps/__cypress__' },
            configurations: {},
          },
        },
        tags: [],
        root: 'apps/__cypress__',
        implicitDependencies: [],
      },
    },
    {
      name: 'voting-e2e',
      type: 'e2e',
      data: {
        name: 'voting-e2e',
        $schema: '../../node_modules/nx/schemas/project-schema.json',
        sourceRoot: 'apps/voting-e2e/src',
        projectType: 'application',
        targets: {
          e2e: {
            inputs: ['default', '^production'],
            executor: '@nx/cypress:cypress',
            options: {
              cypressConfig: 'apps/voting-e2e/cypress.config.ts',
              devServerTarget: 'voting:serve:development',
              testingType: 'e2e',
            },
            configurations: {
              production: { devServerTarget: 'voting:serve:production' },
              ci: { devServerTarget: 'voting:serve-static' },
            },
          },
          lint: {
            inputs: ['default', '{workspaceRoot}/.eslintrc.json', '{workspaceRoot}/.eslintignore'],
            executor: '@nx/linter:eslint',
            outputs: ['{options.outputFile}'],
            options: { lintFilePatterns: ['apps/voting-e2e/**/*.{js,ts}'] },
            configurations: {},
          },
        },
        tags: [],
        implicitDependencies: ['voting'],
        root: 'apps/voting-e2e',
      },
    },
    {
      name: 'admin-e2e',
      type: 'e2e',
      data: {
        name: 'admin-e2e',
        $schema: '../../node_modules/nx/schemas/project-schema.json',
        sourceRoot: 'apps/admin-e2e/src',
        projectType: 'application',
        targets: {
          e2e: {
            inputs: ['default', '^production'],
            executor: '@nx/cypress:cypress',
            options: {
              cypressConfig: 'apps/admin-e2e/cypress.config.ts',
              devServerTarget: 'admin:serve:development',
              testingType: 'e2e',
              baseUrl: 'http://localhost:4200',
            },
            configurations: {
              production: { devServerTarget: 'admin:serve:production' },
              ci: { devServerTarget: 'admin:serve-static' },
            },
          },
          lint: {
            inputs: ['default', '{workspaceRoot}/.eslintrc.json', '{workspaceRoot}/.eslintignore'],
            executor: '@nx/linter:eslint',
            outputs: ['{options.outputFile}'],
            options: { lintFilePatterns: ['apps/admin-e2e/**/*.{js,ts}'] },
            configurations: {},
          },
        },
        tags: [],
        implicitDependencies: ['admin'],
        root: 'apps/admin-e2e',
      },
    },
    {
      name: 'voting',
      type: 'app',
      data: {
        name: 'voting',
        $schema: '../../node_modules/nx/schemas/project-schema.json',
        sourceRoot: 'apps/voting/src',
        projectType: 'application',
        targets: {
          build: {
            dependsOn: ['^build'],
            inputs: ['production', '^production'],
            executor: '@nx/webpack:webpack',
            outputs: ['{options.outputPath}'],
            defaultConfiguration: 'production',
            options: {
              compiler: 'swc',
              outputPath: 'dist/apps/voting',
              index: 'apps/voting/src/index.html',
              baseHref: '/',
              main: 'apps/voting/src/main.ts',
              tsConfig: 'apps/voting/tsconfig.app.json',
              assets: ['apps/voting/src/favicon.ico', 'apps/voting/src/assets'],
              styles: [],
              scripts: [],
              isolatedConfig: true,
              webpackConfig: 'apps/voting/webpack.config.js',
              postcssConfig: 'apps/voting/postcss.config.js',
            },
            configurations: {
              development: {
                extractLicenses: false,
                optimization: false,
                sourceMap: true,
                vendorChunk: true,
              },
              production: {
                fileReplacements: [
                  {
                    replace: 'apps/voting/src/environments/environment.ts',
                    with: 'apps/voting/src/environments/environment.prod.ts',
                  },
                ],
                optimization: true,
                outputHashing: 'all',
                sourceMap: false,
                namedChunks: false,
                extractLicenses: true,
                vendorChunk: false,
                webpackConfig: 'apps/voting/webpack.config.prod.js',
              },
            },
          },
          serve: {
            executor: '@nx/react:module-federation-dev-server',
            defaultConfiguration: 'development',
            options: { buildTarget: 'voting:build', hmr: true, port: 4201 },
            configurations: {
              development: { buildTarget: 'voting:build:development' },
              production: { buildTarget: 'voting:build:production', hmr: false },
            },
          },
          lint: {
            inputs: ['default', '{workspaceRoot}/.eslintrc.json', '{workspaceRoot}/.eslintignore'],
            executor: '@nx/linter:eslint',
            outputs: ['{options.outputFile}'],
            options: { lintFilePatterns: ['apps/voting/**/*.{ts,tsx,js,jsx}'] },
            configurations: {},
          },
          typecheck: {
            executor: 'nx:run-commands',
            options: {
              commands: ['tsc -p tsconfig.app.json --noEmit'],
              cwd: 'apps/voting',
              forwardAllArgs: false,
            },
          },
          'serve-static': {
            executor: '@nx/web:file-server',
            defaultConfiguration: 'development',
            options: { buildTarget: 'voting:build', port: 4201 },
            configurations: {
              development: { buildTarget: 'voting:build:development' },
              production: { buildTarget: 'voting:build:production' },
            },
          },
          test: {
            inputs: ['default', '^production', '{workspaceRoot}/jest.preset.js'],
            executor: '@nx/jest:jest',
            outputs: ['{workspaceRoot}/coverage/{projectRoot}'],
            options: { jestConfig: 'apps/voting/jest.config.ts', passWithNoTests: true },
            configurations: { ci: { ci: true, codeCoverage: true } },
          },
        },
        tags: [],
        root: 'apps/voting',
        implicitDependencies: [],
      },
    },
    {
      name: 'admin',
      type: 'app',
      data: {
        name: 'admin',
        $schema: '../../node_modules/nx/schemas/project-schema.json',
        sourceRoot: 'apps/admin/src',
        projectType: 'application',
        targets: {
          build: {
            dependsOn: ['^build'],
            inputs: ['production', '^production'],
            executor: '@nx/webpack:webpack',
            outputs: ['{options.outputPath}'],
            defaultConfiguration: 'production',
            options: {
              compiler: 'swc',
              outputPath: 'dist/apps/admin',
              index: 'apps/admin/src/index.html',
              baseHref: '/',
              main: 'apps/admin/src/main.ts',
              tsConfig: 'apps/admin/tsconfig.app.json',
              assets: ['apps/admin/src/favicon.ico', 'apps/admin/src/assets'],
              styles: [],
              scripts: [],
              isolatedConfig: true,
              webpackConfig: 'apps/admin/webpack.config.js',
              postcssConfig: 'apps/admin/postcss.config.js',
            },
            configurations: {
              development: {
                extractLicenses: false,
                optimization: false,
                sourceMap: true,
                vendorChunk: true,
              },
              production: {
                fileReplacements: [
                  {
                    replace: 'apps/admin/src/environments/environment.ts',
                    with: 'apps/admin/src/environments/environment.prod.ts',
                  },
                ],
                optimization: true,
                outputHashing: 'all',
                sourceMap: false,
                namedChunks: false,
                extractLicenses: true,
                vendorChunk: false,
                webpackConfig: 'apps/admin/webpack.config.prod.js',
              },
            },
          },
          serve: {
            executor: '@nx/react:module-federation-dev-server',
            defaultConfiguration: 'development',
            options: { buildTarget: 'admin:build', hmr: true, port: 4200 },
            configurations: {
              development: { buildTarget: 'admin:build:development' },
              production: { buildTarget: 'admin:build:production', hmr: false },
            },
          },
          lint: {
            inputs: ['default', '{workspaceRoot}/.eslintrc.json', '{workspaceRoot}/.eslintignore'],
            executor: '@nx/linter:eslint',
            outputs: ['{options.outputFile}'],
            options: { lintFilePatterns: ['apps/admin/**/*.{ts,tsx,js,jsx}'] },
            configurations: {},
          },
          typecheck: {
            executor: 'nx:run-commands',
            options: {
              commands: ['tsc -p tsconfig.app.json --noEmit'],
              cwd: 'apps/admin',
              forwardAllArgs: false,
            },
          },
          'serve-static': {
            executor: '@nx/web:file-server',
            defaultConfiguration: 'development',
            options: { buildTarget: 'admin:build', port: 4200 },
            configurations: {
              development: { buildTarget: 'admin:build:development' },
              production: { buildTarget: 'admin:build:production' },
            },
          },
          test: {
            inputs: ['default', '^production', '{workspaceRoot}/jest.preset.js'],
            executor: '@nx/jest:jest',
            outputs: ['{workspaceRoot}/coverage/{projectRoot}'],
            options: { jestConfig: 'apps/admin/jest.config.ts', passWithNoTests: true },
            configurations: { ci: { ci: true, codeCoverage: true } },
          },
        },
        tags: [],
        root: 'apps/admin',
        implicitDependencies: [],
      },
    },
  ],
  dependencies: {
    'ui-components-admin': [],
    __cypress__: [],
    'voting-e2e': [{ source: 'voting-e2e', target: 'voting', type: 'implicit' }],
    'admin-e2e': [{ source: 'admin-e2e', target: 'admin', type: 'implicit' }],
    voting: [],
    admin: [{ source: 'admin', target: 'ui-components-admin', type: 'static' }],
  },
  fileMap: {
    __cypress__: [
      { file: 'apps/__cypress__/README.md', hash: '16377294238708909382' },
      { file: 'apps/__cypress__/index.html', hash: '1645126944210706132' },
      { file: 'apps/__cypress__/project.json', hash: '10887674502494088428' },
      { file: 'apps/__cypress__/public/favicon.ico', hash: '9303420814833116677' },
      {
        file: 'apps/__cypress__/src/app/app.tsx',
        hash: '16517857668834760347',
        deps: ['npm:@testing-library/react'],
      },
      { file: 'apps/__cypress__/src/assets/.gitkeep', hash: '3244421341483603138' },
      {
        file: 'apps/__cypress__/src/main.tsx',
        hash: '4169355034420502327',
        deps: ['npm:react', 'npm:react-dom'],
      },
      { file: 'apps/__cypress__/tsconfig.app.json', hash: '14892890173292488116' },
      { file: 'apps/__cypress__/tsconfig.json', hash: '11166545116916107487' },
      { file: 'apps/__cypress__/tsconfig.spec.json', hash: '9804569007269858649' },
      {
        file: 'apps/__cypress__/vite.config.ts',
        hash: '11047088231029357584',
        deps: ['npm:vite', 'npm:@vitejs/plugin-react-swc', 'npm:vite-tsconfig-paths'],
      },
    ],
    'admin-e2e': [
      { file: 'apps/admin-e2e/.eslintrc.json', hash: '14060216369337943343' },
      {
        file: 'apps/admin-e2e/cypress.config.ts',
        hash: '16020786795770395701',
        deps: ['npm:cypress', 'npm:@nx/cypress'],
      },
      { file: 'apps/admin-e2e/project.json', hash: '10712725750768425627' },
      { file: 'apps/admin-e2e/src/e2e/app.cy.ts', hash: '10628635690133719684' },
      { file: 'apps/admin-e2e/src/fixtures/example.json', hash: '11614668686582597233' },
      { file: 'apps/admin-e2e/src/support/app.po.ts', hash: '15050139299431069743' },
      { file: 'apps/admin-e2e/src/support/commands.ts', hash: '17927658295940677281' },
      { file: 'apps/admin-e2e/src/support/e2e.ts', hash: '11297821507417933856' },
      { file: 'apps/admin-e2e/tsconfig.json', hash: '1788248097864730386' },
    ],
    'ui-components-admin': [
      { file: 'libs/ui-components-admin/.eslintrc.json', hash: '11012487992710232822' },
      {
        file: 'libs/ui-components-admin/.storybook/main.ts',
        hash: '6910668075895105501',
        deps: ['npm:@storybook/react-vite'],
      },
      { file: 'libs/ui-components-admin/.storybook/preview.ts', hash: '3244421341483603138' },
      { file: 'libs/ui-components-admin/.storybook/tsconfig.json', hash: '16972774424527456223' },
      { file: 'libs/ui-components-admin/README.md', hash: '10868580209528753655' },
      {
        file: 'libs/ui-components-admin/cypress.config.ts',
        hash: '9367643052176324610',
        deps: [
          'npm:@nx/react',
          'npm:cypress',
          'npm:@frsource/cypress-plugin-visual-regression-diff',
        ],
      },
      {
        file: 'libs/ui-components-admin/cypress/fixtures/example.json',
        hash: '11785586596216172004',
      },
      {
        file: 'libs/ui-components-admin/cypress/support/commands.ts',
        hash: '10919820211288147459',
      },
      {
        file: 'libs/ui-components-admin/cypress/support/component-index.html',
        hash: '12290580033765690757',
      },
      {
        file: 'libs/ui-components-admin/cypress/support/component.ts',
        hash: '12830597338040401927',
        deps: [
          'npm:cypress',
          'npm:@frsource/cypress-plugin-visual-regression-diff',
          'npm:@testing-library/cypress',
        ],
      },
      { file: 'libs/ui-components-admin/cypress/tsconfig.json', hash: '2409914451976540151' },
      { file: 'libs/ui-components-admin/jest.config.ts', hash: '10334744500845982993' },
      { file: 'libs/ui-components-admin/package.json', hash: '5615075806522738350' },
      {
        file: 'libs/ui-components-admin/postcss.config.js',
        hash: '5023496575127697843',
        deps: ['npm:path'],
      },
      { file: 'libs/ui-components-admin/project.json', hash: '17944669569707991726' },
      {
        file: 'libs/ui-components-admin/src/components/Button/Button.stories.tsx',
        hash: '4154871900092189144',
        deps: ['npm:@storybook/react'],
      },
      {
        file: 'libs/ui-components-admin/src/components/Button/Button.tsx',
        hash: '12970014084028969981',
      },
      {
        file: 'libs/ui-components-admin/src/components/Button/index.ts',
        hash: '11936205126108115086',
      },
      {
        file: 'libs/ui-components-admin/src/components/__image_snapshots__/UiTest renders #0.png',
        hash: '15262471913270832742',
      },
      {
        file: 'libs/ui-components-admin/src/components/ui-test.cy.tsx',
        hash: '6287646116914937278',
      },
      { file: 'libs/ui-components-admin/src/components/ui-test.tsx', hash: '6575447533338272715' },
      { file: 'libs/ui-components-admin/src/index.ts', hash: '4295553396281927006' },
      { file: 'libs/ui-components-admin/src/style.css', hash: '2866083945719690482' },
      {
        file: 'libs/ui-components-admin/tailwind.config.js',
        hash: '14326052407803437230',
        deps: ['npm:@nx/react', 'npm:path'],
      },
      { file: 'libs/ui-components-admin/tsconfig.json', hash: '9640226335746482735' },
      { file: 'libs/ui-components-admin/tsconfig.lib.json', hash: '9872469080924326608' },
      { file: 'libs/ui-components-admin/tsconfig.spec.json', hash: '6514620907549802163' },
      {
        file: 'libs/ui-components-admin/vite.config.ts',
        hash: '14560420385687738793',
        deps: [
          'npm:vite',
          'npm:@vitejs/plugin-react-swc',
          'npm:vite-tsconfig-paths',
          'npm:vite-plugin-dts',
          'npm:path',
        ],
      },
    ],
    admin: [
      { file: 'apps/admin/.eslintrc.json', hash: '11012487992710232822' },
      { file: 'apps/admin/jest.config.ts', hash: '3338584599913165498' },
      { file: 'apps/admin/module-federation.config.js', hash: '14551501371009551636' },
      { file: 'apps/admin/postcss.config.js', hash: '5023496575127697843', deps: ['npm:path'] },
      { file: 'apps/admin/project.json', hash: '10791087020287605763' },
      {
        file: 'apps/admin/src/app/app.spec.tsx',
        hash: '17226452603920673492',
        deps: ['npm:@testing-library/react', 'npm:react-router-dom'],
      },
      {
        file: 'apps/admin/src/app/app.tsx',
        hash: '3450267264240358255',
        deps: ['npm:react', 'npm:react-router-dom', 'ui-components-admin', 'npm:voting/Module'],
      },
      { file: 'apps/admin/src/assets/.gitkeep', hash: '3244421341483603138' },
      {
        file: 'apps/admin/src/bootstrap.tsx',
        hash: '6521576630482793982',
        deps: ['npm:react', 'npm:react-dom', 'npm:react-router-dom'],
      },
      { file: 'apps/admin/src/environments/environment.prod.ts', hash: '15193672490511024794' },
      { file: 'apps/admin/src/environments/environment.ts', hash: '930473495691519962' },
      { file: 'apps/admin/src/favicon.ico', hash: '9303420814833116677' },
      { file: 'apps/admin/src/index.html', hash: '17257797254936106787' },
      { file: 'apps/admin/src/main.ts', hash: '4960394257110670126' },
      { file: 'apps/admin/src/remotes.d.ts', hash: '14176149902528117100' },
      { file: 'apps/admin/src/style.css', hash: '2866083945719690482' },
      {
        file: 'apps/admin/tailwind.config.js',
        hash: '14326052407803437230',
        deps: ['npm:@nx/react', 'npm:path'],
      },
      { file: 'apps/admin/tsconfig.app.json', hash: '17190776767862500632' },
      { file: 'apps/admin/tsconfig.json', hash: '9850153468027031608' },
      { file: 'apps/admin/tsconfig.spec.json', hash: '6298633881193702183' },
      {
        file: 'apps/admin/webpack.config.js',
        hash: '14741943532069994374',
        deps: ['npm:@nx/webpack', 'npm:@nx/react'],
      },
      {
        file: 'apps/admin/webpack.config.prod.js',
        hash: '11739473988371538070',
        deps: ['npm:@nx/webpack', 'npm:@nx/react'],
      },
    ],
    voting: [
      { file: 'apps/voting/.eslintrc.json', hash: '11012487992710232822' },
      { file: 'apps/voting/jest.config.ts', hash: '8699478531132740644' },
      { file: 'apps/voting/module-federation.config.js', hash: '2588408155380374158' },
      { file: 'apps/voting/postcss.config.js', hash: '5023496575127697843', deps: ['npm:path'] },
      { file: 'apps/voting/project.json', hash: '14536392361376711298' },
      {
        file: 'apps/voting/src/app/app.spec.tsx',
        hash: '1926283277743213419',
        deps: ['npm:@testing-library/react'],
      },
      { file: 'apps/voting/src/app/app.tsx', hash: '15459153160363269390' },
      { file: 'apps/voting/src/assets/.gitkeep', hash: '3244421341483603138' },
      {
        file: 'apps/voting/src/bootstrap.tsx',
        hash: '4169355034420502327',
        deps: ['npm:react', 'npm:react-dom'],
      },
      { file: 'apps/voting/src/environments/environment.prod.ts', hash: '15193672490511024794' },
      { file: 'apps/voting/src/environments/environment.ts', hash: '930473495691519962' },
      { file: 'apps/voting/src/favicon.ico', hash: '9303420814833116677' },
      { file: 'apps/voting/src/index.html', hash: '12938374867289853160' },
      { file: 'apps/voting/src/main.ts', hash: '4960394257110670126' },
      { file: 'apps/voting/src/remote-entry.ts', hash: '14272083425149720389' },
      { file: 'apps/voting/src/style.css', hash: '6660459740600621306' },
      {
        file: 'apps/voting/tailwind.config.js',
        hash: '3037314791514917867',
        deps: ['npm:@nx/react', 'npm:path'],
      },
      { file: 'apps/voting/tsconfig.app.json', hash: '17190776767862500632' },
      { file: 'apps/voting/tsconfig.json', hash: '9850153468027031608' },
      { file: 'apps/voting/tsconfig.spec.json', hash: '6298633881193702183' },
      {
        file: 'apps/voting/webpack.config.js',
        hash: '14741943532069994374',
        deps: ['npm:@nx/webpack', 'npm:@nx/react'],
      },
      { file: 'apps/voting/webpack.config.prod.js', hash: '9538568333280797543' },
    ],
    'voting-e2e': [
      { file: 'apps/voting-e2e/.eslintrc.json', hash: '14060216369337943343' },
      {
        file: 'apps/voting-e2e/cypress.config.ts',
        hash: '16020786795770395701',
        deps: ['npm:cypress', 'npm:@nx/cypress'],
      },
      { file: 'apps/voting-e2e/project.json', hash: '7974679400702816526' },
      { file: 'apps/voting-e2e/src/e2e/app.cy.ts', hash: '16749586579741191192' },
      { file: 'apps/voting-e2e/src/fixtures/example.json', hash: '11614668686582597233' },
      { file: 'apps/voting-e2e/src/support/app.po.ts', hash: '15050139299431069743' },
      { file: 'apps/voting-e2e/src/support/commands.ts', hash: '17927658295940677281' },
      { file: 'apps/voting-e2e/src/support/e2e.ts', hash: '11297821507417933856' },
      { file: 'apps/voting-e2e/tsconfig.json', hash: '1788248097864730386' },
    ],
  },
  layout: { appsDir: 'apps', libsDir: 'libs' },
  affected: ['ui-components-admin'],
  focus: null,
  groupByFolder: false,
  exclude: [],
}
window.taskGraphResponse = {
  taskGraphs: {
    'ui-components-admin:lint': {
      roots: ['ui-components-admin:lint'],
      tasks: {
        'ui-components-admin:lint': {
          id: 'ui-components-admin:lint',
          target: { project: 'ui-components-admin', target: 'lint' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:lint': [] },
    },
    'ui-components-admin:build': {
      roots: ['ui-components-admin:build:production'],
      tasks: {
        'ui-components-admin:build:production': {
          id: 'ui-components-admin:build:production',
          target: { project: 'ui-components-admin', target: 'build', configuration: 'production' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:build:production': [] },
    },
    'ui-components-admin:build:development': {
      roots: ['ui-components-admin:build:development'],
      tasks: {
        'ui-components-admin:build:development': {
          id: 'ui-components-admin:build:development',
          target: { project: 'ui-components-admin', target: 'build', configuration: 'development' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:build:development': [] },
    },
    'ui-components-admin:build:production': {
      roots: ['ui-components-admin:build:production'],
      tasks: {
        'ui-components-admin:build:production': {
          id: 'ui-components-admin:build:production',
          target: { project: 'ui-components-admin', target: 'build', configuration: 'production' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:build:production': [] },
    },
    'ui-components-admin:test': {
      roots: ['ui-components-admin:test'],
      tasks: {
        'ui-components-admin:test': {
          id: 'ui-components-admin:test',
          target: { project: 'ui-components-admin', target: 'test' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:test': [] },
    },
    'ui-components-admin:test:ci': {
      roots: ['ui-components-admin:test:ci'],
      tasks: {
        'ui-components-admin:test:ci': {
          id: 'ui-components-admin:test:ci',
          target: { project: 'ui-components-admin', target: 'test', configuration: 'ci' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:test:ci': [] },
    },
    'ui-components-admin:component-test': {
      roots: ['ui-components-admin:component-test'],
      tasks: {
        'ui-components-admin:component-test': {
          id: 'ui-components-admin:component-test',
          target: { project: 'ui-components-admin', target: 'component-test' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:component-test': [] },
    },
    'ui-components-admin:storybook': {
      roots: ['ui-components-admin:storybook'],
      tasks: {
        'ui-components-admin:storybook': {
          id: 'ui-components-admin:storybook',
          target: { project: 'ui-components-admin', target: 'storybook' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:storybook': [] },
    },
    'ui-components-admin:storybook:ci': {
      roots: ['ui-components-admin:storybook:ci'],
      tasks: {
        'ui-components-admin:storybook:ci': {
          id: 'ui-components-admin:storybook:ci',
          target: { project: 'ui-components-admin', target: 'storybook', configuration: 'ci' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:storybook:ci': [] },
    },
    'ui-components-admin:build-storybook': {
      roots: ['ui-components-admin:build-storybook'],
      tasks: {
        'ui-components-admin:build-storybook': {
          id: 'ui-components-admin:build-storybook',
          target: { project: 'ui-components-admin', target: 'build-storybook' },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:build-storybook': [] },
    },
    'ui-components-admin:build-storybook:ci': {
      roots: ['ui-components-admin:build-storybook:ci'],
      tasks: {
        'ui-components-admin:build-storybook:ci': {
          id: 'ui-components-admin:build-storybook:ci',
          target: {
            project: 'ui-components-admin',
            target: 'build-storybook',
            configuration: 'ci',
          },
          projectRoot: 'libs/ui-components-admin',
          overrides: {},
        },
      },
      dependencies: { 'ui-components-admin:build-storybook:ci': [] },
    },
    '__cypress__:build': {
      roots: ['__cypress__:build:production'],
      tasks: {
        '__cypress__:build:production': {
          id: '__cypress__:build:production',
          target: { project: '__cypress__', target: 'build', configuration: 'production' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:build:production': [] },
    },
    '__cypress__:build:development': {
      roots: ['__cypress__:build:development'],
      tasks: {
        '__cypress__:build:development': {
          id: '__cypress__:build:development',
          target: { project: '__cypress__', target: 'build', configuration: 'development' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:build:development': [] },
    },
    '__cypress__:build:production': {
      roots: ['__cypress__:build:production'],
      tasks: {
        '__cypress__:build:production': {
          id: '__cypress__:build:production',
          target: { project: '__cypress__', target: 'build', configuration: 'production' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:build:production': [] },
    },
    '__cypress__:serve': {
      roots: ['__cypress__:serve:development'],
      tasks: {
        '__cypress__:serve:development': {
          id: '__cypress__:serve:development',
          target: { project: '__cypress__', target: 'serve', configuration: 'development' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:serve:development': [] },
    },
    '__cypress__:serve:development': {
      roots: ['__cypress__:serve:development'],
      tasks: {
        '__cypress__:serve:development': {
          id: '__cypress__:serve:development',
          target: { project: '__cypress__', target: 'serve', configuration: 'development' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:serve:development': [] },
    },
    '__cypress__:serve:production': {
      roots: ['__cypress__:serve:production'],
      tasks: {
        '__cypress__:serve:production': {
          id: '__cypress__:serve:production',
          target: { project: '__cypress__', target: 'serve', configuration: 'production' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:serve:production': [] },
    },
    '__cypress__:preview': {
      roots: ['__cypress__:preview:development'],
      tasks: {
        '__cypress__:preview:development': {
          id: '__cypress__:preview:development',
          target: { project: '__cypress__', target: 'preview', configuration: 'development' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:preview:development': [] },
    },
    '__cypress__:preview:development': {
      roots: ['__cypress__:preview:development'],
      tasks: {
        '__cypress__:preview:development': {
          id: '__cypress__:preview:development',
          target: { project: '__cypress__', target: 'preview', configuration: 'development' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:preview:development': [] },
    },
    '__cypress__:preview:production': {
      roots: ['__cypress__:preview:production'],
      tasks: {
        '__cypress__:preview:production': {
          id: '__cypress__:preview:production',
          target: { project: '__cypress__', target: 'preview', configuration: 'production' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:preview:production': [] },
    },
    '__cypress__:test': {
      roots: ['__cypress__:test'],
      tasks: {
        '__cypress__:test': {
          id: '__cypress__:test',
          target: { project: '__cypress__', target: 'test' },
          projectRoot: 'apps/__cypress__',
          overrides: {},
        },
      },
      dependencies: { '__cypress__:test': [] },
    },
    'voting-e2e:e2e': {
      roots: ['voting-e2e:e2e'],
      tasks: {
        'voting-e2e:e2e': {
          id: 'voting-e2e:e2e',
          target: { project: 'voting-e2e', target: 'e2e' },
          projectRoot: 'apps/voting-e2e',
          overrides: {},
        },
      },
      dependencies: { 'voting-e2e:e2e': [] },
    },
    'voting-e2e:e2e:production': {
      roots: ['voting-e2e:e2e:production'],
      tasks: {
        'voting-e2e:e2e:production': {
          id: 'voting-e2e:e2e:production',
          target: { project: 'voting-e2e', target: 'e2e', configuration: 'production' },
          projectRoot: 'apps/voting-e2e',
          overrides: {},
        },
      },
      dependencies: { 'voting-e2e:e2e:production': [] },
    },
    'voting-e2e:e2e:ci': {
      roots: ['voting-e2e:e2e:ci'],
      tasks: {
        'voting-e2e:e2e:ci': {
          id: 'voting-e2e:e2e:ci',
          target: { project: 'voting-e2e', target: 'e2e', configuration: 'ci' },
          projectRoot: 'apps/voting-e2e',
          overrides: {},
        },
      },
      dependencies: { 'voting-e2e:e2e:ci': [] },
    },
    'voting-e2e:lint': {
      roots: ['voting-e2e:lint'],
      tasks: {
        'voting-e2e:lint': {
          id: 'voting-e2e:lint',
          target: { project: 'voting-e2e', target: 'lint' },
          projectRoot: 'apps/voting-e2e',
          overrides: {},
        },
      },
      dependencies: { 'voting-e2e:lint': [] },
    },
    'admin-e2e:e2e': {
      roots: ['admin-e2e:e2e'],
      tasks: {
        'admin-e2e:e2e': {
          id: 'admin-e2e:e2e',
          target: { project: 'admin-e2e', target: 'e2e' },
          projectRoot: 'apps/admin-e2e',
          overrides: {},
        },
      },
      dependencies: { 'admin-e2e:e2e': [] },
    },
    'admin-e2e:e2e:production': {
      roots: ['admin-e2e:e2e:production'],
      tasks: {
        'admin-e2e:e2e:production': {
          id: 'admin-e2e:e2e:production',
          target: { project: 'admin-e2e', target: 'e2e', configuration: 'production' },
          projectRoot: 'apps/admin-e2e',
          overrides: {},
        },
      },
      dependencies: { 'admin-e2e:e2e:production': [] },
    },
    'admin-e2e:e2e:ci': {
      roots: ['admin-e2e:e2e:ci'],
      tasks: {
        'admin-e2e:e2e:ci': {
          id: 'admin-e2e:e2e:ci',
          target: { project: 'admin-e2e', target: 'e2e', configuration: 'ci' },
          projectRoot: 'apps/admin-e2e',
          overrides: {},
        },
      },
      dependencies: { 'admin-e2e:e2e:ci': [] },
    },
    'admin-e2e:lint': {
      roots: ['admin-e2e:lint'],
      tasks: {
        'admin-e2e:lint': {
          id: 'admin-e2e:lint',
          target: { project: 'admin-e2e', target: 'lint' },
          projectRoot: 'apps/admin-e2e',
          overrides: {},
        },
      },
      dependencies: { 'admin-e2e:lint': [] },
    },
    'voting:build': {
      roots: ['voting:build:production'],
      tasks: {
        'voting:build:production': {
          id: 'voting:build:production',
          target: { project: 'voting', target: 'build', configuration: 'production' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:build:production': [] },
    },
    'voting:build:development': {
      roots: ['voting:build:development'],
      tasks: {
        'voting:build:development': {
          id: 'voting:build:development',
          target: { project: 'voting', target: 'build', configuration: 'development' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:build:development': [] },
    },
    'voting:build:production': {
      roots: ['voting:build:production'],
      tasks: {
        'voting:build:production': {
          id: 'voting:build:production',
          target: { project: 'voting', target: 'build', configuration: 'production' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:build:production': [] },
    },
    'voting:serve': {
      roots: ['voting:serve:development'],
      tasks: {
        'voting:serve:development': {
          id: 'voting:serve:development',
          target: { project: 'voting', target: 'serve', configuration: 'development' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:serve:development': [] },
    },
    'voting:serve:development': {
      roots: ['voting:serve:development'],
      tasks: {
        'voting:serve:development': {
          id: 'voting:serve:development',
          target: { project: 'voting', target: 'serve', configuration: 'development' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:serve:development': [] },
    },
    'voting:serve:production': {
      roots: ['voting:serve:production'],
      tasks: {
        'voting:serve:production': {
          id: 'voting:serve:production',
          target: { project: 'voting', target: 'serve', configuration: 'production' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:serve:production': [] },
    },
    'voting:lint': {
      roots: ['voting:lint'],
      tasks: {
        'voting:lint': {
          id: 'voting:lint',
          target: { project: 'voting', target: 'lint' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:lint': [] },
    },
    'voting:typecheck': {
      roots: ['voting:typecheck'],
      tasks: {
        'voting:typecheck': {
          id: 'voting:typecheck',
          target: { project: 'voting', target: 'typecheck' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:typecheck': [] },
    },
    'voting:serve-static': {
      roots: ['voting:serve-static:development'],
      tasks: {
        'voting:serve-static:development': {
          id: 'voting:serve-static:development',
          target: { project: 'voting', target: 'serve-static', configuration: 'development' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:serve-static:development': [] },
    },
    'voting:serve-static:development': {
      roots: ['voting:serve-static:development'],
      tasks: {
        'voting:serve-static:development': {
          id: 'voting:serve-static:development',
          target: { project: 'voting', target: 'serve-static', configuration: 'development' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:serve-static:development': [] },
    },
    'voting:serve-static:production': {
      roots: ['voting:serve-static:production'],
      tasks: {
        'voting:serve-static:production': {
          id: 'voting:serve-static:production',
          target: { project: 'voting', target: 'serve-static', configuration: 'production' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:serve-static:production': [] },
    },
    'voting:test': {
      roots: ['voting:test'],
      tasks: {
        'voting:test': {
          id: 'voting:test',
          target: { project: 'voting', target: 'test' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:test': [] },
    },
    'voting:test:ci': {
      roots: ['voting:test:ci'],
      tasks: {
        'voting:test:ci': {
          id: 'voting:test:ci',
          target: { project: 'voting', target: 'test', configuration: 'ci' },
          projectRoot: 'apps/voting',
          overrides: {},
        },
      },
      dependencies: { 'voting:test:ci': [] },
    },
    'admin:build': {
      roots: ['ui-components-admin:build:production'],
      tasks: {
        'admin:build:production': {
          id: 'admin:build:production',
          target: { project: 'admin', target: 'build', configuration: 'production' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
        'ui-components-admin:build:production': {
          id: 'ui-components-admin:build:production',
          target: { project: 'ui-components-admin', target: 'build', configuration: 'production' },
          projectRoot: 'libs/ui-components-admin',
          overrides: { __overrides_unparsed__: [] },
        },
      },
      dependencies: {
        'admin:build:production': ['ui-components-admin:build:production'],
        'ui-components-admin:build:production': [],
      },
    },
    'admin:build:development': {
      roots: ['ui-components-admin:build:development'],
      tasks: {
        'admin:build:development': {
          id: 'admin:build:development',
          target: { project: 'admin', target: 'build', configuration: 'development' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
        'ui-components-admin:build:development': {
          id: 'ui-components-admin:build:development',
          target: { project: 'ui-components-admin', target: 'build', configuration: 'development' },
          projectRoot: 'libs/ui-components-admin',
          overrides: { __overrides_unparsed__: [] },
        },
      },
      dependencies: {
        'admin:build:development': ['ui-components-admin:build:development'],
        'ui-components-admin:build:development': [],
      },
    },
    'admin:build:production': {
      roots: ['ui-components-admin:build:production'],
      tasks: {
        'admin:build:production': {
          id: 'admin:build:production',
          target: { project: 'admin', target: 'build', configuration: 'production' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
        'ui-components-admin:build:production': {
          id: 'ui-components-admin:build:production',
          target: { project: 'ui-components-admin', target: 'build', configuration: 'production' },
          projectRoot: 'libs/ui-components-admin',
          overrides: { __overrides_unparsed__: [] },
        },
      },
      dependencies: {
        'admin:build:production': ['ui-components-admin:build:production'],
        'ui-components-admin:build:production': [],
      },
    },
    'admin:serve': {
      roots: ['admin:serve:development'],
      tasks: {
        'admin:serve:development': {
          id: 'admin:serve:development',
          target: { project: 'admin', target: 'serve', configuration: 'development' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:serve:development': [] },
    },
    'admin:serve:development': {
      roots: ['admin:serve:development'],
      tasks: {
        'admin:serve:development': {
          id: 'admin:serve:development',
          target: { project: 'admin', target: 'serve', configuration: 'development' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:serve:development': [] },
    },
    'admin:serve:production': {
      roots: ['admin:serve:production'],
      tasks: {
        'admin:serve:production': {
          id: 'admin:serve:production',
          target: { project: 'admin', target: 'serve', configuration: 'production' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:serve:production': [] },
    },
    'admin:lint': {
      roots: ['admin:lint'],
      tasks: {
        'admin:lint': {
          id: 'admin:lint',
          target: { project: 'admin', target: 'lint' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:lint': [] },
    },
    'admin:typecheck': {
      roots: ['admin:typecheck'],
      tasks: {
        'admin:typecheck': {
          id: 'admin:typecheck',
          target: { project: 'admin', target: 'typecheck' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:typecheck': [] },
    },
    'admin:serve-static': {
      roots: ['admin:serve-static:development'],
      tasks: {
        'admin:serve-static:development': {
          id: 'admin:serve-static:development',
          target: { project: 'admin', target: 'serve-static', configuration: 'development' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:serve-static:development': [] },
    },
    'admin:serve-static:development': {
      roots: ['admin:serve-static:development'],
      tasks: {
        'admin:serve-static:development': {
          id: 'admin:serve-static:development',
          target: { project: 'admin', target: 'serve-static', configuration: 'development' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:serve-static:development': [] },
    },
    'admin:serve-static:production': {
      roots: ['admin:serve-static:production'],
      tasks: {
        'admin:serve-static:production': {
          id: 'admin:serve-static:production',
          target: { project: 'admin', target: 'serve-static', configuration: 'production' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:serve-static:production': [] },
    },
    'admin:test': {
      roots: ['admin:test'],
      tasks: {
        'admin:test': {
          id: 'admin:test',
          target: { project: 'admin', target: 'test' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:test': [] },
    },
    'admin:test:ci': {
      roots: ['admin:test:ci'],
      tasks: {
        'admin:test:ci': {
          id: 'admin:test:ci',
          target: { project: 'admin', target: 'test', configuration: 'ci' },
          projectRoot: 'apps/admin',
          overrides: {},
        },
      },
      dependencies: { 'admin:test:ci': [] },
    },
  },
  errors: {},
}
