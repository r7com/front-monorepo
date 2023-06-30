import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing'
import { defineConfig } from 'cypress'

export default defineConfig({
  includeShadowDom: true,
  component: {
    ...nxComponentTestingPreset(__filename),
  },
})
