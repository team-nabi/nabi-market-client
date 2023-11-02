const ApiEndPoint = {
  kakaoLogin: () => '/oauth2/authorize/kakao/login',
  googleLogin: () => '/oauth2/authorize/google/login',
  getValidateUser: () => '/users',
  test: () => '/test',
} as const

export default ApiEndPoint
