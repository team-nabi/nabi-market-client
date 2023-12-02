'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Loading from '@/app/loading'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
import ChatRoomList from '../chat-room-list'

const ChatRoomListContent = () => {
  return (
    <>
      <ErrorBoundary
        fallback={
          <DefaultErrorTemplate onClickButton={() => console.log('재시도')} />
        }
      >
        <Suspense fallback={<Loading />}>
          <ChatRoomList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default ChatRoomListContent
