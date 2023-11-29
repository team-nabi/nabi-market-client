import { useRouter } from 'next/navigation'
import { CardFlex, CardImage, CardText, Card } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { useNotificationUpdateMutation } from '@/hooks/api/mutations/useNotificationUpdateMutation'
import { Notification } from '@/types/notification'

type NotificationCardProps = {
  notification: Notification
}

const NotificationCard = ({
  notification: { content, cardId, read, notificationId },
}: NotificationCardProps) => {
  const router = useRouter()
  const { mutate } = useNotificationUpdateMutation()
  const handleReadNotification = async () => {
    if (!read) {
      mutate({ notificationId, cardId })
    } else {
      router.push(AppPath.mySuggestions(cardId))
    }
  }

  return (
    <Card size={'xs'} className="p-4" onClick={handleReadNotification}>
      <CardFlex
        justify={'between'}
        align={'center'}
        className="h-full cursor-pointer"
      >
        <CardFlex gap={'space'} align={'center'} className="h-full w-2/3">
          <div className="h-6 w-6 relative flex-shrink-0">
            <CardImage
              alt={'벨 아이콘'}
              src={Assets.notificationBell}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardText type={'description'} className="line-clamp-3">
            {content}
          </CardText>
        </CardFlex>
        <CardFlex className="w-12" justify={'center'}>
          <div className="w-2.5 h-2.5 relative">
            {read || (
              <CardImage
                alt={'점 아이콘'}
                src={Assets.notificationDot}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            )}
          </div>
        </CardFlex>
      </CardFlex>
    </Card>
  )
}

export default NotificationCard
