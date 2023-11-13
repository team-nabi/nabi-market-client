import z from 'zod'
import { CATEGORY, PRICE_RANGE, TRADE_TYPE } from '@/constants/card'
import { MAX_IMAGE_NUMBER } from '@/constants/image'

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
  priceRange: () => z.enum(PRICE_RANGE),
  category: () => z.enum(CATEGORY),
  tradeType: () => z.enum(TRADE_TYPE),
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
    z
      .instanceof(FileList, {
        message: `최소 1개의 이미지를 업로드해주세요.`,
      })
      .refine(
        (files) => {
          return Array.from(files).every((file) => file instanceof File)
        },
        {
          message: '잘못된 파일 형식입니다.',
        },
      )
      .refine(
        (files) => {
          return Array.from(files).length <= MAX_IMAGE_NUMBER
        },
        {
          message: `최대 ${MAX_IMAGE_NUMBER}개의 이미지를 업로드할 수 있습니다.`,
        },
      )
      .refine(
        (files) => {
          return Array.from(files).length > 0
        },
        {
          message: `최소 1개의 이미지를 업로드해주세요.`,
        },
      ),

  thumbnailImage: () => z.any(),
}
