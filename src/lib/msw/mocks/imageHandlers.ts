import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'
import { DEFAULT_PROFILE_IMG } from '@/constants/image'

const baseUrl = Environment.apiAddress()

export const imageHandlers = [
  rest.post(
    `${baseUrl}${ApiEndPoint.postImageFile()}`,
    async (req, res, ctx) => {
      return res(
        ctx.delay(300),
        ctx.status(200),
        ctx.json({
          data: DEFAULT_PROFILE_IMG,
        }),
      )
    },
  ),
]
