import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import { getItemInfo } from '@/services/item/item'
import MyItemSummaryCard from './components/my-item-summary-card'
import SuggestCheckList from './components/suggest-check-list'

interface SuggestCheckListPageProps {
  params: {
    itemId: string
  }
}

async function getItemValue(itemId: string) {
  try {
    const res = await getItemInfo(Number(itemId))
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
  const data = await getItemValue('3')
  console.log(data)
  return (
    <div>
      <PageTitle title="제안 확인" />
      {/* <MyItemSummaryCard item={data} params={params} /> */}
      {JSON.stringify(data)}
      <SuggestCheckList />
    </div>
  )
}

export default SuggestCheckListPage
