import { COMMON_PAGE_SIZE } from '@/constants/pageSize'
import { GetCardListReq, GetMyCardListReq } from '@/services/card/card'
import { GetMyTradeHistoryListReq } from '@/services/history/history'
import { GetNotificationListReq } from '@/services/notification/notification'
import { GetMySuggestionListReq } from '@/services/suggestion/suggestion'
import { getQueryParams } from '@/utils/getQueryParams'

const ApiEndPoint = {
  getValidateUser: () => '/users',
  test: () => '/test',
  getCardInfo: (cardId: number) => `/cards/${cardId}`,
  deleteCard: (cardId: number) => `/cards/${cardId}`,
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
      size: COMMON_PAGE_SIZE,
    })}`,
  getMyCardList: ({ tradeStatus, cursorId }: GetMyCardListReq) => {
    return `/cards/${tradeStatus}/my-cards?${getQueryParams({
      cursorId,
      size: COMMON_PAGE_SIZE,
    })}`
  },
  postDibs: (cardId: number) => `/dibs/${cardId}`,
  deleteDibs: (cardId: number) => `/dibs/${cardId}`,
  getAvailableCardSuggestionList: (cardId: number) =>
    `/cards/${cardId}/available-cards`,
  getMySuggestionList: ({
    directionType,
    suggestionType,
    cardId,
    cursorId,
  }: GetMySuggestionListReq) => {
    return `/suggestions/${directionType}/${suggestionType}/${cardId}/?${getQueryParams(
      {
        cursorId,
        size: COMMON_PAGE_SIZE,
      },
    )}`
  },

  putUserProfile: () => '/users/profile-image',
  putUserNickname: () => '/users/nickname',
  postSuggestion: (suggestionType: string) => `/suggestions/${suggestionType}`,
  getMyDibsList: (cursorId: number) => `/dibs/?cursorId=${cursorId}`,
  getMyTradeHistoryList: ({ cursorId }: GetMyTradeHistoryListReq) => {
    return `/complete-requests/user/?${getQueryParams({
      cursorId,
      size: COMMON_PAGE_SIZE,
    })}`
  },
  postImageFile: () => '/s3/upload/single',
  postCard: () => '/cards',
  putCard: (cardId: string) => `/cards/${cardId}`,
  getKakaoRedirect: (code: string) =>
    `/users/oauth2/authorize/kakao/redirect?code=${code}`,
  getGoogleRedirect: (code: string) =>
    `/users/oauth2/authorize/google/redirect?code=${code}`,
  getRecentTradeHistoryList: (size: number) =>
    `/complete-requests/?size=${size}`,
  putCardStatus: (cardId: number) => `/cards/status/${cardId}`,
  getPopularCardList: () => '/cards/popular',
  putMySuggestionStatus: () => `/suggestions/decision`,
  getNotificationList: ({ isRead, cursorId }: GetNotificationListReq) => {
    return `/notifications/?${getQueryParams({
      'is-read': String(isRead),
      cursorId,
      size: COMMON_PAGE_SIZE,
    })}`
  },
  putNotificationList: () => `/notifications/read`,
} as const

export default ApiEndPoint
