const ApiEndPoint = {
  kakaoLogin: () => '/oauth2/authorize/kakao/login',
  googleLogin: () => '/oauth2/authorize/google/login',
  getValidateUser: () => '/users',
  test: () => '/test',
  item: (itemId: number) => `/${itemId}`,
  items: (cursorId: number) => `/items?cursorId=${cursorId}`,
  myItems: (cursorId: number) => `/my-items?cursorId=${cursorId}`,
  dibs: (itemId: number) => `/dib/${itemId}`,
  suggestions: (itemId: string) => `/${itemId}/available-cards`,
  suggestChecks: (cursorId: number) => `/suggest-checks?cursorId=${cursorId}`,
  putUserProfile: () => '/users/profile-image',
  putUserNickname: () => '/users/nickname',
  postSuggestion: (suggestionType: string) => `/${suggestionType}`,
  getMyDibs: (cursorId: number) => `/api/v1/dibs/?cursorId=${cursorId}`,
} as const

export default ApiEndPoint
