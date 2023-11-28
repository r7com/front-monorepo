const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  prefix: 'base-',
  corePlugins: {
    preflight: true,
  },
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, theme, addBase }) {
      addBase({
        /** hide default 'x' icon from input:search */
        '[type="search"]::-webkit-search-decoration': { display: 'none' },
        '[type="search"]::-webkit-search-cancel-button': { display: 'none' },
        '[type="search"]::-webkit-search-results-button': { display: 'none' },
        '[type="search"]::-webkit-search-results-decoration': { display: 'none' },
      })
      addUtilities(
        {
          '.content-container': {
            width: '100%',
            '@media (min-width: 768px)': {
              width: '771px',
            },
          },
        },
        ['responsive', 'hover'],
      )
    }),
  ],
  presets: [require('../../libs/ui-theme-core/src/tailwind-preset.js')],
}
