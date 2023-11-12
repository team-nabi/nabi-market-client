import ApiEndPoint from '@/config/apiEndPoint'
import { Status } from '@/types/item'
import apiClient from '../apiClient'

const getMyItems = async ({
  status,
  cursorId,
}: {
  status: Status
  cursorId: number
}) => {
  const response = await apiClient.get(ApiEndPoint.myItems(cursorId))
  return response
}

export { getMyItems }
