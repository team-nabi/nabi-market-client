import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import MyDibsTemplate from './components/MyDibsTemplate'

const MyDibsPage = () => {
  return (
    <MaxWidthWrapper>
      <PageTitle title="찜 목록" />
      <MyDibsTemplate />
    </MaxWidthWrapper>
  )
}

export default MyDibsPage
