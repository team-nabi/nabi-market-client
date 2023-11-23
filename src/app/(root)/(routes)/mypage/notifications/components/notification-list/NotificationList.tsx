import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import { GetNotificationListRes } from '@/services/notification/notification'
import { Notification } from '@/types/notification'
import NotificationCard from '../notification-card'

const NotificationList = ({
  data,
}: {
  data: InfiniteData<GetNotificationListRes, unknown> | undefined
}) => (
  <>
    {data?.pages.map(
      ({ data: { notificationList } }: GetNotificationListRes, pageIndex) => (
        <Fragment key={pageIndex}>
          {notificationList.map((notification: Notification) => (
            <div key={notification.notificationId} className="mb-6">
              <NotificationCard notification={notification} />
            </div>
          ))}
        </Fragment>
      ),
    )}
  </>
)

export default NotificationList
