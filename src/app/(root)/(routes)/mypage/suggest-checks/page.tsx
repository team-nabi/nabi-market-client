import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import MyItemSummaryCard from './components/my-item-summary-card'
import SuggestCheckList from './components/suggest-check-list'

interface SuggestCheckListPageProps {
  params: {
    itemId: string
  }
}

const SuggestCheckListPage: FunctionComponent<SuggestCheckListPageProps> = ({
  params,
}: SuggestCheckListPageProps) => {
  return (
    <div>
      <PageTitle title="물건 목록" />
      <MyItemSummaryCard params={params} />
      <SuggestCheckList />
    </div>
  )
}

export default SuggestCheckListPage
