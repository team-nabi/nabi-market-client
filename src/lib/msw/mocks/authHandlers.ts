import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'

const baseUrl = Environment.apiAddress()

const authHandlers = [
  rest.get(`${baseUrl}${ApiEndPoint.kakaoLogin()}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          userInfo: {
            userId: 1,
            nickname: '병원에 간 미어캣',
            imageUrl: 'http://asdf~',
          },
          token: {
            accessToken: 'asdfasdf',
            refreshToken: 'asdfa',
          },
        },
      }),
    )
  }),
  rest.get(`${baseUrl}${ApiEndPoint.googleLogin()}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          userInfo: {
            userId: 1,
            nickname: '병원에 간 미어캣',
            imageUrl: 'http://asdf~',
          },
          token: {
            accessToken: 'asdfasdf',
            refreshToken: 'asdfa',
          },
        },
      }),
    )
  }),
]

export default authHandlers
