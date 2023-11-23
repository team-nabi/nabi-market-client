import { FunctionComponent } from 'react'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import NotificationListContent from './components/notification-list-content'

interface MyHistoryListPageProps {}

const MyHistoryListPage: FunctionComponent<MyHistoryListPageProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <PageTitle title="알림" />
      <NotificationListContent />
    </MaxWidthWrapper>
  )
}

export default MyHistoryListPage
