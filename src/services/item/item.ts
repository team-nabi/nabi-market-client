import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

export type GetItems = {
  category: string[]
  priceRange: string
  name: string
  status: string[]
  cursorId: number
  size: number
}

const getItems = async ({
  category,
  priceRange,
  name,
  status,
  size,
  cursorId,
}: GetItems) => {
  const response = await apiClient.get(ApiEndPoint.items(cursorId))
  return response
}

export { getItems }
