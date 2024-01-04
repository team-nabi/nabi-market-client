const { createThemes } = require('tw-colors')
const { LIGHT_THEMES } = require('./src/styles/colors')
const { HEIGHT, BORDER_RADIUS } = require('./src/styles/sizes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['light'],
  theme: {
    screens: {
      xs: { max: '480px' },
      ...require('tailwindcss/defaultConfig').theme.screens,
    },
    extend: {
      backgroundImage: () => ({
        'gradient-primary':
          'linear-gradient(to right, #9867FF 0%, #6C64F8 100%)',
        'gradient-secondary':
          'linear-gradient(to right, #7C54D1 0%, #534CD0 100%)',
      }),
      height: {
        ...HEIGHT,
        nav: 'var(--nav-height)',
        page: 'var(--page-height)',
        chat_input: 'var(--chat-input-height)',
      },
      borderRadius: {
        ...BORDER_RADIUS,
        nav: 'var(--nav-height)',
      },
      width: {
        page_min: 'var(--page-min-width)',
        page_max: 'var(--page-max-width)',
      },
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      padding: {
        chat_input: 'var(--chat-input-height)',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        ...LIGHT_THEMES,
      },
      // dark: {
      //   ...DARK_THEMES,
      // },
    }),
    function ({ addUtilities }) {
      const newUtilities = {
        '.shadow-bottom': {
          'box-shadow':
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    require('tailwindcss-animate'),
  ],
}
