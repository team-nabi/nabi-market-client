import { Fragment, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import EmptyDataWrapper from '@/components/domain/empty-data-wrapper'
import NoData from '@/components/domain/no-data'
import AppPath from '@/config/appPath'
import { useChatRoomsQuery } from '@/hooks/api/queries/useChatRoomsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { GetChatRoomListRes } from '@/services/chat-room/chatRoom'
import ChatRoomCard from '../chat-room-card'

const ChatRoomList = () => {
  const router = useRouter()
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useChatRoomsQuery()

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
    <EmptyDataWrapper
      isEmpty={isEmpty}
      fallback={
        <NoData
          title={'생성된 채팅방이 없습니다.'}
          buttonContent={'홈으로 이동하기'}
          onClickButton={() => router.push(AppPath.home())}
        />
      }
    >
      {data?.pages.map(
        ({ data: { chatRoomList } }: GetChatRoomListRes, pageIndex) => (
          <Fragment key={pageIndex}>
            {chatRoomList.map((chatRoom: any) => (
              <div key={chatRoom.ChatRoomId} className="mb-6">
                <ChatRoomCard chatRoom={chatRoom} />
              </div>
            ))}
          </Fragment>
        ),
      )}
      <div ref={lastElementRef} />
    </EmptyDataWrapper>
  )
}

export default ChatRoomList
