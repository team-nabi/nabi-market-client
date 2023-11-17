import { StaticImageData } from 'next/image'
import {
  CATEGORY,
  PRICE_RANGE,
  TRADE_TYPE,
  CARD_TRADE_STATUS,
  CATEGORY_OBJS,
  TRADE_TYPE_OBJS,
  PRICE_RANGE_OBJS,
} from '@/constants/card'

interface Card {
  cardId: number
  cardTitle: string
  itemName: string
  createdAt: string
  modifiedAt: string
  priceRange: PriceRange
  thumbnail: string
  status: TradeStatus
}

/**
 * 카드 상세정보 페이지 Response Type
 */
interface CardDetail extends Card {
  category: Category
  pokeAvailable: boolean
  viewCount: number
  content: string
  images: CardImages[]
  dibsCount: number
  isMyDib: boolean
  userId: number
  userName: string
  tradeType: TradeType
  tradeArea: string
}

interface CardImages {
  _id: number
  image: string | StaticImageData
}

type Category = (typeof CATEGORY_OBJS)[number]
type TradeStatus = (typeof CARD_TRADE_STATUS)[number]
type PriceRange = (typeof PRICE_RANGE_OBJS)[number]
type TradeType = (typeof TRADE_TYPE_OBJS)[number]

export type {
  Category,
  PriceRange,
  TradeType,
  Card,
  CardDetail,
  CardImages,
  TradeStatus,
}
