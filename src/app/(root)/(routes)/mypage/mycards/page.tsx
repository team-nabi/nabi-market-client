import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import MyCardListContent from './components/my-card-list-content'

interface MyCardListPageProps {}

const MyCardListPage: FunctionComponent<MyCardListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="내 물건 페이지" />
      <MyCardListContent />
    </div>
  )
}

export default MyCardListPage
