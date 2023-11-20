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

export { getMyTradeHistoryList }
