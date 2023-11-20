import { CardUploadFormValues } from '@/app/(root)/(routes)/cards/new/hooks/useCardUploadForm'
import ApiEndPoint from '@/config/apiEndPoint'
import type { Card, Category, PriceRange, TradeStatus } from '@/types/card'
import apiClient from '../apiClient'

type putCardReq = {
  cardId: string
  cardReq: CardUploadFormValues
}

const postCard = async (cardReq: CardUploadFormValues) => {
  cardReq.thumbnail = cardReq.images[0]

  const response = await apiClient.post(ApiEndPoint.postCard(), cardReq)
  return response
}

const putCard = async ({ cardId, cardReq }: putCardReq) => {
  cardReq.thumbnail = cardReq.images[0]

  const response = await apiClient.put(ApiEndPoint.putCard(cardId), cardReq)
  return response
}

export type GetCardListReq = {
  category: Category['key']
  priceRange: PriceRange['key']
  cardTitle: string
  cursorId: string | undefined
}
export type GetCardListRes = {
  code: string
  message: string
  data: {
    cardList: Card[]
    nextCursorId: string
  }
}

const getCardList = async ({
  category,
  priceRange,
  cardTitle,
  cursorId,
}: GetCardListReq) => {
  const response: GetCardListRes = await apiClient.get(
    ApiEndPoint.getCardList({ category, priceRange, cardTitle, cursorId }),
  )
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
  const response = await apiClient.get(
    ApiEndPoint.getMyCardList(tradeStatus, cursorId),
  )
  return response.data
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
  putCard,
}
