import ApiEndPoint from '@/config/apiEndPoint'
import { SuggestionRequestData } from '@/types'
import apiClient from '../apiClient'

const getSuggestions = async (itemId: number) => {
  const response = await apiClient.get(ApiEndPoint.suggestions(itemId))
  return response.data.cardList
}

const postSuggestion = async ({
  suggestionType,
  fromCardId,
  toCardId,
}: SuggestionRequestData) => {
  const response = await apiClient.post(
    ApiEndPoint.postSuggestion(suggestionType),
    { fromCardId, toCardId },
  )
  return response
}

export { getSuggestions, postSuggestion }
