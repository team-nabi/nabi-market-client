import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const getItems = async ({ cursorId }: { cursorId: number }) => {
  const response = await apiClient.get(ApiEndPoint.items(cursorId))
  return response
}

const getItemInfo = async (itemId: string) => {
  const response = await apiClient.get(ApiEndPoint.item(itemId))
  return response
}

const postItemDibs = async (itemId: number) => {
  const response = await apiClient.post(ApiEndPoint.dibs(itemId), {})
  return response.json()
}

const deleteItemDibs = async (itemId: number) => {
  const response = await apiClient.delete(ApiEndPoint.dibs(itemId))
  return response.json()
}
export { getItems, getItemInfo, postItemDibs, deleteItemDibs }
