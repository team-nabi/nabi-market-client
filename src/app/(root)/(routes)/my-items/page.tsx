import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import MyItemList from './components/my-item-list'

interface ItemListPageProps {}

const MyItemListPage: FunctionComponent<ItemListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="내 물건 페이지" />
      <MyItemList />
    </div>
  )
}

export default MyItemListPage
