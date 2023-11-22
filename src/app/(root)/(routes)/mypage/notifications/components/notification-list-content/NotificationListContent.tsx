'use client'

import { useEffect, useRef, Fragment } from 'react'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useNotificationsQuery } from '@/hooks/api/queries/useNotificationsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import NotificationList from '../notification-list'

const NotificationListContent = () => {
  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useNotificationsQuery(false)

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
      <div>
        <ExceptionBoundary
          isLoading={isLoading}
          isError={isError}
          isEmpty={isEmpty}
          isFetchingNextPage={isFetchingNextPage}
        >
          <NotificationList data={data} />
        </ExceptionBoundary>
      </div>

      <div ref={lastElementRef} />
    </>
  )
}
export default NotificationListContent
