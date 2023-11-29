import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import { toast } from '@/hooks/useToast'
import {
  GetNotificationListRes,
  putNotificationList,
} from '@/services/notification/notification'

export const useNotificationUpdateMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const queryKey = ['notifications', false]
  return useMutation({
    mutationFn: async ({
      notificationId,
    }: {
      notificationId: number
      cardId: number
    }) => {
      let notificationIds
      if (notificationId) {
        notificationIds = [notificationId]
      } else {
        const data: InfiniteData<GetNotificationListRes, unknown> | undefined =
          queryClient.getQueryData(queryKey)
        notificationIds = data?.pages.flatMap((page) =>
          page.data.notificationList.map(
            (notification) => notification.notificationId,
          ),
        )
      }
      await putNotificationList({ notificationIds })
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey,
      })
    },
    onSuccess: (data, { cardId }) => {
      router.push(AppPath.mySuggestions(cardId))
      toast({
        title: '알림이 읽음 처리 되었습니다.',
        duration: 1000,
      })
    },
    onError: (error, _, context) => {
      toast({
        title: '알림 읽음 처리 중 문제가 발생하였습니다.',
        duration: 2000,
        variant: 'destructive',
      })
    },
  })
}
