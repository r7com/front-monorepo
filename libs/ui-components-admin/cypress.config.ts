import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing'
import { defineConfig } from 'cypress'
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins'

export default defineConfig({
  includeShadowDom: true,
  component: {
    ...nxComponentTestingPreset(__filename),
    setupNodeEvents(on, config) {
      initPlugin(on, config)
    },
  },
  env: {
    pluginVisualRegressionUpdateImages: true,
    pluginVisualRegressionDiffConfig: { threshold: 0.01 },
    pluginVisualRegressionCleanupUnusedImages: true,
  },
})
