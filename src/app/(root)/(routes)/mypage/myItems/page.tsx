import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import MyCardList from './components/my-card-list'

interface MyCardListPageProps {}

const MyCardListPage: FunctionComponent<MyCardListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="내 물건 페이지" />
      <MyCardList />
    </div>
  )
}

export default MyCardListPage
