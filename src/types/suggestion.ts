import {
  SUGGESTION_STATUS,
  SUGGESTION_TYPE,
  DIRECTION_TYPE,
} from '@/constants/card'

export type SuggestionType = (typeof SUGGESTION_TYPE)[number]
export type SuggestionStatus = (typeof SUGGESTION_STATUS)[number]
export type DirectionType = (typeof DIRECTION_TYPE)[number]

export interface Suggestion {
  suggestionId: string
  suggestionStatus: SuggestionStatus
  suggestionType: SuggestionType
  directionType: DirectionType
  createdAt: string
}
