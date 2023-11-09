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
  rest.get(`${baseUrl}${ApiEndPoint.item(3)}`, async (_req, res, ctx) => {
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
                image:
                  'https://cdn.cetizen.com/CDN/market/market_large_crop/202311/20231109/231109182102_1_2797370.jpg',
              },
              {
                _id: 2,
                image:
                  'https://cdn.cetizen.com/CDN/market/market_large_crop/202311/20231109/231109182111_4_2797370.jpg',
              },
            ],
            dibsCount: 11,
            isMyDib: true,
            dibs: [
              {
                dibId: 1,
                userId: 1,
                cardId: 3,
                createdAt: '2023-10-23-20:08',
                modifiedAt: '2023-10-24-20:08',
              },
              {
                dibId: 2,
                userId: 2,
                cardId: 3,
                createdAt: '2023-10-23-20:08',
                modifiedAt: '2023-10-24-20:08',
              },
            ],
            userId: 3,
            userName: '왕쩌는 구범모',
            tradeType: '직거래',
            tradeArea: '서울시 성동구',
          },
        },
      }),
    )
  }),
  rest.delete(`${baseUrl}${ApiEndPoint.item(3)}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 'C001',
        message: '삭제를 성공했습니다.',
      }),
    )
  }),
]
