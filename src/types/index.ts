import {Category, Status} from "./item"

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
  tradeState: 'possible' | 'impossible'
}

export interface ItemDetail{
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
    userId: number
    userName: string
    tradeType: string
    tradeArea: string
}

export interface ItemImage {
    _id: number
    image: string
}
