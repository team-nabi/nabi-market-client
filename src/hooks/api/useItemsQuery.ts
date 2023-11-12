import { useInfiniteQuery } from '@tanstack/react-query'
import { getItems } from '@/services/item/item'
import { Category, PriceRange } from '@/types/item'

export type UseItemsQuery = {
  category: Category
  priceRange: PriceRange
  cardTitle: string
}

export const useItemsQuery = ({
  category,
  priceRange,
  cardTitle,
}: UseItemsQuery) => {
  return useInfiniteQuery({
    queryKey: ['items', category, priceRange, cardTitle],
    queryFn: async ({ pageParam = 0 }) =>
      await getItems({
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
