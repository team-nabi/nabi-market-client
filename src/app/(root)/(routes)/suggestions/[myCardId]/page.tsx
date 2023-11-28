import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import PageTitle from '@/components/domain/page-title'
import ApiEndPoint from '@/config/apiEndPoint'
import ErrorMessages from '@/config/errorMessages'
import { ForbiddenError } from '@/lib/errors'
import apiClient from '@/services/apiClient'
import { getCardInfo } from '@/services/card/card'
import { CardDetail } from '@/types/card'
import { getServerCookie } from '@/utils/getServerCookie'
import MyCardDescriptionSection from './components/my-card-description-section'
import MySuggestionListContent from './components/my-suggestion-list-content'

async function getMyCardInfo(cardId: string) {
  const token = getServerCookie()

  const resCard = await getCardInfo(Number(cardId))
  const resUser = await apiClient.get(
    ApiEndPoint.getValidateUser(),
    {},
    {
      Authorization: `${token}`,
    },
  )

  if (resUser.data.userInfo.userId !== resCard.data.userInfo.userId) {
    throw new ForbiddenError(new Response(ErrorMessages.Forbidden))
  }

  return resCard.data.cardInfo
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
