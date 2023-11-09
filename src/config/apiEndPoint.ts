const ApiEndPoint = {
  kakaoLogin: () => '/oauth2/authorize/kakao/login',
  googleLogin: () => '/oauth2/authorize/google/login',
  getValidateUser: () => '/users',
  test: () => '/test',
  item: (itemId: number) => `/${itemId}`,
  items: (cursorId: number) => `/items?cursorId=${cursorId}`,
  dibs: (itemId: number) => `/dib/${itemId}`,
  suggestions: (itemId: number) => `/${itemId}/available-cards`,
  putUserProfile: () => '/users/profile-image',
  putUserNickname: () => '/users/nickname',
} as const

export default ApiEndPoint
