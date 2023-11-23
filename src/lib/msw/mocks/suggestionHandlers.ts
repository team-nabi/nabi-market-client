import { rest } from 'msw'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'
import { DEFAULT_ITEM_THUMBNAIL_IMG } from '@/constants/image'
import suggestions from '@/lib/msw/mocks/data/suggestions.json'

const baseUrl = Environment.apiAddress()

export const suggestionHandlers = [
  rest.get(
    `${baseUrl}${ApiEndPoint.getAvailableCardSuggestionList(3)}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          code: 'S001',
          message: '성공했습니다.',
          data: {
            cardList: [
              {
                cardInfo: {
                  _id: 1,
                  cardId: 1,
                  thumbnail: DEFAULT_ITEM_THUMBNAIL_IMG,
                  cardTitle: 'xxx',
                  itemName: '다이슨 청소기 id 1',
                  priceRange: '10만원대',
                },
                suggestionInfo: {
                  suggestionType: 'OFFER',
                  suggestionStatus: null,
                },
              },
              {
                cardInfo: {
                  _id: 2,
                  cardId: 2,
                  thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                  cardTitle: 'xxx',
                  itemName: '애플 워치 id 2',
                  priceRange: '20만원대',
                },
                suggestionInfo: {
                  suggestionType: 'POKE',
                  suggestionStatus: null,
                },
              },
              {
                cardInfo: {
                  _id: 3,
                  cardId: 5,
                  thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                  cardTitle: 'xxx',
                  itemName: '에어팟 프로 id 5',
                  priceRange: '20만원대',
                },
                suggestionInfo: {
                  suggestionType: 'POKE',
                  suggestionStatus: null,
                },
              },
              {
                cardInfo: {
                  _id: 4,
                  cardId: 6,
                  thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                  cardTitle: 'xxx',
                  itemName: '에어팟 프로 id 6',
                  priceRange: '20만원대',
                },
                suggestionInfo: {
                  suggestionType: 'POKE',
                  suggestionStatus: null,
                },
              },
              {
                cardInfo: {
                  _id: 5,
                  cardId: 7,
                  thumbNail: DEFAULT_ITEM_THUMBNAIL_IMG,
                  cardTitle: 'xxx',
                  itemName: '에어팟 프로 id 7',
                  priceRange: '20만원대',
                },
                suggestionInfo: {
                  suggestionType: 'POKE',
                  suggestionStatus: 'WAITING',
                },
              },
            ],
          },
        }),
      )
    },
  ),
  rest.post(
    `${baseUrl}${ApiEndPoint.postSuggestion('POKE')}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          code: 'SUCCESS',
          message: '찔러보기 성공하였습니다.',
          data: {
            suggestionId: 1,
            suggestionType: 'POKE',
            fromCardId: 1,
            toCardId: 3,
            suggestionStatus: 'WAITING',
            createdAt: '2023-11-09T14:59:51',
          },
        }),
      )
    },
  ),
  rest.post(
    `${baseUrl}${ApiEndPoint.postSuggestion('OFFER')}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          code: 'SUCCESS',
          message: '오퍼하기 성공하였습니다.',
          data: {
            suggestionId: 1,
            suggestionType: 'OFFER',
            fromCardId: 1,
            toCardId: 3,
            suggestionStatus: 'WAITING',
            createdAt: '2023-11-09T14:59:51',
          },
        }),
      )
    },
  ),
  rest.get(
    `${baseUrl}/suggestions/:directionType/:suggestionType/:cardId/`,
    async (req, res, ctx) => {
      const queryString = req.url.search
      const keyValuePairs = queryString.split('&')
      let cursorId
      for (var i = 0; i < keyValuePairs.length; i++) {
        if (keyValuePairs[i].startsWith('cursorId')) {
          cursorId = keyValuePairs[i].split('=')[1]
          break
        }
      }
      console.log(cursorId)
      const currentPage = Number(cursorId)
      const PAGE_SIZE = 10
      const filterdSuggestions = suggestions.filter(
        (suggestion, index) =>
          index >= currentPage * PAGE_SIZE &&
          index < (currentPage + 1) * PAGE_SIZE,
      )
      return res(ctx.status(200), ctx.json(filterdSuggestions))
    },
  ),
]
