import ApiEndPoint from '@/config/apiEndPoint'
import { Card } from '@/types/card'
import { DirectionType, Suggestion, SuggestionType } from '@/types/suggestion'
import apiClient from '../apiClient'

export type AvailableCardSuggestionListRes = {
  cardInfo: Card
  suggestion: Suggestion
}

const getAvailableCardSuggestionList = async (cardId: number) => {
  const response: AvailableCardSuggestionListRes[] = await apiClient.get(
    ApiEndPoint.getAvailableCardSuggestionList(cardId),
  )
  return response
}

export interface postSuggestionReponseData extends Suggestion {
  fromCardId: number
  toCardId: number
}

const postSuggestion = async (
  suggestionType: SuggestionType,
  fromCardId: number,
  toCardId: number,
) => {
  const response: postSuggestionReponseData = await apiClient.post(
    ApiEndPoint.postSuggestion(suggestionType),
    { fromCardId, toCardId },
  )
  return response
}

type GetSuggestChecksParams = {
  suggestionType: SuggestionType
  directionType: DirectionType
  itemId: string | null
  cursorId: number
}

export type MySuggestionRes = {
  cardInfo: Card
  suggestion: Suggestion
}

const getMySuggestionList = async ({
  suggestionType,
  directionType,
  itemId,
  cursorId,
}: GetSuggestChecksParams) => {
  const response: MySuggestionRes[] = await apiClient.get(
    ApiEndPoint.getMySuggestionList(cursorId),
  )
  return response
}

export { getAvailableCardSuggestionList, getMySuggestionList, postSuggestion }
