import { FunctionComponent } from 'react'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import ChatRoomCard from './components/chat-room-card'

interface ChatRoomListPageProps {}

const ChatRoomListPage: FunctionComponent<ChatRoomListPageProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <PageTitle title="채팅 목록" />
      <ChatRoomCard
        chatroom={{
          chatRoomId: 1,
          createdAt: 'xxx',
          fromCardInfo: {
            cardInfo: {
              cardId: 1,
              itemName: 'xxx',
              priceRange: 'PRICE_RANGE_TWO',
              thumbnail: 'xxx',
            },
            userInfo: {
              userId: 1,
            },
          },
          toCardInfo: {
            cardInfo: {
              cardId: 2,
              itemName: 'xxx',
              priceRange: 'PRICE_RANGE_TWO',
              thumbnail: 'xxx',
            },
            userInfo: {
              userId: 3,
            },
          },
        }}
      />
    </MaxWidthWrapper>
  )
}

export default ChatRoomListPage
