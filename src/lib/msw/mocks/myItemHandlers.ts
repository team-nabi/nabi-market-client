import { rest } from 'msw'
import { Environment } from '@/config/environment'
import myItems from '@/lib/msw/mocks/data/my-items.json'

const baseUrl = Environment.apiAddress()

export const myItemHandlers = [
  rest.get(`${baseUrl}/my-items`, async (req, res, ctx) => {
    const queryString = req.url.search
    const cursorId = queryString.slice(10)
    const currentPage = Number(cursorId)
    const PAGE_SIZE = 10
    const filterdItems = myItems.filter(
      (item, index) =>
        index >= currentPage * PAGE_SIZE &&
        index < (currentPage + 1) * PAGE_SIZE,
    )

    return res(ctx.status(200), ctx.json(filterdItems))
  }),
]