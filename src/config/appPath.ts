const AppPath = {
  home: () => '/' as const,
  login: () => '/login' as const,
  logout: () => '/logout' as const,
  cards: () => '/cards' as const,
  newCard: () => '/cards/new' as const,
  cardDetail: (cardId: string) => `/cards/${cardId}` as const,
  mypage: () => '/mypage' as const,
  myItems: () => '/mypage/my-items' as const,
  suggestChecks: () => '/mypage/suggest-checks' as const,
} as const

type AppPathReturnType = {
  [K in keyof typeof AppPath]: ReturnType<(typeof AppPath)[K]>
}

type PathStrings = AppPathReturnType[keyof AppPathReturnType]

export default AppPath
export type { PathStrings }
