import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'
import myDibsItems from '@/lib/msw/mocks/data/myDibsItems.json'

const baseUrl = Environment.apiAddress()

export const dibsHandlers = [
  rest.post(`${baseUrl}${ApiEndPoint.postDibs(3)}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '찜 성공했습니다.',
      }),
    )
  }),
  rest.delete(
    `${baseUrl}${ApiEndPoint.deleteDibs(3)}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: '찜이 취소됐습니다.',
        }),
      )
    },
  ),
  rest.get(`${baseUrl}/api/v1/dibs`, async (req, res, ctx) => {
    const queryString = req.url.search
    const cursorId = queryString.slice(10)
    const currentPage = Number(cursorId)
    const PAGE_SIZE = 10
    const filterdItems = myDibsItems.data.dibList.filter(
      (item, index) =>
        index >= currentPage * PAGE_SIZE &&
        index < (currentPage + 1) * PAGE_SIZE,
    )

    return res(ctx.status(200), ctx.json(filterdItems))
  }),
]
