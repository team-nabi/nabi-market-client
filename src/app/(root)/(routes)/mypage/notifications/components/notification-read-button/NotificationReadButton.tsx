import Button from '@/components/ui/button'
import { useNotificationListUpdateMutation } from '@/hooks/api/mutations/useNotificationListUpdateMutation'

const NotificationReadButton = () => {
  const { mutate } = useNotificationListUpdateMutation()

  const handleReadAllNotifications = () => {
    mutate()
  }

  return (
    <div className="flex justify-end">
      <Button
        variant={'gradation'}
        rounded={'lg'}
        onClick={handleReadAllNotifications}
      >
        모두 읽음 처리
      </Button>
    </div>
  )
}

export default NotificationReadButton
