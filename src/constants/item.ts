const PRICE_RANGE = [
  '~ 1만원',
  '1만원 ~ 5만원',
  '5만원 ~ 10만원',
  '10만원대',
  '20만원대',
  '30만원대',
  '40만원대',
  '50만원 이상',
  '전체보기',
] as const

const CATEGORY = [
  '전체보기',
  '남성의류',
  '여성의류',
  '잡화ㆍ액세서리',
  '신발',
  '스포츠',
  '도서',
  '전자기기',
  '가구ㆍ인테리어',
  '가전',
  '전자기기ㆍ디지털',
  '기타',
] as const

const TRADE_TYPE = ['직거래', '택배거래'] as const

export { PRICE_RANGE, CATEGORY, TRADE_TYPE }
