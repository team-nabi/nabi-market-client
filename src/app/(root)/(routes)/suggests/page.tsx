import { FunctionComponent } from 'react'
import PageTitle from '@/components/domain/page-title'
import { Category, PriceRange, Status } from '@/types/item'
import {
  DirectionType,
  SuggestionStatus,
  SuggestionType,
} from '@/types/suggest'
import MyItemSummaryCard from './components/my-item-summary-card/MyItemSummaryCard'
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

const itemDetail = {
  cardId: 3,
  cardTitle: '아이폰 16 팝니다',
  category: '전자기기' as Category,
  itemName: '아이폰 16',
  pokeAvailable: true,
  createdAt: '2023-11-09T13:38:44',
  modifiedAt: '2023-11-09T13:38:44',
  viewCount: 19,
  priceRange: '10만원대',
  content: '이거 진짜 쩔어요',
  status: 'TRADE_AVAILABLE' as Status,
  images: [
    {
      _id: 1,
      image: '이미지 url',
    },
    {
      _id: 2,
      image: '이미지 url',
    },
  ],
  dibsCount: 11,
  isMyDib: true,
  dibs: [
    {
      dibId: 1,
      userId: 1,
      cardId: 3,
      createdAt: '2023-11-09T13:38:44',
      modifiedAt: '2023-11-09T13:38:44',
    },
    {
      dibId: 2,
      userId: 2,
      cardId: 3,
      createdAt: '2023-11-09T13:38:44',
      modifiedAt: '2023-11-09T13:38:44',
    },
  ],
  userId: 3,
  userName: '왕쩌는 구범모',
  tradeType: '직거래',
  tradeArea: '서울시 성동구',
}

const SuggestListPage: FunctionComponent<SuggestListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="물건 목록" />
      <MyItemSummaryCard itemDetail={itemDetail} />
      <SuggestCheckCard suggestList={suggestList} />
    </div>
  )
}

export default SuggestListPage
