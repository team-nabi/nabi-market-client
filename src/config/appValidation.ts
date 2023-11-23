import z from 'zod'
import {
  CATEGORY_OBJS,
  PRICE_RANGE_OBJS,
  TRADE_TYPE_OBJS,
} from '@/constants/card'

export const AppValidation = {
  title: () =>
    z
      .string()
      .min(1, { message: '제목을 입력해주세요.' })
      .max(50, { message: '제목은 50자 이내로 입력해주세요.' }),
  itemName: () =>
    z
      .string()
      .min(1, { message: '상품명을 입력해주세요.' })
      .max(50, { message: '상품명은 50자 이내로 입력해주세요.' }),
  priceRange: () =>
    z.enum(PRICE_RANGE_OBJS.map((range) => range.key) as [string, ...string[]]),
  category: () =>
    z.enum(
      CATEGORY_OBJS.map((category) => category.key) as [string, ...string[]],
    ),
  tradeType: () =>
    z.enum(TRADE_TYPE_OBJS.map((type) => type.key) as [string, ...string[]]),
  tradeArea: () =>
    z
      .string()
      .max(50, { message: '지역은 50자 이내로 입력해주세요.' })
      .nullish(),
  pokeAvailable: () => z.boolean(),
  content: () =>
    z
      .string()
      .min(5, { message: '5자 이상 입력해주세요.' })
      .max(500, { message: '내용은 500자 이내로 입력해주세요.' }),
  images: () =>
    z.array(z.string()).min(1, { message: '이미지를 업로드해주세요.' }),
  thumbnail: () => z.any(),
}
