import { FunctionComponent } from 'react'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import MyTradeHistoryList from './components/my-trade-history-list-content'

interface MyHistoryListPageProps {}

const MyHistoryListPage: FunctionComponent<MyHistoryListPageProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <PageTitle title="내 거래 완료 내역" />
      <MyTradeHistoryList />
    </MaxWidthWrapper>
  )
}

export default MyHistoryListPage
