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

const getItemInfo = async (itemId: string) => {
  const response = await apiClient.get(ApiEndPoint.item(itemId))
  return response
}

const postItemDibs = async (itemId: number, token: string) => {
  const response = await apiClient.post(
    ApiEndPoint.dibs(itemId),
    {},
    {},
    {
      Authorization: `Bearer ${token}`,
    },
  )
  return response.json()
}

const deleteItemDibs = async (itemId: number, token: string) => {
  const response = await apiClient.delete(
    ApiEndPoint.dibs(itemId),
    {},
    {
      Authorization: `Bearer ${token}`,
    },
  )
  return response.json()
}
export { getItems, getItemInfo, postItemDibs, deleteItemDibs }
