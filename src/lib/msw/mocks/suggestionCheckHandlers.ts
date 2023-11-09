import { rest } from 'msw'
import { Environment } from '@/config/environment'
import items from '@/lib/msw/mocks/data/items.json'

const baseUrl = Environment.apiAddress()

export const suggestionCheckHandlers = [
  rest.get(`${baseUrl}/suggestion-checks`, async (req, res, ctx) => {
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
