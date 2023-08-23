const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    borderWidth: {
      hairline: '0.063rem',
      thin: '0.125rem',
      thick: '0.25rem',
      heavy: '0.375rem',
      veryHeavy: '0.75rem',
    },
    borderRadius: {
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.5rem',
      pill: '1.25rem',
      circular: '50%',
    },
    boxShadow: {
      drop: '0px 0px 0.2rem 0.1rem rgba(51, 51, 51, 8%)',
      level1: '0px 0.5rem 1rem -0.25rem rgba(51, 51, 51, 8%)',
      level2: '0px 1rem 1.5rem -0.25rem rgba(51, 51, 51, 8%)',
      level3: '0px 1rem 2rem -0.25rem rgba(51, 51, 51, 16%)',
      level4: '0px 1rem 4rem -0.25rem rgba(51, 51, 51, 24%)',
      inner: 'inset 0px 0.25rem 1rem -0.25rem rgba(51, 51, 51, 8%)',
      'inner-level1': 'inset 0px 0.5rem 1rem -0.25rem rgba(51, 51, 51, 8%)',
      'inner-level2': 'inset 0px 1rem 1.5rem -0.25rem rgba(51, 51, 51, 8%)',
      'inner-level3': 'inset 0px 1rem 2rem -0.25rem rgba(51, 51, 51, 16%)',
      'inner-level4': 'inset 0px 1rem 4rem -0.25rem rgba(51, 51, 51, 24%)',
    },
    colors: {
      transparent: 'transparent',
      'neutral-low': {
        400: '#666666',
        500: '#333333',
        600: '#2d2d2f',
      },
      'neutral-high': {
        400: '#ffffff',
        500: '#f4f4f4',
        600: '#9b9b9b',
      },
      'brand-primary': {
        400: '#4da5e7',
        500: '#218ee1',
        600: '#1a72b4',
      },
      highlight: {
        400: '#1aa194',
        500: '#00877a',
        600: '#00786D',
      },
      'feedback-warning': {
        400: '#fb424f ',
        500: '#fb2c3b',
        600: '#e12835',
      },
      'feedback-helper': {
        400: '#ed7e1a',
        500: '#eb7000',
        600: '#d46500',
      },
      'feedback-success': {
        400: '#56aa59',
        500: '#43a047',
        600: '#368039',
      },
      'dark-low': {
        400: '#2d3134',
        500: '#1e2225',
        600: '#0f1316',
      },
      'dark-high': {
        400: '#ffffff',
        500: '#c3c7ca',
        600: '#969a9d',
      },
      'light-low': {
        400: '#5a5c5d',
        500: '#4b4d4e',
        600: '#0f1112',
      },
      'light-high': {
        400: '#ffffff',
        500: '#f0f2f3',
        600: '#e1e3e4',
      },
      'agerating-livre': {
        500: '#00a54f',
      },
      'agerating-10anos': {
        500: '#0094d9',
      },
      'agerating-12anos': {
        500: '#fcc116',
      },
      'agerating-14anos': {
        500: '#f5811f',
      },
      'agerating-16anos': {
        500: '#eb1c24',
      },
      'agerating-18anos': {
        500: '#000000',
      },
      'editorial-color': 'var(--editorial-color, #218ee1)',
      inherit: 'inherit',
      current: 'current-color',
    },
    // Necessário importar o CSS com a url do google fonts no html
    fontFamily: {
      'open-sans': ['"Open Sans"', 'sans-serif'],
      'playfair-display': ['"Playfair Display"'],
      body: ['"Open Sans"'],
    },
    fontSize: {
      little: '0.75rem',
      xxxs: '0.875rem',
      xxs: '1rem',
      xs: '1.125rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      xxl: '3rem',
      xxxl: '3.5rem',
    },
    opacity: {
      'semi-opaque': 0.8,
      intense: 0.64,
      medium: 0.32,
      light: 0.16,
      'semi-transparent': 0.08,
      transparent: 0,
    },
    spacing: {
      0: '0',
      quark: '0.25rem',
      nano: '0.5rem',
      xxxs: '1rem',
      xxs: '1.5rem',
      xs: '2rem',
      sm: '2.5rem',
      md: '3rem',
      lg: '3.5rem',
      xl: '4rem',
      xxl: '4.5rem',
      xxxl: '5rem',
      huge: '8rem',
      giant: '10rem',
    },
    extend: {
      container: theme => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.xxxs'),
          sm: theme('spacing.xxxs'),
          lg: theme('spacing.xxs'),
        },
      }),
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
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
}
