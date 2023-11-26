import { useInfiniteQuery } from '@tanstack/react-query'
import { GetMyDibsRes, getMyDibs } from '@/services/card/card'

export const useMyDibsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['myDibs'],
    queryFn: async ({ pageParam = undefined }) =>
      await getMyDibs({ cursorId: pageParam }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: GetMyDibsRes) => {
      return lastPage.data.nextCursorId
    },
  })
}
