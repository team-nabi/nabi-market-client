import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import SuggestCheckList from './components/suggest-check-list'

interface SuggestCheckListPageProps {}

const SuggestCheckListPage: FunctionComponent<
  SuggestCheckListPageProps
> = ({}) => {
  return (
    <div>
      <PageTitle title="물건 목록" />
      <SuggestCheckList />
    </div>
  )
}

export default SuggestCheckListPage
