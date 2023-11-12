import { useInfiniteQuery } from '@tanstack/react-query'
import { getMyItems } from '@/services/my-item/myItem'
import { Status } from '@/types/item'

export type UseMyItemsQuery = {
  status: Status
}

export const useMyItemsQuery = ({ status }: UseMyItemsQuery) => {
  return useInfiniteQuery({
    queryKey: ['my-items', status],
    queryFn: async ({ pageParam = 0 }) =>
      await getMyItems({
        status,
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
