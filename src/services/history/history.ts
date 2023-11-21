import ApiEndPoint from '@/config/apiEndPoint'
import { TradeHistory } from '@/types/tradeHistory'
import apiClient from '../apiClient'

export type GetMyTradeHistoryListReq = {
  cursorId: string | undefined
}
export type GetMyTradeHistoryListRes = {
  code: string
  message: string
  data: {
    historyList: TradeHistory[]
    nextCursorId: string
  }
}

const getMyTradeHistoryList = async ({
  cursorId,
}: GetMyTradeHistoryListReq) => {
  const response: GetMyTradeHistoryListRes = await apiClient.get(
    ApiEndPoint.getMyTradeHistoryList({ cursorId }),
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
