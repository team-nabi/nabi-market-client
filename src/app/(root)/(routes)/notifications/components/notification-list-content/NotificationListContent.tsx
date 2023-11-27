'use client'

import { useEffect, useRef, useState } from 'react'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useNotificationsQuery } from '@/hooks/api/queries/useNotificationsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import NotificationList from '../notification-list'
import NotificationReadButton from '../notification-read-button'
import NotificationStatusTabs from '../notification-status-tabs'

const NotificationListContent = () => {
  const [isRead, setIsRead] = useState(false)

  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useNotificationsQuery(isRead)

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  useEffect(() => {
    if (isFetchingNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage])

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
        <NotificationList data={data} />
      </ExceptionBoundary>
      <div ref={lastElementRef} />
    </>
  )
}
export default NotificationListContent
