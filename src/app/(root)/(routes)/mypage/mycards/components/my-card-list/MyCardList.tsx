import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import { Card } from '@/types/card'
import MyCard from '../my-card'

const MyCardList = ({
  data,
}: {
  data: InfiniteData<any, unknown> | undefined
}) => (
  <>
    {data?.pages.map(({ cardList }, pageIndex) => (
      <Fragment key={pageIndex}>
        {cardList.map((card: Card) => (
          <MyCard key={card.cardId} card={card} />
        ))}
      </Fragment>
    ))}
  </>
)

export default MyCardList
