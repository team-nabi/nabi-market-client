import { useInfiniteQuery } from '@tanstack/react-query'
import { getCardList } from '@/services/card/card'
import { Category, PriceRange } from '@/types/card'

export type UseCardsQueryParams = {
  category: Category
  priceRange: PriceRange
  cardTitle: string
}

export const useCardsQuery = ({
  category,
  priceRange,
  cardTitle,
}: UseCardsQueryParams) => {
  return useInfiniteQuery({
    queryKey: ['cards', category, priceRange, cardTitle],

    queryFn: async ({ pageParam = 0 }) =>
      await getCardList({
        category,
        priceRange,
        cardTitle,
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
