import { useQuery } from '@tanstack/react-query'
import { getNotificationCount } from '@/services/notification/notification'

const useNotificationCountQuery = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return useQuery({
    queryKey: ['notificationCount'] as const,
    queryFn: () => getNotificationCount(),
    refetchInterval: 1000 * 60 * 3,
    enabled: isLoggedIn,
  })
}

export default useNotificationCountQuery
