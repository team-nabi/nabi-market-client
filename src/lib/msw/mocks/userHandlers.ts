import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'

const baseUrl = Environment.apiAddress()

const userHandlers = [
  rest.put(
    `${baseUrl}${ApiEndPoint.putUserProfile()}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            userInfo: {
              userId: 1,
              nickname: '귀염둥이파김치',
              profileUrl: 'xxx',
            },
          },
        }),
      )
    },
  ),
  rest.put(
    `${baseUrl}${ApiEndPoint.putUserNickname()}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            userInfo: {
              userId: 1,
              nickname: '귀염둥이파김치',
              profileUrl: 'xxx',
            },
          },
        }),
      )
    },
  ),
]

export { userHandlers }
