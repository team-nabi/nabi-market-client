import { CardUploadFormValues } from '@/app/(root)/(routes)/cards/new/hooks/useCardUploadForm'
import ApiEndPoint from '@/config/apiEndPoint'
import type {
  Card,
  CategoryObjs,
  CardDetail,
  TradeStatus,
  PriceRangeObjs,
  TradeStatusObjs,
} from '@/types/card'
import { User } from '@/types/user'
import apiClient from '../apiClient'

type putCardReq = {
  cardId: string
  cardReq: CardUploadFormValues
}

const postCard = async (cardReq: CardUploadFormValues) => {
  cardReq.thumbnail = cardReq.images[0]
  const imagesByForm = cardReq.images.map((image) => {
    return { url: image }
  })
  Object.assign(cardReq, { images: imagesByForm })
  console.log(cardReq)
  const response = await apiClient.post(
    ApiEndPoint.postCard(),
    cardReq,
    {},
    {
      'Content-Type': 'application/json',
    },
  )
  return response
}

const putCard = async ({ cardId, cardReq }: putCardReq) => {
  cardReq.thumbnail = cardReq.images[0]
  const imagesByForm = cardReq.images.map((image) => {
    return { url: image }
  })
  Object.assign(cardReq, { images: imagesByForm })

  const response = await apiClient.put(
    ApiEndPoint.putCard(cardId),
    cardReq,
    {},
    {
      'Content-Type': 'application/json',
    },
  )
  return response
}

export type GetCardListReq = {
  category: CategoryObjs['key']
  priceRange: PriceRangeObjs['key']
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
export type CardInfoRes = {
  code: string
  message: string
  data: { cardInfo: CardDetail; userInfo: User }
}

const getCardInfo = async (
  cardId: number,
): Promise<{ data: { cardInfo: CardDetail; userInfo: User } }> => {
  const response = await apiClient.get(ApiEndPoint.getCardInfo(cardId), {
    cache: 'no-store',
  })

  return response
}

export type GetMyCardListReq = {
  tradeStatus: TradeStatus
  cursorId: string | undefined
}
export type GetMyCardListRes = {
  code: string
  message: string
  data: {
    cardList: Card[]
    nextCursorId: string
  }
}

const getMyCardList = async ({ tradeStatus, cursorId }: GetMyCardListReq) => {
  const response: GetMyCardListRes = await apiClient.get(
    ApiEndPoint.getMyCardList({ tradeStatus, cursorId }),
  )
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
export type PopularCardsRes = {
  code: string
  message: string
  data: {
    cardList: Pick<
      CardDetail,
      'cardId' | 'itemName' | 'priceRange' | 'thumbnail'
    >[]
  }
}
const getPopularCardList = async () => {
  const response: PopularCardsRes = await apiClient.get(
    ApiEndPoint.getPopularCardList(),
    { next: { revalidate: 60 } },
  )
  return response
}

export type PutCardStatusReq = {
  cardId: number
  status: TradeStatusObjs['key']
}

const putCardStatus = async ({ cardId, status }: PutCardStatusReq) => {
  const response = await apiClient.put(
    ApiEndPoint.putCardStatus(cardId),
    { status },
    {},
    {
      'Content-Type': 'application/json',
    },
  )
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
  getPopularCardList,
  putCardStatus,
}
