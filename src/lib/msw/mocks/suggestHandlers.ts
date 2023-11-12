import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'
import { DEFAULT_ITEM_THUMBNAIL_IMG } from '@/constants/image'

const baseUrl = Environment.apiAddress()

export const suggestHandlers = [
  rest.get(
    `${baseUrl}${ApiEndPoint.suggestions('3')}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          code: 'S001',
          message: '성공했습니다.',
          data: {
            cardList: [
              {
                _id: 1,
                cardId: 1,
                thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                cardTitle: 'xxx',
                itemName: '다이슨 청소기',
                priceRange: '10만원대',
                suggestionType: 'offer',
              },
              {
                _id: 2,
                cardId: 2,
                thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                cardTitle: 'xxx',
                itemName: '애플 워치',
                priceRange: '20만원대',
                suggestionType: 'poke',
              },
              {
                _id: 3,
                cardId: 5,
                thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                cardTitle: 'xxx',
                itemName: '에어팟 프로',
                priceRange: '20만원대',
                suggestionType: 'poke',
              },
              {
                _id: 4,
                cardId: 6,
                thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                cardTitle: 'xxx',
                itemName: '에어팟 프로',
                priceRange: '20만원대',
                suggestionType: 'poke',
              },
              {
                _id: 5,
                cardId: 7,
                thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                cardTitle: 'xxx',
                itemName: '에어팟 프로',
                priceRange: '20만원대',
                suggestionType: 'poke',
              },
            ],
          },
        }),
      )
    },
  ),
]
