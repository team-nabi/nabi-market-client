import ApiEndPoint from '@/config/apiEndPoint'
import { History } from '@/types/history'
import apiClient from '../apiClient'

export type MyHistoryRes = History

const getMyHistoryList = async ({ cursorId }: { cursorId: number }) => {
  const response: MyHistoryRes[] = await apiClient.get(
    ApiEndPoint.getMyHistoryList(cursorId),
  )
  return response
}

export { getMyHistoryList }
