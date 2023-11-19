import { useInfiniteQuery } from '@tanstack/react-query'
import { getMyTradeHistoryList } from '@/services/history/history'

export const useMyTradeHistoryQuery = () => {
  return useInfiniteQuery({
    queryKey: ['my-trade-histories'],
    queryFn: async ({ pageParam = 0 }) =>
      await getMyTradeHistoryList({
        cursorId: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPage.nextCursorId
    },
  })
}
