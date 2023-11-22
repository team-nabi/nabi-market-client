import { FunctionComponent } from 'react'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import CardListContent from './components/card-list-content'

interface CardListPageProps {}

const CardListPage: FunctionComponent<CardListPageProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <PageTitle title="물건 목록" />
      <CardListContent />
    </MaxWidthWrapper>
  )
}

export default CardListPage
