import { useInfiniteQuery } from '@tanstack/react-query'
import { LIST_STALE_TIME } from '@/constants/staleTime'
import {
  GetNotificationListRes,
  getNotificationList,
} from '@/services/notification/notification'

export const useNotificationsQuery = (isRead: boolean) => {
  return useInfiniteQuery({
    queryKey: ['notifications', isRead],
    queryFn: async ({ pageParam = undefined }) =>
      await getNotificationList({
        isRead,
        cursorId: pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: GetNotificationListRes) => {
      return lastPage.data.nextCursorId
    },
    staleTime: LIST_STALE_TIME,
  })
}
