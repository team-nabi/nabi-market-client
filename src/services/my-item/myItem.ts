import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const getMyItems = async ({
  status,
  cursorId,
}: {
  status: string
  cursorId: number
}) => {
  const response = await apiClient.get(ApiEndPoint.myItems(cursorId))
  return response.json()
}

export { getMyItems }
