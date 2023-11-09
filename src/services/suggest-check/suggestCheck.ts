import ApiEndPoint from '@/config/apiEndPoint'
import { DirectionType, SuggestionType } from '@/types/suggest'
import apiClient from '../apiClient'

type GetSuggestChecks = {
  suggestionType: SuggestionType
  directionType: DirectionType
  cursorId: number
}

const getSuggestChecks = async ({
  suggestionType,
  directionType,
  cursorId,
}: GetSuggestChecks) => {
  const response = await apiClient.get(ApiEndPoint.suggestionChecks(cursorId))
  return response.json()
}

export { getSuggestChecks }
