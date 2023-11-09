import { CATEGORY, PRICE_RANGE, TRADE_TYPE } from '@/constants/item'

type Category = (typeof CATEGORY)[number]

type Status = 'TRADE_AVAILABLE' | 'RESERVED' | 'TRADE_COMPLETE'

type PriceRange = (typeof PRICE_RANGE)[number]

type TradeType = (typeof TRADE_TYPE)[number]

export type { Category, Status, PriceRange, TradeType }
