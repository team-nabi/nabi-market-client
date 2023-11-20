import { useInfiniteQuery } from '@tanstack/react-query'
import {
  GetMyTradeHistoryListRes,
  getMyTradeHistoryList,
} from '@/services/history/history'

export const useMyTradeHistoryQuery = () => {
  return useInfiniteQuery({
    queryKey: ['my-trade-histories'],
    queryFn: async ({ pageParam = undefined }) =>
      await getMyTradeHistoryList({
        cursorId: pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: GetMyTradeHistoryListRes) => {
      return lastPage.data.nextCursorId
    },
  })
}
