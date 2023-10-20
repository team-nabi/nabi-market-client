import { assertValue } from '@/utils/assertValue'

export const Environment = {
  apiMocking: () =>
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'enabled' : 'disabled',
}
