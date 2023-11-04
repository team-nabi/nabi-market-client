const ApiEndPoint = {
  kakaoLogin: () => '/oauth2/authorize/kakao/login',
  googleLogin: () => '/oauth2/authorize/google/login',
  test: () => '/test',
  item: (itemId: string) => `/${itemId}`,
  items: (cursorId: number) => `/items?cursorId=${cursorId}`,
  suggestions: (itemId: string) => `/${itemId}/available-cards`,
} as const

export default ApiEndPoint
