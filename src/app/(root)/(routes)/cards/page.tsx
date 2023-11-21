import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import CardListContent from './components/card-list-content'

interface CardListPageProps {}

const CardListPage: FunctionComponent<CardListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="물건 목록" />
      <CardListContent />
    </div>
  )
}

export default CardListPage
