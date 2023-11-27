import { FunctionComponent } from 'react'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import MyCardListContent from './components/my-card-list-content'

interface MyCardListPageProps {}

const MyCardListPage: FunctionComponent<MyCardListPageProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <PageTitle title="내 물건 페이지" />
      <MyCardListContent />
    </MaxWidthWrapper>
  )
}

export default MyCardListPage
