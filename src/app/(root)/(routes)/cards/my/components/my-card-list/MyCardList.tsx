import { Fragment, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import EmptyDataWrapper from '@/components/domain/empty-data-wrapper/EmptyDataWrapper'
import NoData from '@/components/domain/no-data'
import AppPath from '@/config/appPath'
import { useMyCardsQuery } from '@/hooks/api/queries/useMyCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { GetMyCardListRes } from '@/services/card/card'
import { Card } from '@/types/card'
import MyCard from '../my-card'

const MyCardList = ({ tradeStatus }: { tradeStatus: any }) => {
  const router = useRouter()
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useMyCardsQuery({
      tradeStatus,
    })

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  useEffect(() => {
    if (isFetchingNextPage || !hasNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage, hasNextPage])
  const isEmpty = data?.pages[0].data.cardList.length === 0
  return (
    <EmptyDataWrapper
      isEmpty={isEmpty}
      fallback={
        tradeStatus === 'TRADE_AVAILABLE' && (
          <NoData
            title={'내 물건이 없습니다.'}
            buttonContent={'물건 등록하기'}
            onClickButton={() => router.push(AppPath.newCard())}
          />
        )
      }
    >
      {data?.pages.map(
        ({ data: { cardList } }: GetMyCardListRes, pageIndex) => (
          <Fragment key={pageIndex}>
            {cardList.map((myCard: Card) => (
              <MyCard key={myCard.cardId} card={myCard} />
            ))}
          </Fragment>
        ),
      )}
      <div ref={lastElementRef} />
    </EmptyDataWrapper>
  )
}

export default MyCardList
