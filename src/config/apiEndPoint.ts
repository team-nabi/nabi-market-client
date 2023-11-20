import { GetCardListReq } from '@/services/card/card'
import { Category, PriceRange, TradeStatus } from '@/types/card'
import { DirectionType, SuggestionType } from '@/types/suggestion'
import { getQueryParams } from '@/utils/getQueryParams'

const ApiEndPoint = {
  getValidateUser: () => '/users',
  test: () => '/test',
  getCardInfo: (cardId: number) => `cards/${cardId}`,
  deleteCard: (cardId: number) => `cards/${cardId}`,
  getCardList: ({
    category,
    priceRange,
    cardTitle,
    cursorId,
  }: GetCardListReq) =>
    `/cards/?${getQueryParams({
      category,
      priceRange,
      cardTitle,
      cursorId,
      status: 'TRADE_AVAILABLE,RESERVED',
      size: '5',
    })}`,
  getMyCardList: (status: TradeStatus, cursorId: number) => {
    return `/cards/${status}/my-cards?${getQueryParams({
      cursorId,
      size: '5',
    })}`
  },
  postDibs: (cardId: number) => `/dibs/${cardId}`,
  deleteDibs: (cardId: number) => `/dibs/${cardId}`,
  getAvailableCardSuggestionList: (cardId: number) =>
    `cards/${cardId}/available-cards`,
  getMySuggestionList: (
    directionType: DirectionType,
    suggestionType: SuggestionType,
    cardId: string | null,
    cursorId: number,
  ) => {
    return `/suggestions/${directionType}/${suggestionType}/${cardId}/?${getQueryParams(
      {
        cursorId,
        size: '5',
      },
    )}`
  },

  putUserProfile: () => '/users/profile-image',
  putUserNickname: () => '/users/nickname',
  postSuggestion: (suggestionType: string) => `/suggestions/${suggestionType}`,
  getMyDibsList: (cursorId: number) => `/d  ibs/?cursorId=${cursorId}`,
  getMyTradeHistoryList: (cursorId: number) => {
    return `/complete-requests/user/?${getQueryParams({
      cursorId,
      size: '5',
    })}`
  },
  postImageFile: () => '/s3/upload/single',
  postCard: () => '/cards',
  putCard: (cardId: string) => `/cards/${cardId}`,
  getKakaoRedirect: (code: string) =>
    `/users/oauth2/authorize/kakao/redirect?code=${code}`,
  getGoogleRedirect: (code: string) =>
    `/users/oauth2/authorize/google/redirect?code=${code}`,
} as const

export default ApiEndPoint
