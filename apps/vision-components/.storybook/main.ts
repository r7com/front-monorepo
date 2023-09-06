import type { StorybookConfig } from '@storybook/react-vite'

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../../../libs/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-designs',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'apps/vision-components/vite.config.ts',
      },
    },
  },

  viteFinal: async config =>
    mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    }),
}

export default config
