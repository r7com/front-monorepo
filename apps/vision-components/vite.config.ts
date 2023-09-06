/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import svgr from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'
import * as path from 'path'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/vision-components',

  plugins: [
    svgr({
      svgrOptions: {
        titleProp: true,
      },
    }),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
    react(),
    nxViteTsPaths(),
  ],

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/style.css',
      name: 'vision-components',
      fileName: 'style',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
