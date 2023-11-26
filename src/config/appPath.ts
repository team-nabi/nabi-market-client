import { Environment } from './environment'

const AppPath = {
  home: () => '/' as const,
  login: () => '/login' as const,
  logout: () => '/logout' as const,
  cards: (cardId: string) => `/cards/${cardId}` as const,
  newCard: () => '/cards/new' as const,
  cardDetail: (cardId: string) => `/cards/${cardId}` as const,
  mypage: () => '/mypage' as const,
  myCards: () => '/mypage/mycards' as const,
  mySuggestions: (cardId: number) => `/mypage/suggestions/${cardId}` as const,
  kakaoLogin: () =>
    `${Environment.apiAddress()}/users/oauth2/authorize/kakao/login` as const,
  googleLogin: () =>
    `${Environment.apiAddress()}/users/oauth2/authorize/google/login` as const,
  modifyCard: (cardId: string) => `/cards/${cardId}/modify` as const,
  chatRooms: (chatRoomId?: string) => `/chatrooms/${chatRoomId}`,
} as const

type AppPathReturnType = {
  [K in keyof typeof AppPath]: ReturnType<(typeof AppPath)[K]>
}

type PathStrings = AppPathReturnType[keyof AppPathReturnType]

export default AppPath
export type { PathStrings }
