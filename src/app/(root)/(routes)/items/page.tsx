import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import ItemList from './components/Item-list'

interface ItemListPageProps {}

const ItemListPage: FunctionComponent<ItemListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="물건 목록" />
      <ItemList />
    </div>
  )
}

export default ItemListPage
