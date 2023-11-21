import { useInfiniteQuery } from '@tanstack/react-query'
import { GetMyCardListRes, getMyCardList } from '@/services/card/card'
import { TradeStatus } from '@/types/card'

export type UseMyCardsQueryParams = {
  tradeStatus: TradeStatus
}

export const useMyCardsQuery = ({ tradeStatus }: UseMyCardsQueryParams) => {
  return useInfiniteQuery({
    queryKey: ['my-cards', tradeStatus],
    queryFn: async ({ pageParam = undefined }) =>
      await getMyCardList({
        tradeStatus,
        cursorId: pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: GetMyCardListRes) => {
      return lastPage.data.nextCursorId
    },
  })
}
