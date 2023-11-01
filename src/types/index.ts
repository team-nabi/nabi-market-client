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
