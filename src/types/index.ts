import { Category, Status } from './item'

export interface Item {
  _id: number
  cardId: number
  cardTitle: string
  itemName: string
  createdAt: string
  modifiedAt: string
  dibCount: number
  priceRange: string
  image: string
  status: string
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
  dibs: Dibs[]
  userId: number
  userName: string
  tradeType: string
  tradeArea: string
}

export interface ItemImage {
  _id: number
  image: string
}

export interface Dibs {
  dibsId: number
  userId: number
  cardId: number
  createdAt: string
  modifiedAt: string
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
