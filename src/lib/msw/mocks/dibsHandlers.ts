import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'
import items from '@/lib/msw/mocks/data/items.json'

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
  rest.get(`${baseUrl}${ApiEndPoint.getMyDibs}`, async (req, res, ctx) => {
    const queryString = req.url.search
    const cursorId = queryString.slice(10)
    const currentPage = Number(cursorId)
    const PAGE_SIZE = 10
    const filterdItems = items.filter(
      (item, index) =>
        index >= currentPage * PAGE_SIZE &&
        index < (currentPage + 1) * PAGE_SIZE,
    )

    return res(ctx.status(200), ctx.json(filterdItems))
  }),
]
