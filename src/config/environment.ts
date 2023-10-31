import { assertValue } from '@/utils/assertValue'

export const Environment = {
  apiAddress: () => assertEnv('NEXT_PUBLIC_API_ADDRESS'),
  apiMocking: () =>
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'enabled' : 'disabled',
}

function assertEnv(key: string) {
  return assertValue<string>(process.env[key], `${key}가 설정되지 않았습니다.`)
}
