import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

// TODO: 현재 itemsHandler(가짜 API)는 필터에 대한 처리가 이루어져 있지 않으므로, cursorId만 넘겨주고 있음 => 실 API를 받을시 교체 작업 해주기
const getItems = async ({ cursorId }: { cursorId: number }) => {
  const response = await apiClient.get(ApiEndPoint.items(cursorId))
  return response.json()
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
