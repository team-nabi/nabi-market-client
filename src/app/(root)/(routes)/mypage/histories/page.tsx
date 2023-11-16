import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import MyTradeHistoryList from './components/my-trade-history-list'

interface MyHistoryListPageProps {}

const MyHistoryListPage: FunctionComponent<MyHistoryListPageProps> = ({}) => {
  return (
    <div>
      <div className="mb-8">
        <PageTitle title="내 거래 완료 내역" />
      </div>
      <MyTradeHistoryList />
    </div>
  )
}

export default MyHistoryListPage
