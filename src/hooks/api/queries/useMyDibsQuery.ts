import { useInfiniteQuery } from '@tanstack/react-query'
import { getMyDibs } from '@/services/item/item'

export const useMyDibsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['myDibs'],
    queryFn: async ({ pageParam = 0 }) => await getMyDibs(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
  })
}
