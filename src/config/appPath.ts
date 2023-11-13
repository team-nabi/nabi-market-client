const AppPath = {
  home: () => '/' as const,
  login: () => '/login' as const,
  logout: () => '/logout' as const,
  items: () => '/items' as const,
  myItems: () => '/mypage/my-items' as const,
  suggestChecks: () => '/mypage/suggest-checks' as const,
} as const

type AppPathReturnType = {
  [K in keyof typeof AppPath]: ReturnType<(typeof AppPath)[K]>
}

type PathStrings = AppPathReturnType[keyof AppPathReturnType]

export default AppPath
export type { PathStrings }
