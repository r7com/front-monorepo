/* eslint-disable @typescript-eslint/no-var-requires */
import { Config } from '@stencil/core'
import { postcss } from '@stencil-community/postcss'
import tailwindcss from 'tailwindcss'
import { join } from 'path'

import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'ui-components-admin',
  taskQueue: 'async',
  sourceMap: true,
  globalStyle: 'www/tailwind.css',
  extras: {
    experimentalImportInjection: true,
  },
  devServer: {
    reloadStrategy: 'pageReload',
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    {
      type: 'dist-custom-elements',
      includeGlobalScripts: false,
    },

    reactOutputTarget({
      componentCorePackage: '@r7-front-monorepo/ui-components-admin',
      proxiesFile: '../../../libs/ui-components-admin-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
  plugins: [
    postcss({
      plugins: [tailwindcss(join(__dirname, './tailwind.config.js'))],
    }),
  ],
}
