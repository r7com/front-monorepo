const defaultTheme = require('tailwindcss/defaultTheme')
const { generateGrid } = require('./utils/generate-grid')

/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  theme: {
    aspectRatio: {
      portrait: '0.65',
      landscape: '16/9',
      square: '1',
    },
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
    borderOpacity: {
      'semi-opaque': '0.8',
      intense: '0.64',
      medium: '0.32',
      light: '0.16',
      'semi-transparent': '0.08',
      transparent: '0',
    },
    boxShadow: {
      drop: '0px 0px 0.2rem 0.1rem rgba(51, 51, 51, 8%)',
      level1: '0px 0.5rem 1rem -0.25rem rgba(51, 51, 51, 8%)',
      level2: '0px 1rem 1.5rem -0.25rem rgba(51, 51, 51, 8%)',
      level3: '0px 1rem 2rem -0.25rem rgba(51, 51, 51, 16%)',
      level4: '0px 1rem 4rem -0.25rem rgba(51, 51, 51, 24%)',
      level5: '0px 0px 0.25rem 0px rgba(51, 51, 51, 100%)',
      inner: 'inset 0px 0.25rem 1rem -0.25rem rgba(51, 51, 51, 8%)',
      'inner-level0': 'inset 0.25rem 0.25rem 0.25rem 0px rgba(51,51, 51, 10%)',
      'inner-level1': 'inset 0px 0.5rem 1rem -0.25rem rgba(51, 51, 51, 8%)',
      'inner-level2': 'inset 0px 1rem 1.5rem -0.25rem rgba(51, 51, 51, 8%)',
      'inner-level3': 'inset 0px 1rem 2rem -0.25rem rgba(51, 51, 51, 16%)',
      'inner-level4': 'inset 0px 1rem 4rem -0.25rem rgba(51, 51, 51, 24%)',
      'inner-level5': 'inset 0px 0.25rem 0.25rem 0px rgba(51, 51, 51, 32%)',
    },
    dropShadow: {
      glow: '0rem 0rem 1px #218ee1',
      none: 'none',
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
        500: '#F4F4F4',
        600: '#DDDDE1',
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
      'feedback-informative': {
        400: '#678dc5',
        500: '#4170b7',
        600: '#345a92',
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
      breakingNews: {
        urgent: '#4a4a4a',
        now: '#fff',
        live: '#ededed',
      },
      social: {
        facebook: '#4764f2',
        twitter: '#000',
        linkedin: '#3559c2',
        whatsapp: '#1eab84',
      },
      'editorial-color': 'var(--editorial-color, #218ee1)',
      inherit: 'inherit',
      current: 'current-color',
    },
    // Necessário importar o CSS com a url do google fonts no html
    fontFamily: {
      primary: ['var(--font-family-primary, sans-serif)', 'sans-serif'],
      'primary-light': ['var(--font-family-primary-light, sans-serif)', 'sans-serif'],
      'open-sans': ['"Open Sans"', 'sans-serif'],
      secondary: ['var(--font-family-secondary, sans-serif)', 'sans-serif'],
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
    lineHeight: {
      little: '0.75rem',
      xxxs: '0.875rem',
      xxs: '1rem',
      xs: '1.125rem',
      pill: '1.25rem',
      sm: '1.375rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      xxl: '3rem',
      xxxl: '3.5rem',
      huge: '4rem',
      giant: '4.5rem',
    },
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        'breakingNews-urgent': {
          '0%': { background: '#d91e18', boxShadow: '0 0 3px #d91e18' },
          '50%': { background: '#96281b', boxShadow: '0 0 40px #96281b' },
          '100%': { background: '#d91e18', boxShadow: '0 0 3px #d91e18' },
        },
        'breakingNews-urgent-mobile': {
          '0%': { background: '#d91e18', boxShadow: '0 0 3px #d91e18' },
          '50%': { background: '#96281b', boxShadow: '0 0 20px #96281b' },
          '100%': { background: '#d91e18', boxShadow: '0 0 3px #d91e18' },
        },
      },
      animation: {
        'breakingNews-urgent-glowing': 'breakingNews-urgent 1.5s infinite',
        'breakingNews-urgent-glowing-mobile': 'breakingNews-urgent-mobile 1.5s infinite',
      },
      container: theme => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.xxxs'),
          sm: theme('spacing.xxxs'),
          lg: theme('spacing.xxs'),
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1164px',
        },
      }),
      ...generateGrid(24),
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
