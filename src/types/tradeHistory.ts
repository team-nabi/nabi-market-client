import { Card } from './card'

interface TradeHistory {
  historyId: string
  fromCard: Pick<Card, 'cardId' | 'thumbnail' | 'itemName' | 'priceRange'>
  toCard: Pick<Card, 'cardId' | 'thumbnail' | 'itemName' | 'priceRange'>
  createdAt: string
  modifiedAt: string
}

export type { TradeHistory }
