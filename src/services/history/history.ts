import ApiEndPoint from '@/config/apiEndPoint'
import { TradeHistory } from '@/types/tradeHistory'
import apiClient from '../apiClient'

export type MyHistoryRes = TradeHistory

const getMyTradeHistoryList = async ({ cursorId }: { cursorId: number }) => {
  const response: MyHistoryRes[] = await apiClient.get(
    ApiEndPoint.getMyTradeHistoryList(cursorId),
  )
  return response
}

const getRecentTradeHistoryList = async (size: number) => {
  const response = await apiClient.get(
    ApiEndPoint.getRecentTradeHistoryList(size),
  )
  return response
}

export { getMyTradeHistoryList, getRecentTradeHistoryList }
