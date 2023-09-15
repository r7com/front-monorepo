import { defineConfig } from 'cypress'
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset'
import { configVisualRegressionDiff } from '@r7-jarvics/cypress'

export default defineConfig({
  env: {
    ...configVisualRegressionDiff,
  },
  e2e: nxE2EPreset(__dirname),
})
