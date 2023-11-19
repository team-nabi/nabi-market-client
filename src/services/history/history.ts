import ApiEndPoint from '@/config/apiEndPoint'
import { TradeHistory } from '@/types/tradeHistory'
import apiClient from '../apiClient'

export type MyHistoryRes = TradeHistory

const getMyTradeHistoryList = async ({ cursorId }: { cursorId: number }) => {
  const response = await apiClient.get(
    ApiEndPoint.getMyTradeHistoryList(cursorId),
  )
  return response.data
}

export { getMyTradeHistoryList }
