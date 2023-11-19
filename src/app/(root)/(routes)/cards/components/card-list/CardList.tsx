import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import { Card } from '@/types/card'

const CardList = ({
  data,
}: {
  data: InfiniteData<any, unknown> | undefined
}) => (
  <>
    {data?.pages.map(({ cardList }: any, pageIndex) => (
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
