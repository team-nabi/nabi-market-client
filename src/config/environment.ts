import { assertValue } from '@/utils'

export const Environment = {
  apiAddress: () =>
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
      ? process.env.NEXT_PUBLIC_API_MOCKING_ADDRESS
      : process.env.NEXT_PUBLIC_API_ADDRESS,
  apiMocking: () =>
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'enabled' : 'disabled',
  tokenName: () => assertEnv('NEXT_PUBLIC_API_TOKEN_NAME'),
}

function assertEnv(key: string) {
  return assertValue<string>(process.env[key], `${key}가 설정되지 않았습니다.`)
}
