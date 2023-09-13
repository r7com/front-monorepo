const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.spec).{ts,tsx,html}'),
    'libs/**/!(*.spec|*.cy).{tsx,ts,jsx,js,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../libs/ui-theme-core/src/tailwind-preset.js')],
}
