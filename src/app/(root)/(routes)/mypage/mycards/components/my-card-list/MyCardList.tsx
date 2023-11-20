import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import { GetMyCardListRes } from '@/services/card/card'
import { Card } from '@/types/card'
import MyCard from '../my-card'

const MyCardList = ({
  data,
}: {
  data: InfiniteData<GetMyCardListRes, unknown> | undefined
}) => (
  <>
    {data?.pages.map(({ data: { cardList } }: GetMyCardListRes, pageIndex) => (
      <Fragment key={pageIndex}>
        {cardList.map((myCard: Card) => (
          <MyCard key={myCard.cardId} card={myCard} />
        ))}
      </Fragment>
    ))}
  </>
)

export default MyCardList
