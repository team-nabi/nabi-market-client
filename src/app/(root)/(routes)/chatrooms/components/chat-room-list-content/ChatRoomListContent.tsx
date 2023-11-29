'use client'

import { useEffect, useRef, Fragment } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useChatRoomsQuery } from '@/hooks/api/queries/useChatRoomsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import ChatRoomList from '../chat-room-list'

const ChatRoomListContent = () => {
  const {
    data,
    fetchNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
  } = useChatRoomsQuery()

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

  const isEmpty = data?.pages[0].data.chatRoomList.length === 0

  return (
    <>
      <ExceptionBoundary
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        isFetchingNextPage={isFetchingNextPage}
      >
        <ErrorBoundary fallback={<div>렌더링 중 문제가 발생했습니다.</div>}>
          <ChatRoomList data={data} />
        </ErrorBoundary>
      </ExceptionBoundary>

      <div ref={lastElementRef} />
    </>
  )
}
export default ChatRoomListContent
