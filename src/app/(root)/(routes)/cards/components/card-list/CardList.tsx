import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import { GetCardListRes } from '@/services/card/card'
import { Card } from '@/types/card'

const CardList = ({
  data,
}: {
  data: InfiniteData<GetCardListRes, unknown> | undefined
}) => (
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

export default CardList
