import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/PageTitle'
import { getCardInfo } from '@/services/card/card'
// import MyItemSummaryCard from './components/my-item-summary-card'
import MySuggestionList from './components/MySuggestionList'

interface SuggestCheckListPageProps {
  params: {
    itemId: string
  }
}

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

const SuggestCheckListPage: FunctionComponent<
  SuggestCheckListPageProps
> = async ({ params }: SuggestCheckListPageProps) => {
  const data = await getItemValue(3)

  return (
    <div>
      <PageTitle title="제안 확인" />
      {/* <MyItemSummaryCard item={data} params={params} /> */}
      {JSON.stringify(data)}
      <MySuggestionList />
    </div>
  )
}

export default SuggestCheckListPage
