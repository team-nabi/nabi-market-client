import { useInfiniteQuery } from '@tanstack/react-query'
import { getMyCardList } from '@/services/card/card'
import { TradeStatus } from '@/types/card'

export type UseMyCardsQueryParams = {
  tradeStatus: TradeStatus
}

export const useMyCardsQuery = ({ tradeStatus }: UseMyCardsQueryParams) => {
  return useInfiniteQuery({
    queryKey: ['my-cards', tradeStatus],
    queryFn: async ({ pageParam = 0 }) =>
      await getMyCardList({
        tradeStatus,
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
