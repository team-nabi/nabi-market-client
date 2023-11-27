import Link from 'next/link'
import { CardFlex, CardImage, CardText, Card } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { Notification } from '@/types/notification'

type NotificationCardProps = {
  notification: Notification
}

const NotificationCard = ({
  notification: { content, cardId },
}: NotificationCardProps) => {
  return (
    <Link href={`${AppPath.mySuggestions(cardId)}`}>
      <Card size={'xs'} className="p-4">
        <CardFlex justify={'between'} align={'center'} className="h-full">
          <CardFlex gap={'space'} align={'center'} className="h-full w-2/3">
            <div className="h-6 w-6 relative flex-shrink-0">
              <CardImage
                alt={'벨 아이콘'}
                src={Assets.notificationBell}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardText type={'description'}>{content}</CardText>
          </CardFlex>
          <CardFlex className="w-12" justify={'center'}>
            <div className="w-2.5 h-2.5 relative">
              <CardImage
                alt={'점 아이콘'}
                src={Assets.notificationDot}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </CardFlex>
        </CardFlex>
      </Card>
    </Link>
  )
}

export default NotificationCard
