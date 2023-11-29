import { Fragment, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import EmptyDataWrapper from '@/components/domain/empty-data-wrapper'
import NoData from '@/components/domain/no-data'
import AppPath from '@/config/appPath'
import { useNotificationsQuery } from '@/hooks/api/queries/useNotificationsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { GetNotificationListRes } from '@/services/notification/notification'
import { Notification } from '@/types/notification'
import NotificationCard from '../notification-card'

type NotificationListProps = {
  isRead: boolean
}

const NotificationList = ({ isRead }: NotificationListProps) => {
  const router = useRouter()
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useNotificationsQuery(isRead)

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  useEffect(() => {
    if (isFetchingNextPage || !hasNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage, hasNextPage])

  const isEmpty = data?.pages[0].data.notificationList.length === 0
  return (
    <EmptyDataWrapper
      isEmpty={isEmpty}
      fallback={
        isRead || (
          <NoData
            title={'현재 알림이 없습니다.'}
            buttonContent={'홈으로 이동하기'}
            onClickButton={() => router.push(AppPath.home())}
          />
        )
      }
    >
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
      <div ref={lastElementRef} />
    </EmptyDataWrapper>
  )
}

export default NotificationList
