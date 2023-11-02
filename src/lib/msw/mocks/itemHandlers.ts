import { rest } from 'msw'
import { Environment } from '@/config/environment'
import ApiEndPoint from '@/config/apiEndPoint'

const baseUrl = Environment.apiAddress()

const mockData = {
	"code": "C001",
	"message": "성공했습니다.",
	"data": {
		"cardResponseDto": {
				"cardId": 1,
				"cardTitle": "아이폰 16 팝니다",
				"category": "electro",
				"itemName": "아이폰 16",
				"pokeAvailable": true,
				"createdAt": '2023-10-23-20:08',
				"modifiedAt": '2023-10-24-20:08',
				"viewCount": 19,
				"priceRange": "10000-50000",
				"content": "이거 진짜 쩔어요",
				"status": "can_exchange",
				"images": [
					{
						"_id": 1,
						"image": "이미지 url"
					},
					{
						"_id": 2,
						"image": "이미지 url"
					}
				],
				"dibsCount": 1,
				"userId": 1,
				"userName": "왕쩌는 구범모",
				"tradeType": "직거래",
				"tradeArea": "서울시 성동구"
		}
	}
}
export const itemHandler = [
  rest.get(`${baseUrl}${ApiEndPoint.item('3')}`, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockData),
    )
  }),
]
