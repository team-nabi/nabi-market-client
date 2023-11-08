const ApiEndPoint = {
  kakaoLogin: () => '/oauth2/authorize/kakao/login',
  googleLogin: () => '/oauth2/authorize/google/login',
  getValidateUser: () => '/users',
  test: () => '/test',
  item: (itemId: number) => `/${itemId}`,
  items: (cursorId: number) => `/items?cursorId=${cursorId}`,
  dibs: (itemId: number) => `/dib/${itemId}`,
  suggestions: (itemId: string) => `/${itemId}/available-cards`,
} as const

export default ApiEndPoint
