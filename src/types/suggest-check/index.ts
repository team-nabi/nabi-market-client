import { PriceRange } from '../item'

export type SuggestionType = 'POKE' | 'OFFER'
export type SuggestionStatus = 'WAITING' | 'ACCEPTED' | 'DECLINED'
export type DirectionType = 'RECEIVE' | 'SEND'

export interface SuggestCheck {
  suggestionId: string
  cardId: string
  cardTitle: string
  itemName: string
  priceRange: PriceRange
  thumbnail: string
  suggestionType: SuggestionType
  suggestionStatus: SuggestionStatus
  createdAt: string
  directionType: DirectionType
  pageInfo: number
}
