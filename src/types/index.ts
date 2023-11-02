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
    category: string
    itemName: string
    pokeAvailable: boolean
    createdAt: string
    modifiedAt: string
    viewCount: number
    priceRange: string
    content: string
    status: string
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
  