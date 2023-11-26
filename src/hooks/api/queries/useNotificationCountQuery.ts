import { useQuery } from '@tanstack/react-query'
import { getNotificationCount } from '@/services/notification/notification'

const useNotificationCountQuery = () => {
  return useQuery({
    queryKey: ['notificationCount'] as const,
    queryFn: () => {
      const res = getNotificationCount()
      return res
    },
  })
}

export default useNotificationCountQuery
