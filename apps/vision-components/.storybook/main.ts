import type { StorybookConfig } from '@storybook/react-vite'
import projectJson from '../project.json'

const config: StorybookConfig = {
  stories: ['../../../libs/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
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
        viteConfigPath: `apps/${projectJson.name}/vite.config.ts`,
      },
    },
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      tsconfigPath: './tsconfig.base.json',
    },
  },
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
