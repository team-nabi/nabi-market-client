import { rest } from 'msw'
import { Environment } from '@/config/environment'
import histories from '@/lib/msw/mocks/data/histories.json'

const baseUrl = Environment.apiAddress()

export const historyHandlers = [
  rest.get(`${baseUrl}/complete-requests/user`, async (req, res, ctx) => {
    const queryString = req.url.search
    const keyValuePairs = queryString.split('&')
    let cursorId
    for (var i = 0; i < keyValuePairs.length; i++) {
      if (keyValuePairs[i].startsWith('cursorId')) {
        cursorId = keyValuePairs[i].split('=')[1]
        break
      }
    }

    const currentPage = Number(cursorId)
    const PAGE_SIZE = 10
    const filterdHistories = histories.filter(
      (history, index) =>
        index >= currentPage * PAGE_SIZE &&
        index < (currentPage + 1) * PAGE_SIZE,
    )
    return res(ctx.status(200), ctx.json(filterdHistories))
  }),
]
