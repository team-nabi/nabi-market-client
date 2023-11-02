const ApiEndPoint = {
  kakaoLogin: () => '/oauth2/authorize/kakao/login',
  googleLogin: () => '/oauth2/authorize/google/login',
  test: () => '/test',
  item: (itemId:string) => `/${itemId}`
} as const

export default ApiEndPoint
