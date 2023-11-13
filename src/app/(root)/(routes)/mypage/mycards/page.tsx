import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/PageTitle'
import MyCardList from './components/MyCardList'

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
