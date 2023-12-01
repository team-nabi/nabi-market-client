import Button from '@/components/ui/button'
import { useNotificationListUpdateMutation } from '@/hooks/api/mutations/useNotificationListUpdateMutation'
import { useNotificationsQuery } from '@/hooks/api/queries/useNotificationsQuery'

type NotificationReadButtonProps = {
  isRead: boolean
}

const NotificationReadButton = ({ isRead }: NotificationReadButtonProps) => {
  const { data } = useNotificationsQuery(false)
  const { mutate } = useNotificationListUpdateMutation()

  const handleReadAllNotifications = () => {
    mutate()
    window.location.reload()
  }

  const isEmpty = data?.pages[0].data.notificationList.length === 0

  return (
    <div className="flex justify-end">
      <Button
        variant={'gradation'}
        rounded={'lg'}
        onClick={handleReadAllNotifications}
        disabled={isEmpty}
        style={{ visibility: isRead ? 'hidden' : 'visible' }}
      >
        모두 읽음 처리
      </Button>
    </div>
  )
}

export default NotificationReadButton
