import { Environment } from './environment'

const AppPath = {
  home: () => '/' as const,
  login: () => '/login' as const,
  logout: () => '/logout' as const,
  cards: () => `/cards` as const,
  card: (cardId: string) => `/cards/${cardId}` as const,
  newCard: () => '/cards/new' as const,
  modifyCard: (cardId: string) => `/cards/${cardId}/modify` as const,
  myCards: () => '/cards/my' as const,
  mypage: () => '/mypage' as const,
  myDibs: () => '/dibs' as const,
  myNotifications: () => '/notifications' as const,
  mySuggestions: (cardId: number) => `/suggestions/${cardId}` as const,
  myHistory: () => '/history' as const,
  kakaoLogin: () =>
    `${Environment.apiAddress()}/users/oauth2/authorize/kakao/login` as const,
  googleLogin: () =>
    `${Environment.apiAddress()}/users/oauth2/authorize/google/login` as const,
  chatRooms: () => '/chatrooms' as const,
  chatRoom: (chatRoomId: string) => `/chatrooms/${chatRoomId}` as const,
} as const

type AppPathReturnType = {
  [K in keyof typeof AppPath]: ReturnType<(typeof AppPath)[K]>
}

type PathStrings = AppPathReturnType[keyof AppPathReturnType]

export default AppPath
export type { PathStrings }
