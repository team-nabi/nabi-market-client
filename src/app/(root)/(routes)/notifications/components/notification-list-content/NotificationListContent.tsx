'use client'

import { useEffect, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useNotificationsQuery } from '@/hooks/api/queries/useNotificationsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import NotificationList from '../notification-list'
import NotificationReadButton from '../notification-read-button'
import NotificationStatusTabs from '../notification-status-tabs'

const NotificationListContent = () => {
  const [isRead, setIsRead] = useState(false)

  const {
    data,
    fetchNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
  } = useNotificationsQuery(isRead)

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
    <>
      <NotificationReadButton isEmpty={isEmpty} isRead={isRead} />
      <NotificationStatusTabs setIsRead={setIsRead} />
      <ExceptionBoundary
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        isFetchingNextPage={isFetchingNextPage}
      >
        <ErrorBoundary fallback={<div>렌더링 중 문제가 발생했습니다.</div>}>
          <NotificationList data={data} />
        </ErrorBoundary>
      </ExceptionBoundary>
      <div ref={lastElementRef} />
    </>
  )
}
export default NotificationListContent
