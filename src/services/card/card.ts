import { ItemUploadFormValues } from '@/app/(root)/(routes)/cards/new/hooks/useItemUploadForm'
import ApiEndPoint from '@/config/apiEndPoint'
import type { Category, PriceRange, TradeStatus } from '@/types/card'
import apiClient from '../apiClient'

export type Getcards = {
  category: Category
  priceRange: PriceRange
  cardTitle: string
  cursorId: number
}

const postCard = async (cardReq: ItemUploadFormValues) => {
  cardReq.thumbnail = cardReq.images[0]

  const response = await apiClient.post(ApiEndPoint.postCard(), cardReq)
  return response
}

// TODO: 현재 cardsHandler(가짜 API)는 필터에 대한 처리가 이루어져 있지 않으므로, cursorId만 넘겨주고 있음 => 실 API를 받을시 교체 작업 해주기
const getCardList = async ({
  category,
  priceRange,
  cardTitle,
  cursorId,
}: Getcards) => {
  const response = await apiClient.get(ApiEndPoint.getCardList(cursorId))
  return response
}

const getCardInfo = async (cardId: number) => {
  const response = await apiClient.get(ApiEndPoint.getCardInfo(cardId))
  return response
}

const getMyCardList = async ({
  tradeStatus,
  cursorId,
}: {
  tradeStatus: TradeStatus
  cursorId: number
}) => {
  const response = await apiClient.get(ApiEndPoint.getMyCardList(cursorId))
  return response
}

const postCardDibs = async (cardId: number) => {
  const response = await apiClient.post(ApiEndPoint.postDibs(cardId), {})
  return response
}

const deleteCardDibs = async (cardId: number) => {
  const response = await apiClient.delete(ApiEndPoint.deleteDibs(cardId))
  return response
}

const deleteCard = async (cardId: number) => {
  const response = await apiClient.delete(ApiEndPoint.deleteCard(cardId))
  return response
}

const getMyDibs = async (cursorId: number) => {
  const response = await apiClient.get(ApiEndPoint.getMyDibsList(cursorId))
  return response
}

export {
  getCardList,
  getCardInfo,
  postCardDibs,
  deleteCardDibs,
  deleteCard,
  getMyDibs,
  getMyCardList,
  postCard,
}
