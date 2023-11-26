import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import { GetChatRoomListRes } from '@/services/chat-room/chatRoom'
import ChatRoomCard from '../chat-room-card'

const ChatRoomList = ({
  data,
}: {
  data: InfiniteData<GetChatRoomListRes, unknown> | undefined
}) => (
  <>
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
  </>
)

export default ChatRoomList
