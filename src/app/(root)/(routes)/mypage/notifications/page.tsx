import { FunctionComponent } from 'react'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import NotificationCard from './components/notification-card'

interface MyHistoryListPageProps {}

const MyHistoryListPage: FunctionComponent<MyHistoryListPageProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <PageTitle title="알림" />
      <NotificationCard
        notification={{
          notificatoinId: 1,
          isRead: false,
          content: '[내 물건]에 대한 [상대 유저명]님의 새로운 제안이 있습니다.',
          cardId: 37,
        }}
      />
    </MaxWidthWrapper>
  )
}

export default MyHistoryListPage
