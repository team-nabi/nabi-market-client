import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const getMyItems = async ({ cursorId }: { cursorId: number }) => {
  const response = await apiClient.get(ApiEndPoint.myItems(cursorId))
  return response
}

export { getMyItems }
