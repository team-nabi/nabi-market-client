import Assets from '@/config/assets'

//FIXME - 삭제 예정
const PRICE_RANGE = [
  '~ 1만원',
  '1만원 ~ 5만원',
  '5만원 ~ 10만원',
  '10만원대',
  '20만원대',
  '30만원대',
  '40만원대',
  '50만원 이상',
] as const

//FIXME - 삭제 예정
const CATEGORY = [
  '남성의류',
  '여성의류',
  '잡화ㆍ액세서리',
  '신발',
  '스포츠',
  '도서',
  '전자기기',
  '가구ㆍ인테리어',
  '가전',
] as const

//FIXME - 삭제 예정
const CARD_TRADE_STATUS = [
  'TRADE_AVAILABLE',
  'RESERVED',
  'TRADE_COMPLETE',
] as const

//FIXME - 삭제 예정
const TRADE_TYPE = ['직거래', '택배거래'] as const

const PRICE_RANGE_OBJS = [
  { key: 'PRICE_RANGE_ONE', value: '~ 1만원' },
  { key: 'PRICE_RANGE_TWO', value: '1만원 ~ 5만원' },
  { key: 'PRICE_RANGE_THREE', value: '5만원 ~ 10만원' },
  { key: 'PRICE_RANGE_FOUR', value: '10만원대' },
  { key: 'PRICE_RANGE_FIVE', value: '20만원대' },
  { key: 'PRICE_RANGE_SIX', value: '30만원대' },
  { key: 'PRICE_RANGE_SEVEN', value: '40만원대' },
  { key: 'PRICE_RANGE_EIGHT', value: '50만원 이상' },
] as const

const CATEGORY_OBJS = [
  { key: 'MALE_CLOTHES', value: '남성의류' },
  { key: 'FEMALE_CLOTHES', value: '여성의류' },
  { key: 'GOODS_ACCESSORY', value: '잡화ㆍ액세서리' },
  { key: 'SHOES', value: '신발' },
  { key: 'SPORTS', value: '스포츠' },
  { key: 'BOOKS', value: '도서' },
  { key: 'ELECTRONICS', value: '전자기기' },
  { key: 'FURNITURE_INTERIOR', value: '가구ㆍ인테리어' },
  { key: 'HOME_ELECTRONICS', value: '가전' },
] as const

const TRADE_STATUS_OBJS = [
  { key: 'TRADE_AVAILABLE', value: '거래가능' },
  { key: 'RESERVED', value: '예약중' },
  { key: 'TRADE_COMPLETE', value: '거래성사' },
]

const SUGGESTION_STATUS = [null, 'WAITING', 'REFUSED', 'ACCEPTED'] as const

const TRADE_TYPE_OBJS = [
  { key: 'DIRECT_DEALING', value: '직거래' },
  { key: 'SHIPPING', value: '택배거래' },
] as const

const SUGGESTION_TYPE = ['OFFER', 'POKE'] as const

const DIRECTION_TYPE = ['RECEIVE', 'SEND'] as const

const CATEGORY_BUTTON_LIST = [
  { key: 'MALE_CLOTHES', value: '남성의류', image: Assets.maleClothesIcon },
  {
    key: 'GOODS_ACCESSORY',
    value: '잡화ㆍ액세서리',
    image: Assets.goodsAccessoryIcon,
  },
  { key: 'SHOES', value: '신발', image: Assets.shoesIcon },
  { key: 'SPORTS', value: '스포츠', image: Assets.sportsIcon },
  { key: 'BOOKS', value: '도서', image: Assets.booksIcon },
  { key: 'FEMALE_CLOTHES', value: '여성의류', image: Assets.femaleClothesIcon },
  { key: 'ELECTRONICS', value: '전자기기', image: Assets.electronicsIcon },
  {
    key: 'FURNITURE_INTERIOR',
    value: '가구ㆍ인테리어',
    image: Assets.furnitureInteriorIcon,
  },
  { key: 'HOME_ELECTRONICS', value: '가전', image: Assets.homeElectronicsIcon },
  { key: 'ALL_CARD', value: '전체보기', image: Assets.allCardIcon },
] as const

const COMPLETE_REQUEST_TYPE_OBJS = [
  { key: 'WAITING', value: '거래성사 대기중' },
  { key: 'ACCEPTED', value: '거래성사 확정' },
  { key: 'REFUSED', value: '거래성사 거절됨' },
  { key: 'DELETED', value: '거래상대의 물건이 삭제되었습니다' },
]

export {
  PRICE_RANGE,
  CATEGORY,
  TRADE_TYPE,
  CARD_TRADE_STATUS,
  SUGGESTION_TYPE,
  SUGGESTION_STATUS,
  DIRECTION_TYPE,
  CATEGORY_BUTTON_LIST,
  PRICE_RANGE_OBJS,
  CATEGORY_OBJS,
  TRADE_TYPE_OBJS,
  TRADE_STATUS_OBJS,
  COMPLETE_REQUEST_TYPE_OBJS,
}
