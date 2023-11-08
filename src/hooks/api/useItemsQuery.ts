import { useInfiniteQuery } from '@tanstack/react-query'
import { getItems } from '@/services/item/item'

export type UseItemsQuery = {
  category: string
  priceRange: string
  cardTitle: string
  status: string[]
  size: number
}

export const useItemsQuery = ({
  category,
  priceRange,
  cardTitle,
  status,
  size,
}: UseItemsQuery) => {
  return useInfiniteQuery({
    queryKey: [
      'items',
      {
        category,
        priceRange,
        cardTitle,
        status,
        size,
      },
    ],
    queryFn: async ({ pageParam = 0 }) =>
      await getItems({
        category,
        priceRange,
        cardTitle,
        status,
        size,
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
