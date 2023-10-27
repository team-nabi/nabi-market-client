const COLORS = {
  primary_300: '#7C54D1',
  primary_200: '#9867FF',
  primary_100: '#9867FFB2',
  secondary_300: '#534CD0',
  secondary_200: '#6C64F8',
  secondary_100: '#6C64F8B2',
  gray: '#BFBFBF',
  black: '#000000',
  white: '#FFFFFF',

  //   dark: {
  //     primary_300: '#534CD0',
  //     primary_200: '#6C64F8',
  //     primary_100: '#6C64F8B2',
  //     secondary_300: '#6C64F8',
  //     secondary_200: '#6C64F8',
  //     secondary_100: '#6C64F8',
  //     gray: '#BFBFBF',
  //     black: '#000000',
  //   },
} as const

const LIGHT_THEMES = {
  'background-color': COLORS.white,
  'primary-color': COLORS.primary_200,
  'primary-hover-color': COLORS.primary_300,
  'secondary-color': COLORS.secondary_200,
  'secondary-hover-color': COLORS.secondary_300,
  'text-color': COLORS.black,
} as const

const DARK_THEMES = {
  'background-color': COLORS.black,
  'primary-color': COLORS.primary_200,
  'primary-hover-color': COLORS.primary_300,
  'secondary-color': COLORS.secondary_200,
  'secondary-hover-color': COLORS.secondary_300,
  'text-color': COLORS.white,
} as const

export default COLORS
export { LIGHT_THEMES, DARK_THEMES }