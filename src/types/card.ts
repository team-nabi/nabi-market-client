import {
  CATEGORY,
  TRADE_TYPE,
  CARD_TRADE_STATUS,
  PRICE_RANGE,
  CATEGORY_OBJS,
  PRICE_RANGE_OBJS,
  TRADE_STATUS_OBJS,
  TRADE_TYPE_OBJS,
} from '@/constants/card'

interface Card {
  cardId: number
  cardTitle: string
  itemName: string
  createdAt: string
  modifiedAt: string
  priceRange: string
  thumbnail: string
  status: string
}

/**
 * 카드 상세정보 페이지 Response Type
 */
interface CardDetail extends Card {
  category: CategoryObjs
  pokeAvailable: boolean
  viewCount: number
  content: string
  images: CardImages[]
  dibCount: number
  isMyDib: boolean
  userId: number
  userName: string
  tradeType: TradeTypeObjs
  tradeArea: string
}

interface CardImages {
  url: string
}

//FIXME - 삭제 예정
type TradeStatus = (typeof CARD_TRADE_STATUS)[number]
type TradeType = (typeof TRADE_TYPE)[number]
type Category = (typeof CATEGORY)[number]
type PriceRange = (typeof PRICE_RANGE)[number]

type CategoryObjs = (typeof CATEGORY_OBJS)[number]
type PriceRangeObjs = (typeof PRICE_RANGE_OBJS)[number]
type TradeStatusObjs = (typeof TRADE_STATUS_OBJS)[number]
type TradeTypeObjs = (typeof TRADE_TYPE_OBJS)[number]

export type {
  Category,
  PriceRange,
  TradeType,
  Card,
  CardDetail,
  CardImages,
  TradeStatus,
  CategoryObjs,
  PriceRangeObjs,
  TradeStatusObjs,
  TradeTypeObjs,
}
