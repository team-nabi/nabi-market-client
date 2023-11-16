import Assets from '@/config/assets'
import { CategoryToKr, PriceRangeToKr } from '@/types/card'

const PRICE_RANGE_TO_KR: PriceRangeToKr = {
  PRICE_RANGE_ONE: '~ 1만원',
  PRICE_RANGE_TWO: '1만원 ~ 5만원',
  PRICE_RANGE_THREE: '5만원 ~ 10만원',
  PRICE_RANGE_FOUR: '10만원대',
  PRICE_RANGE_FIVE: '20만원대',
  PRICE_RANGE_SIX: '30만원대',
  PRICE_RANGE_SEVEN: '40만원대',
  PRICE_RANGE_EIGHT: '50만원 이상',
} as const

const CATEGORY_TO_KR: CategoryToKr = {
  MALE_CLOTHES: '남성의류',
  FEMALE_CLOTHES: '여성의류',
  GOODS_ACCESSORY: '잡화ㆍ액세서리',
  SHOES: '신발',
  SPORTS: '스포츠',
  BOOKS: '도서',
  ELECTRONICS: '전자기기',
  FURNITURE_INTERIOR: '가구ㆍ인테리어',
  HOME_ELECTRONICS: '가전',
} as const

const PRICE_RANGE = [
  'PRICE_RANGE_ONE',
  'PRICE_RANGE_TWO',
  'PRICE_RANGE_THREE',
  'PRICE_RANGE_FOUR',
  'PRICE_RANGE_FIVE',
  'PRICE_RANGE_SIX',
  'PRICE_RANGE_SEVEN',
  'PRICE_RANGE_EIGHT',
] as const

const CATEGORY = [
  'MALE_CLOTHES',
  'FEMALE_CLOTHES',
  'GOODS_ACCESSORY',
  'SHOES',
  'SPORTS',
  'BOOKS',
  'ELECTRONICS',
  'FURNITURE_INTERIOR',
  'HOME_ELECTRONICS',
] as const

const CARD_TRADE_STATUS = [
  'TRADE_AVAILABLE',
  'RESERVED',
  'TRADE_COMPLETE',
] as const

const SUGGESTION_STATUS = [null, 'WAITING', 'REFUSED', 'ACCEPTED'] as const

const TRADE_TYPE = ['직거래', '택배거래'] as const

const SUGGESTION_TYPE = ['OFFER', 'POKE'] as const

const DIRECTION_TYPE = ['RECEIVE', 'SEND'] as const

const CATEGORY_BUTTON_LIST = [
  { name: '남성의류', image: Assets.maleClothesIcon },
  { name: '여성의류', image: Assets.femaleClothesIcon },
  { name: '잡화ㆍ액세서리', image: Assets.goodsAccessoryIcon },
  { name: '신발', image: Assets.shoesIcon },
  { name: '스포츠', image: Assets.sportsIcon },
  { name: '도서', image: Assets.booksIcon },
  { name: '전자기기', image: Assets.electronicsIcon },
  { name: '가구ㆍ인테리어', image: Assets.furnitureInteriorIcon },
  { name: '가전', image: Assets.homeElectronicsIcon },
  { name: '전체보기', image: Assets.allCardIcon },
] as const

export {
  PRICE_RANGE,
  CATEGORY,
  TRADE_TYPE,
  CARD_TRADE_STATUS,
  SUGGESTION_TYPE,
  SUGGESTION_STATUS,
  DIRECTION_TYPE,
  CATEGORY_BUTTON_LIST,
  CATEGORY_TO_KR,
  PRICE_RANGE_TO_KR,
}
