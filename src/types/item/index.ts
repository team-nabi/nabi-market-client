import { CATEGORY, PRICE_RANGE, TRADE_TYPE } from '@/constants/item'

type Category = (typeof CATEGORY)[number]['value']

type Status = 'TRADE_AVAILABLE' | 'RESERVED' | 'TRADE_COMPLETE'

type PriceRange = (typeof PRICE_RANGE)[number]['value']

type TradeType = (typeof TRADE_TYPE)[number]['value']

export type { Category, Status, PriceRange, TradeType }
