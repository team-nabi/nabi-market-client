'use client'

import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
import InfiniteScrollLoading from '@/components/domain/infinite-scroll-loading'
import NotificationList from '../notification-list'
import NotificationReadButton from '../notification-read-button'
import NotificationStatusTabs from '../notification-status-tabs'

const NotificationListContent = () => {
  const [isRead, setIsRead] = useState(false)

  return (
    <>
      <NotificationReadButton isRead={isRead} />
      <NotificationStatusTabs setIsRead={setIsRead} />

      <ErrorBoundary
        fallback={
          <DefaultErrorTemplate onClickButton={() => console.log('재시도')} />
        }
      >
        <Suspense fallback={<InfiniteScrollLoading />}>
          <NotificationList isRead={isRead} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default NotificationListContent
