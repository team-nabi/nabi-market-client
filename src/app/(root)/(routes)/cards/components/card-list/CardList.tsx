import { Fragment } from 'react'
import { useSearchParams } from 'next/navigation'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import { useCardsQuery } from '@/hooks/api/queries/useCardsQuery'
import { GetCardListRes } from '@/services/card/card'
import { Card, CategoryObjs, PriceRangeObjs } from '@/types/card'

const CardList = () => {
  const searchParams = useSearchParams()

  const { data } = useCardsQuery({
    category:
      (searchParams.get('category') as CategoryObjs['key']) || undefined,
    priceRange:
      (searchParams.get('priceRange') as PriceRangeObjs['key']) || undefined,
    cardTitle: searchParams.get('cardTitle' as string) || '',
  })

  return (
    <>
      {data?.pages.map(({ data: { cardList } }: GetCardListRes, pageIndex) => (
        <Fragment key={pageIndex}>
          {cardList.map((card: Card) => (
            <div key={card.cardId} className="mb-6">
              <TradeStatusCard card={card} />
            </div>
          ))}
        </Fragment>
      ))}
    </>
  )
}

export default CardList
