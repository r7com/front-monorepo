import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing'
import { defineConfig } from 'cypress'
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins'

export default defineConfig({
  component: {
    ...nxComponentTestingPreset(__filename, { bundler: 'vite' }),
    setupNodeEvents(on, config) {
      initPlugin(on, config)
    },
    excludeSpecPattern: '**/__image_snapshots__/**',
    specPattern: 'src/components/**/*.cy.tsx',
  },
  env: {
    pluginVisualRegressionDiffConfig: { threshold: 0.01 },
  },
})
