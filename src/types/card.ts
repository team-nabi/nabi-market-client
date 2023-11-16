import { StaticImageData } from 'next/image'
import { CATEGORY, TRADE_TYPE, CARD_TRADE_STATUS } from '@/constants/card'

interface Card {
  cardId: number
  cardTitle: string
  itemName: string
  createdAt: string
  modifiedAt: string
  priceRange: string
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

type Category = (typeof CATEGORY)[number]
type TradeStatus = (typeof CARD_TRADE_STATUS)[number]
type TradeType = (typeof TRADE_TYPE)[number]

export type { Category, TradeType, Card, CardDetail, CardImages, TradeStatus }
