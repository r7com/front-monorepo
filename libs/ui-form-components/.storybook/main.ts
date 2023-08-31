import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/ui-form-components/vite.config.ts',
      },
    },
  },

  async viteFinal(config, options) {
    // Add your configuration here
    return config
  },
}

export default config

// To customize your Vite configuration you can use the viteFinal field..
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
