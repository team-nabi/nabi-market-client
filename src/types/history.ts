import { Card } from './card'

interface History {
  historyId: string
  fromCard: Pick<Card, 'cardId' | 'thumbnail' | 'itemName' | 'priceRange'>
  toCard: Pick<Card, 'cardId' | 'thumbnail' | 'itemName' | 'priceRange'>
  createdAt: string
  modifiedAt: string
}

export type { History }
