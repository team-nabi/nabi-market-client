const ApiEndPoint = {
  kakaoLogin: () => '/oauth2/authorize/kakao/login',
  googleLogin: () => '/oauth2/authorize/google/login',
  test: () => '/test',
  item: (itemId: string) => `/${itemId}`,
  items: (cursorId: number) => `/items?cursorId=${cursorId}`,
  dibs: (itemId: number) => `/dib/${itemId}`,
} as const

export default ApiEndPoint
