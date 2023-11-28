import Button from '@/components/ui/button'
import { useNotificationListUpdateMutation } from '@/hooks/api/mutations/useNotificationListUpdateMutation'

type NotificationReadButtonProps = {
  isRead: boolean
  isEmpty: boolean
}

const NotificationReadButton = ({
  isEmpty,
  isRead,
}: NotificationReadButtonProps) => {
  const { mutate } = useNotificationListUpdateMutation()

  const handleReadAllNotifications = () => {
    mutate()
    window.location.reload()
  }

  if (isRead) {
    return null
  }

  return (
    <div className="flex justify-end">
      <Button
        variant={'gradation'}
        rounded={'lg'}
        onClick={handleReadAllNotifications}
        disabled={isEmpty}
      >
        모두 읽음 처리
      </Button>
    </div>
  )
}

export default NotificationReadButton
