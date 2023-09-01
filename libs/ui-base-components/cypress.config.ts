import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing'
import { defineConfig } from 'cypress'
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins'
import { execSync } from 'child_process'

const specList = execSync(`git diff --name-only --diff-filter=AM HEAD **/src/components/**/*`)
  .toString('utf-8')
  .split('\n')
  .filter(s => s?.length > 0)
  .map(s => s.replace('base-path-until-folder-with-specs', '**'))

export default defineConfig({
  component: {
    ...nxComponentTestingPreset(__filename, { bundler: 'vite' }),
    setupNodeEvents(on, config) {
      initPlugin(on, config)
    },
    specPattern: specList,
  },
  env: {
    pluginVisualRegressionDiffConfig: { threshold: 0.01 },
  },
})
