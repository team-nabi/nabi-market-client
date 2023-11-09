import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import { PriceRange } from '@/types/item'
import {
  DirectionType,
  SuggestList,
  SuggestionStatus,
  SuggestionType,
} from '@/types/suggest'
import SuggestCheckCard from './components/suggest-check-card'

interface SuggestListPageProps {}

const suggestList = {
  suggestionId: '4',
  cardId: '2',
  cardTitle: 'string',
  itemName: 'string',
  thumbnail:
    'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
  suggestionType: 'POKE' as SuggestionType,
  suggestionStatus: 'WAITING' as SuggestionStatus,
  priceRange: '10만원대' as PriceRange,
  createdAt: '2023-11-09T13:38:44',
  directionType: 'RECEIVE' as DirectionType,
}

const SuggestListPage: FunctionComponent<SuggestListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="물건 목록" />
      <SuggestCheckCard suggestList={suggestList} />
    </div>
  )
}

export default SuggestListPage
