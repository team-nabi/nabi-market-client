import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {
  GetNotificationListRes,
  putNotificationList,
} from '@/services/notification/notification'

export const useNotificationListUpdateMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      const data: InfiniteData<GetNotificationListRes, unknown> | undefined =
        queryClient.getQueryData(['notifications', false])
      const notificationIds = data?.pages.flatMap((page) =>
        page.data.notificationList.map(
          (notification) => notification.notificationId,
        ),
      )
      await putNotificationList({ notificationIds })
    },
    onMutate: async () => {
      console.log('onMutate')
      // TODO : 에러처리 및 각 종 Optimistic Update 관련 기능 처리하기
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['notifications', true],
      })
      queryClient.invalidateQueries({
        queryKey: ['notifications', false],
      })
    },
  })
}
