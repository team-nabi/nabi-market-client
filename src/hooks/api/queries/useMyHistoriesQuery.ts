import { useInfiniteQuery } from '@tanstack/react-query'
import { getMyHistoryList } from '@/services/history/history'

export const useMyHistoryQuery = () => {
  return useInfiniteQuery({
    queryKey: ['my-histories'],
    queryFn: async ({ pageParam = 0 }) =>
      await getMyHistoryList({
        cursorId: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
  })
}
