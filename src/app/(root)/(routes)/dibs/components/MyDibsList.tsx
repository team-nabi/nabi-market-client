import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import { GetMyDibsRes } from '@/services/card/card'
import { Card } from '@/types/card'

const MyDibsList = ({
  data,
}: {
  data: InfiniteData<GetMyDibsRes, unknown> | undefined
}) => {
  return (
    <>
      {data?.pages.map(({ data: { dibList } }: GetMyDibsRes, pageIndex) => (
        <Fragment key={pageIndex}>
          {dibList.map((card: Card) => (
            <div key={card.cardId} className="mb-6">
              <TradeStatusCard card={card} />
            </div>
          ))}
        </Fragment>
      ))}
    </>
  )
}
export default MyDibsList
