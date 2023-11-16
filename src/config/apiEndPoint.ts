import { TradeStatus } from '@/types/card'
import { DirectionType, SuggestionType } from '@/types/suggestion'

const ApiEndPoint = {
  getValidateUser: () => '/users',
  test: () => '/test',
  getCardInfo: (cardId: number) => `cards/${cardId}`,
  deleteCard: (cardId: number) => `cards/${cardId}`,
  getCardList: (cursorId: number) =>
    `/cards/?category&priceRange&cardTitle&cursorId=${cursorId}&status&size`, // TODO: category,priceRange,cardTitle,status,size 적용
  getMyCardList: (status: TradeStatus, cursorId: number) =>
    `/cards/${status}/my-cards?&size&cursorId=${cursorId}`, // TODO: status 적용
  postDibs: (cardId: number) => `/dibs/${cardId}`,
  deleteDibs: (cardId: number) => `/dibs/${cardId}`,
  getAvailableCardSuggestionList: (cardId: number) =>
    `cards/${cardId}/available-cards`,
  getMySuggestionList: (
    directionType: DirectionType,
    suggestionType: SuggestionType,
    cardId: string | null,
    cursorId: number,
  ) =>
    `/suggestions/${directionType}/${suggestionType}/${cardId}/?&size={}&cursorId=${cursorId}`, //TODO: 변수 적용
  putUserProfile: () => '/users/profile-image',
  putUserNickname: () => '/users/nickname',
  postSuggestion: (suggestionType: string) => `/suggestions/${suggestionType}`,
  getMyDibsList: (cursorId: number) => `/dibs/?cursorId=${cursorId}`,
  getMyTradeHistoryList: (cursorId: number) =>
    `/complete-requests/user/?size&cursorId=${cursorId}`,
  postImageFile: () => '/s3/upload/single',
  postCard: () => '/cards',
  putCard: (cardId: string) => `/cards/${cardId}`,
  getKakaoRedirect: (code: string) =>
    `/users/oauth2/authorize/kakao/redirect?code=${code}`,
  getGoogleRedirect: (code: string) =>
    `/users/oauth2/authorize/google/redirect?code=${code}`,
} as const

export default ApiEndPoint
