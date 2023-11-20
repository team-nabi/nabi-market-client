import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import { getCardInfo } from '@/services/card/card'
// import MyItemSummaryCard from './components/my-item-summary-card'
import MySuggestionListContent from './components/my-suggestion-list-content'

async function getItemValue(cardId: number) {
  try {
    const res = await getCardInfo(cardId)
    const data = await res
    data.data.cardResponseDto.image =
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg'
    data.data.cardResponseDto.createdAt = '2023-11-01T08:08:00'
    return data.data.cardResponseDto
  } catch (e) {
    console.log(e)
  }
}

const SuggestCheckListPage = async ({
  params,
}: {
  params: { cardId: string }
}) => {
  const data = await getItemValue(3)

  return (
    <div>
      <PageTitle title="제안 확인" />
      {JSON.stringify(data)}
      <MySuggestionListContent />
    </div>
  )
}

export default SuggestCheckListPage
