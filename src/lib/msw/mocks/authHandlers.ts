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
  rest.get(
    `${baseUrl}${ApiEndPoint.getValidateUser()}`,
    async (req, res, ctx) => {
      console.log('hit')
      const token = req.headers.get('Authorization')?.split(' ')[1]
      console.log(token)
      if (!token || token === 'undefined') {
        return res(
          ctx.status(401),
          ctx.json({
            message: '토큰이 존재하지 않습니다.',
          }),
        )
      }

      return res(
        ctx.status(200),
        ctx.json({
          data: {
            userInfo: {
              userId: 1,
              nickname: '병원에 간 미어캣',
              imageUrl: 'http://asdf~',
            },
          },
        }),
      )
    },
  ),
]

export { authHandlers }
