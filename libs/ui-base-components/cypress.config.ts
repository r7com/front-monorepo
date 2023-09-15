import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing'
import { defineConfig } from 'cypress'
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins'
import { configVisualRegressionDiff } from '@r7-jarvics/cypress'

export default defineConfig({
  env: {
    ...configVisualRegressionDiff,
  },
  component: {
    ...nxComponentTestingPreset(__filename, { bundler: 'vite' }),
    setupNodeEvents(on, config) {
      initPlugin(on, config)
    },
  },
})
