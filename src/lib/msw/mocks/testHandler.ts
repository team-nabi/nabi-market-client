import { rest } from 'msw'
import { Environment } from '@/config/environment'

const baseUrl = Environment.apiAddress()

export const testHandlers = [
  rest.get(`${baseUrl}/test`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'test message',
      }),
    )
  }),
]
