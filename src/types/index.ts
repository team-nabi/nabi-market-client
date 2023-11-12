import { Category, PriceRange, Status } from './item'
import { User } from './user'

export interface Item {
  cardId: string
  cardTitle: string
  itemName: string
  createdAt: string
  modifiedAt: string
  dibCount: number
  priceRange: PriceRange
  image: string
  status: Status
}

export interface MyItem {
  cardId: string
  cardTitle: string
  itemName: string
  createdAt: string
  modifiedAt: string
  priceRange: PriceRange
  thumbNail: string
  status: Status
}
export interface ItemDetail {
  cardId: number
  cardTitle: string
  category: Category
  itemName: string
  pokeAvailable: boolean
  createdAt: string
  modifiedAt: string
  viewCount: number
  priceRange: string
  content: string
  status: Status
  images: ItemImage[]
  dibsCount: number
  isMyDib: boolean
  userId: number
  userName: string
  tradeType: string
  tradeArea: string
}

export interface ItemImage {
  _id: number
  image: string
}

export interface ItemSuggestion {
  _id: number
  cardId: number
  thumbNail: string
  cardTitle: string
  itemName: string
  priceRange: Category
  suggestionType: 'poke' | 'offer'
}

export type { User }
