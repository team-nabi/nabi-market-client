import ApiEndPoint from '@/config/apiEndPoint'
import { Category, PriceRange, Status } from '@/types/item'
import apiClient from '../apiClient'

export type GetItems = {
  category: Category
  priceRange: PriceRange
  cardTitle: string
  cursorId: number
}

// TODO: 현재 itemsHandler(가짜 API)는 필터에 대한 처리가 이루어져 있지 않으므로, cursorId만 넘겨주고 있음 => 실 API를 받을시 교체 작업 해주기
const getItems = async ({
  category,
  priceRange,
  cardTitle,
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
  return response
}

const deleteItemDibs = async (itemId: number) => {
  const response = await apiClient.delete(ApiEndPoint.dibs(itemId))
  return response
}

const deleteItem = async (itemId: number) => {
  const response = await apiClient.delete(ApiEndPoint.item(itemId))
  return response
}
export { getItems, getItemInfo, postItemDibs, deleteItemDibs, deleteItem }
