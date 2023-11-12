import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const getSuggestions = async (itemId: number) => {
  const response = await apiClient.get(ApiEndPoint.suggestions(itemId))
  return response
}

export { getSuggestions }
