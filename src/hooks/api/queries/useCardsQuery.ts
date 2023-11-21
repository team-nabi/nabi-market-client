import { useInfiniteQuery } from '@tanstack/react-query'
import { GetCardListRes, getCardList } from '@/services/card/card'
import { CategoryObjs, PriceRangeObjs } from '@/types/card'

export type UseCardsQueryParams = {
  category: CategoryObjs['key']
  priceRange: PriceRangeObjs['key']
  cardTitle: string
}

export const useCardsQuery = ({
  category,
  priceRange,
  cardTitle,
}: UseCardsQueryParams) => {
  return useInfiniteQuery({
    queryKey: ['cards', category, priceRange, cardTitle],

    queryFn: async ({ pageParam = undefined }) =>
      await getCardList({
        category,
        priceRange,
        cardTitle,
        cursorId: pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: GetCardListRes) => {
      return lastPage.data.nextCursorId
    },
  })
}
