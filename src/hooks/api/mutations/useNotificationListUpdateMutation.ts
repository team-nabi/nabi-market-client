import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { toast } from '@/hooks/useToast'
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
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['notifications', false],
      })
    },
    onSuccess: () => {
      toast({
        title: '모두 읽음 처리가 완료되었습니다.',
        duration: 1000,
      })
    },
    onError: () => {
      toast({
        title: '알림 모두 읽음 처리 중 문제가 발생하였습니다.',
        duration: 2000,
        variant: 'destructive',
      })
    },
  })
}
