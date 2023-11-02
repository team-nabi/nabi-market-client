const ApiEndPoint = {
  login: () => '/login',
  test: () => '/test',
  item: (itemId:string) => `/${itemId}`
} as const

export default ApiEndPoint
