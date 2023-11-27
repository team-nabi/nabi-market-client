import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import { getCardInfo } from '@/services/card/card'
import { CardDetail } from '@/types/card'
import MyCardDescriptionSection from './components/my-card-description-section'
import MySuggestionListContent from './components/my-suggestion-list-content'

async function getMyCardInfo(cardId: string) {
  const res = await getCardInfo(Number(cardId))
  return res.data.cardInfo
}

const SuggestCheckListPage = async ({
  params: { myCardId },
}: {
  params: { myCardId: string }
}) => {
  const myCard = await getMyCardInfo(myCardId)

  return (
    <MaxWidthWrapper>
      <PageTitle title="제안 확인" />
      <MyCardDescriptionSection card={myCard as CardDetail} />
      <MySuggestionListContent />
    </MaxWidthWrapper>
  )
}

export default SuggestCheckListPage
