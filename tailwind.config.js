const { createThemes } = require('tw-colors')

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
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        'background-color': '#e5e5e5',
        'primary-color': '#404040',
        'card-background-color': '#d4d4d4',
        'secondary-color': '#d4d4d4',
      },
      dark: {
        'background-color': '#404040',
        'primary-color': '#e5e5e5',
        'card-background-color': '#525252',
        'secondary-color': '#525252',
      },
    }),
  ],
}
