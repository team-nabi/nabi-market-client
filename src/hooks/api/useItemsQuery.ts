import { useInfiniteQuery } from '@tanstack/react-query'
import { getItems } from '@/services/item/item'

export type UseItemsQuery = {
  category: string[]
  priceRange: string
  name: string
  status: string[]
  size: number
}

export const useItemsQuery = ({
  category,
  priceRange,
  name,
  status,
  size,
}: UseItemsQuery) => {
  return useInfiniteQuery({
    queryKey: ['items', category, priceRange, name, status, size],
    queryFn: async ({ pageParam }) =>
      await getItems({
        category,
        priceRange,
        name,
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
