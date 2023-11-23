interface User {
  userId: number
  accountId: string
  nickname: string
  role: 'ROLE_USER' | 'ROLE_ADMIN'
  createdDate: string
  modifiedDate: string
  imageUrl?: string
}

export type { User }
