import ApiEndPoint from '@/config/apiEndPoint'
import { DirectionType, SuggestionType } from '@/types/suggest-check'
import apiClient from '../apiClient'

type GetSuggestChecks = {
  suggestionType: SuggestionType
  directionType: DirectionType
  itemId: string | null
  cursorId: number
}

const getSuggestChecks = async ({
  suggestionType,
  directionType,
  itemId,
  cursorId,
}: GetSuggestChecks) => {
  const response = await apiClient.get(ApiEndPoint.suggestChecks(cursorId))
  return response
}

export { getSuggestChecks }
