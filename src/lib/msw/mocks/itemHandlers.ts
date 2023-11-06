import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'
import items from '@/lib/msw/mocks/data/items.json'

const baseUrl = Environment.apiAddress()

export const itemHandlers = [
  rest.get(`${baseUrl}/items`, async (req, res, ctx) => {
    const queryString = req.url.search
    const cursorId = queryString.slice(10)
    const currentPage = Number(cursorId)
    const PAGE_SIZE = 5
    const filterdItems = items.filter(
      (item, index) =>
        index >= currentPage * PAGE_SIZE &&
        index < (currentPage + 1) * PAGE_SIZE,
    )

    return res(ctx.status(200), ctx.json(filterdItems))
  }),
  rest.get(`${baseUrl}${ApiEndPoint.item('3')}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 'C001',
        message: '성공했습니다.',
        data: {
          cardResponseDto: {
            cardId: 3,
            cardTitle: '아이폰 16 팝니다',
            category: '전자기기',
            itemName: '아이폰 16',
            pokeAvailable: true,
            createdAt: '2023-10-23-20:08',
            modifiedAt: '2023-10-24-20:08',
            viewCount: 19,
            priceRange: '10만원대',
            content: '이거 진짜 쩔어요',
            status: 'TRADE_AVAILABLE',
            images: [
              {
                _id: 1,
                image: '이미지 url',
              },
              {
                _id: 2,
                image: '이미지 url',
              },
            ],
            dibsCount: 14,
            userId: 1,
            userName: '왕쩌는 구범모',
            tradeType: '직거래',
            tradeArea: '서울시 성동구',
          },
        },
      }),
    )
  }),
]
