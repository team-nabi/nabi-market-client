import ApiEndPoint from '@/config/apiEndPoint'
import { Card } from '@/types/card'
import { DirectionType, Suggestion, SuggestionType } from '@/types/suggestion'
import apiClient from '../apiClient'

export type AvailableCardSuggestionListRes = {
  cardInfo: Card
  suggestionInfo: Suggestion
}

const getAvailableCardSuggestionList = async (cardId: number) => {
  const response = await apiClient.get(
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
  )
  console.log(response)
  return response
}

type GetSuggestChecksParams = {
  suggestionType: SuggestionType
  directionType: DirectionType
  cardId: string | null
  cursorId: number
}

export type MySuggestionRes = {
  cardInfo: Card
  suggestionInfo: Suggestion
}

const getMySuggestionList = async ({
  suggestionType,
  directionType,
  cardId,
  cursorId,
}: GetSuggestChecksParams) => {
  const response: MySuggestionRes[] = await apiClient.get(
    ApiEndPoint.getMySuggestionList(
      directionType,
      suggestionType,
      cardId,
      cursorId,
    ),
  )
  return response
}

export { getAvailableCardSuggestionList, getMySuggestionList, postSuggestion }
