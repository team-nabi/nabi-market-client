import { withThemeByClassName } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { create } from '@storybook/theming'
import '../src/styles/globals.css'

const lightTheme = create({
  base: 'light',
})

const darkTheme = create({
  base: 'dark',
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      stylePreview: true,
    },
  },
  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
