import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'
import cards from '@/lib/msw/mocks/data/cards.json'
import myCards from '@/lib/msw/mocks/data/my-cards.json'

const baseUrl = Environment.apiAddress()

export const cardHandlers = [
  rest.get(`${baseUrl}/cards`, async (req, res, ctx) => {
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
    const filterdCards = cards.filter(
      (card, index) =>
        index >= currentPage * PAGE_SIZE &&
        index < (currentPage + 1) * PAGE_SIZE,
    )

    return res(ctx.status(200), ctx.json(filterdCards))
  }),
  rest.get(
    `${baseUrl}${ApiEndPoint.getCardInfo(3)}`,
    async (_req, res, ctx) => {
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
    },
  ),
  rest.delete(
    `${baseUrl}${ApiEndPoint.deleteCard(3)}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          code: 'C001',
          message: '삭제를 성공했습니다.',
        }),
      )
    },
  ),
  rest.post(`${baseUrl}${ApiEndPoint.postCard()}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 'C001',
        message: '업로드를 성공했습니다.',
        data: {
          cardInfo: {
            cardId: 1,
            cardTitle: '아이폰 16 팝니다',
            thumbNailImage: 'xxx',
            itemName: '아이폰 16',
            priceRange: 'PRICE_RANGE_ONE',
            tradeType: 'DIRECT_DEALING',
            category: 'ELECTRONICS',
            tradeArea: '서울시 성동구',
            pokeAvailable: true,
            content: '이거 진짜 쩔어요',
            createdAt: '2023-10-23-20:08',
            modifiedAt: '2023-10-23-20:08',
            viewCount: 0,
            dibsCount: 0,
            images: [
              {
                url: 'https://cdn.cetizen.com/CDN/market/market_large_crop/202311/20231109/231109182111_4_2797370.jpg',
              },
              {
                url: 'https://cdn.cetizen.com/CDN/market/market_large_crop/202311/20231109/231109182111_4_2797370.jpg',
              },
            ],
          },
        },
      }),
    )
  }),
  rest.put(`${baseUrl}${ApiEndPoint.putCard('1')}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 'C001',
        message: '수정을 성공했습니다.',
        data: {
          cardInfo: {
            cardId: 1,
            cardTitle: '아이폰 16 팝니다',
            thumbNailImage: 'xxx',
            itemName: '아이폰 16',
            priceRange: 'PRICE_RANGE_ONE',
            tradeType: 'DIRECT_DEALING',
            category: 'ELECTRONICS',
            tradeArea: '서울시 성동구',
            pokeAvailable: true,
            content: '이거 진짜 쩔어요',
            createdAt: '2023-10-23-20:08',
            modifiedAt: '2023-10-23-20:08',
            viewCount: 0,
            dibsCount: 0,
            images: [
              {
                url: 'https://cdn.cetizen.com/CDN/market/market_large_crop/202311/20231109/231109182111_4_2797370.jpg',
              },
              {
                url: 'https://cdn.cetizen.com/CDN/market/market_large_crop/202311/20231109/231109182111_4_2797370.jpg',
              },
            ],
          },
        },
      }),
    )
  }),
  rest.get(`${baseUrl}/cards/:status/my-cards`, async (req, res, ctx) => {
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
    const filterdMyCards = myCards.filter(
      (myCard, index) =>
        index >= currentPage * PAGE_SIZE &&
        index < (currentPage + 1) * PAGE_SIZE,
    )

    return res(ctx.status(200), ctx.json(filterdMyCards))
  }),
]
