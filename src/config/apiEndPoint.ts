import { GetItems } from '@/services/item/item'

const ApiEndPoint = {
  login: () => '/login',
  test: () => '/test',
  items: (cursorId: number) => `/items?cursorId=${cursorId}`,
} as const

export default ApiEndPoint
