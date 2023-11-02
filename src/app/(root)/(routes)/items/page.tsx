import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/PageTitle'
import ItemList from './components/ItemList'

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
