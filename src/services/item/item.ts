import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

export type GetItems = {
  category: string[]
  priceRange: string
  name: string
  cursorId: number
}

const getItems = async ({ cursorId }: GetItems) => {
  const response = await apiClient.get(ApiEndPoint.items(cursorId))
  return response
}

export { getItems }
