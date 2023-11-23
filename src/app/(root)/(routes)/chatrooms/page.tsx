import { FunctionComponent } from 'react'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import ChatRoomListContent from './components/chat-room-list-content'

interface ChatRoomListPageProps {}

const ChatRoomListPage: FunctionComponent<ChatRoomListPageProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <PageTitle title="채팅 목록" />
      <ChatRoomListContent />
    </MaxWidthWrapper>
  )
}

export default ChatRoomListPage
