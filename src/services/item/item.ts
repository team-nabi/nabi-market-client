import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

export type GetItems = {
  category: string
  priceRange: string
  cardTitle: string
  status: string[]
  size: number
  cursorId: number
}

// TODO: 현재 itemsHandler(가짜 API)는 필터에 대한 처리가 이루어져 있지 않으므로, cursorId만 넘겨주고 있음 => 실 API를 받을시 교체 작업 해주기
const getItems = async ({
  category,
  priceRange,
  cardTitle,
  status,
  size,
  cursorId,
}: GetItems) => {
  const response = await apiClient.get(ApiEndPoint.items(cursorId))
  return response.json()
}

const getItemInfo = async (itemId: number) => {
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

const deleteItem = async (itemId: number) => {
  const response = await apiClient.delete(ApiEndPoint.item(itemId))

  // FIX : 공통 에러처리 코드로 변경하기. 백엔드에서 에러처리 관련 응답은 주말에 회의한다고 함
  // return this.reponseHandler(response);
  return response.json()
}
export { getItems, getItemInfo, postItemDibs, deleteItemDibs, deleteItem }
