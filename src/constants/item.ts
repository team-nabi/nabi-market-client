const PRICE_RANGE = [
  {
    key: 1,
    value: '~ 1만원',
  },
  {
    key: 2,
    value: '1만원 ~ 5만원',
  },
  {
    key: 3,
    value: '5만원 ~ 10만원',
  },
  {
    key: 4,
    value: '10만원대',
  },
  {
    key: 5,
    value: '20만원대',
  },
  {
    key: 6,
    value: '30만원대',
  },
  {
    key: 7,
    value: '40만원대',
  },
  {
    key: 8,
    value: '50만원 이상',
  },
] as const

const CATEGORY = [
  {
    key: 1,
    value: '전체보기',
  },
  {
    key: 2,
    value: '남성의류',
  },
  {
    key: 3,
    value: '여성의류',
  },
  {
    key: 4,
    value: '잡화ㆍ액세서리',
  },
  {
    key: 5,
    value: '신발',
  },
  {
    key: 6,
    value: '스포츠',
  },
  {
    key: 7,
    value: '도서',
  },
  {
    key: 8,
    value: '전자기기',
  },
  {
    key: 9,
    value: '가구ㆍ인테리어',
  },
  {
    key: 10,
    value: '가전',
  },
] as const

const TRADE_TYPE = [
  {
    key: 1,
    value: '직거래',
  },
  {
    key: 2,
    value: '택배거래',
  },
] as const

export { PRICE_RANGE, CATEGORY, TRADE_TYPE }
