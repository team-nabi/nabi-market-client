import NotificationReadButton from '../notification-read-button'
import NotificationStatusTabs from '../notification-status-tabs'

type NotificationStatusManagerProps = {
  isRead: boolean
  setIsRead: (_isRead: boolean) => void
}

const NotificationStatusManager = ({
  isRead,
  setIsRead,
}: NotificationStatusManagerProps) => {
  return (
    <div>
      <NotificationReadButton isRead={isRead} />
      <NotificationStatusTabs setIsRead={setIsRead} />
    </div>
  )
}

export default NotificationStatusManager
