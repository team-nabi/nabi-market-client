'use client'

import { useEffect, useRef, Fragment } from 'react'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useChatRoomsQuery } from '@/hooks/api/queries/useChatRoomsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import ChatRoomList from '../chat-room-list'

const ChatRoomListContent = () => {
  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useChatRoomsQuery()

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

  const isEmpty = data?.pages[0].data.chatRoomList.length === 0

  return (
    <>
      <div>
        <ExceptionBoundary
          isLoading={isLoading}
          isError={isError}
          isEmpty={isEmpty}
          isFetchingNextPage={isFetchingNextPage}
        >
          <ChatRoomList data={data} />
        </ExceptionBoundary>
      </div>

      <div ref={lastElementRef} />
    </>
  )
}
export default ChatRoomListContent
