import ApiEndPoint from '@/config/apiEndPoint'
import { Card } from '@/types/card'
import { DirectionType, Suggestion, SuggestionType } from '@/types/suggestion'
import apiClient from '../apiClient'

export type AvailableCardSuggestionListRes = {
  code: string
  message: string
  data: { cardList: { cardInfo: Card; suggestionInfo: Suggestion }[] }
}

const getAvailableCardSuggestionList = async (cardId: number) => {
  const response: AvailableCardSuggestionListRes = await apiClient.get(
    ApiEndPoint.getAvailableCardSuggestionList(cardId),
  )
  return response.data.cardList
}

export interface PostSuggestionRes {
  code: string
  message: string
  data: Suggestion
}

export interface PostSuggestionReq {
  suggestionType: SuggestionType
  fromCardId: number
  toCardId: number
}

const postSuggestion = async ({
  suggestionType,
  fromCardId,
  toCardId,
}: PostSuggestionReq) => {
  const response: PostSuggestionRes = await apiClient.post(
    ApiEndPoint.postSuggestion(suggestionType),
    { fromCardId, toCardId },
    {},
    {
      'Content-Type': 'application/json',
    },
  )
  return response
}

export type GetMySuggestionListReq = {
  suggestionType: SuggestionType
  directionType: DirectionType
  cardId: string | string[]
  cursorId: string | undefined
}
export type GetMySuggestionListRes = {
  code: string
  message: string
  data: {
    suggestionList: {
      cardInfo: Card
      suggestionInfo: Suggestion
    }[]
    nextCursorId: string
  }
}

const getMySuggestionList = async ({
  suggestionType,
  directionType,
  cardId,
  cursorId,
}: GetMySuggestionListReq) => {
  const response: GetMySuggestionListRes = await apiClient.get(
    ApiEndPoint.getMySuggestionList({
      directionType,
      suggestionType,
      cardId,
      cursorId,
    }),
  )
  return response
}

export type PutMySuggestionStatusReq = {
  fromCardId: number
  toCardId: string | string[]
  isAccepted: boolean
}
export type PutMySuggestionStatusRes = {
  code: string
  message: string
  data: {
    suggestionList: {
      cardInfo: Card
      suggestionInfo: Suggestion
    }[]
    nextCursorId: string
  }
}

const putMySuggestionStatus = async ({
  fromCardId,
  toCardId,
  isAccepted,
}: PutMySuggestionStatusReq) => {
  const response: PutMySuggestionStatusRes = await apiClient.put(
    ApiEndPoint.putMySuggestionStatus(),
    {
      fromCardId,
      toCardId,
      isAccepted,
    },
    {},
    {
      'Content-Type': 'application/json',
    },
  )

  return response
}

export {
  getAvailableCardSuggestionList,
  getMySuggestionList,
  postSuggestion,
  putMySuggestionStatus,
}
