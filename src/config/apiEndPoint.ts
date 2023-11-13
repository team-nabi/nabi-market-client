const ApiEndPoint = {
  kakaoLogin: () => 'users/oauth2/authorize/kakao/login',
  googleLogin: () => 'users/oauth2/authorize/google/login',
  getValidateUser: () => '/users',
  test: () => '/test',
  getCardInfo: (cardId: number) => `cards/${cardId}`,
  deleteCard: (cardId: number) => `cards/${cardId}`,
  getCardList: (cursorId: number) =>
    `cards/?category&priceRange&cardTitle&cursorId=${cursorId}&status&size`, // TODO: category,priceRange,cardTitle,status,size 적용
  getMyCardList: (cursorId: number) =>
    `cards/{status}/my-cards?cursorId=${cursorId}&size`, // TODO: status 적용
  postDibs: (cardId: number) => `/dibs/${cardId}`,
  deleteDibs: (cardId: number) => `/dibs/${cardId}`,
  getAvailableCardSuggestionList: (cardId: number) =>
    `cards/${cardId}/available-cards`,
  getMySuggestionList: (cursorId: number) =>
    `suggestions/{directionType}/{suggestionType}/{cardId}/?cursorId=${cursorId}&size={}`, //TODO: 변수 적용
  putUserProfile: () => '/users/profile-image',
  putUserNickname: () => '/users/nickname',
  postSuggestion: (suggestionType: string) => `/suggestions/${suggestionType}`,
  getMyDibsList: (cursorId: number) => `/dibs/?cursorId=${cursorId}`,
} as const

export default ApiEndPoint
