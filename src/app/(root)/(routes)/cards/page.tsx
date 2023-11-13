import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/PageTitle'
import CardList from './components/card-list'

interface CardListPageProps {}

const CardListPage: FunctionComponent<CardListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="물건 목록" />
      <CardList />
    </div>
  )
}

export default CardListPage
