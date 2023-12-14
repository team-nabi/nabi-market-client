export const Environment = {
  apiAddress: () =>
    process.env.NEXT_PUBLIC_API_MOCKING === 'disabled'
      ? process.env.NEXT_PUBLIC_API_ADDRESS
      : process.env.NEXT_PUBLIC_API_MOCKING_ADDRESS,
  apiMocking: () =>
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'enabled' : 'disabled',
  tokenName: () => process.env.NEXT_PUBLIC_API_TOKEN_NAME ?? '',
  refreshTokenName: () => process.env.NEXT_PUBLIC_API_REFRESH_TOKEN_NAME ?? '',
  currentAddress: () => process.env.NEXT_PUBLIC_CURRENT_ADDRESS ?? '',
}
