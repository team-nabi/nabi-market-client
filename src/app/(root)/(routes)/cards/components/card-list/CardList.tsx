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
    {data?.pages.map((currentPage: any, pageIndex) => (
      <Fragment key={pageIndex}>
        {currentPage.map((card: Card) => (
          <div key={card.cardId} className="mb-6">
            <TradeStatusCard card={card} />
          </div>
        ))}
      </Fragment>
    ))}
  </>
)

export default CardList
