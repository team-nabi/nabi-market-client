import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'

const baseUrl = Environment.apiAddress()

export const dibsHandlers = [
  rest.post(`${baseUrl}${ApiEndPoint.dibs(3)}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '찜 성공했습니다.',
      }),
    )
  }),
  rest.delete(`${baseUrl}${ApiEndPoint.dibs(3)}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '찜이 취소됐습니다.',
      }),
    )
  }),
]
