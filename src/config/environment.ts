export const Environment = {
  apiAddress: () =>
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
      ? process.env.NEXT_PUBLIC_API_MOCKING_ADDRESS
      : process.env.NEXT_PUBLIC_API_ADDRESS,
  apiMocking: () =>
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'enabled' : 'disabled',
}
