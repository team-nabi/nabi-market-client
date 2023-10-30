const { createThemes } = require('tw-colors')
const { LIGHT_THEMES, DARK_THEMES } = require('./src/styles/colors')
const {
  HEIGHT,
  FONT_SIZE,
  FONT_WEIGHT,
  BORDER_RADIUS,
} = require('./src/styles/sizes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-primary':
          'linear-gradient(to right, #9867FF 0%, #6C64F8 100%)',
        'gradient-secondary':
          'linear-gradient(to right, #7C54D1 0%, #534CD0 100%)',
      }),
      fontSize: {
        ...FONT_SIZE,
      },
      fontWeight: {
        ...FONT_WEIGHT,
      },
      colors: {
        ...LIGHT_THEMES,
      },
      height: {
        ...HEIGHT,
      },
      borderRadius: {
        ...BORDER_RADIUS,
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        ...LIGHT_THEMES,
      },
      dark: {
        ...DARK_THEMES,
      },
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
  ],
}
