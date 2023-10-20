import { rest } from 'msw'

export const testHandlers = [
  rest.get('/test', async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'test message',
      }),
    )
  }),
]
