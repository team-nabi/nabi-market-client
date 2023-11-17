'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import { useMyCardsQuery } from '@/hooks/api/queries/useMyCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Card } from '@/types/card'
import { TradeStatus } from '@/types/card'
import MyCard from '../my-card'
import TradeStatusTabs from '../trade-status-tabs'

const MyCardList = () => {
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>('TRADE_AVAILABLE')

  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useMyCardsQuery({
      tradeStatus,
    })

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  useEffect(() => {
    if (isFetchingNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage])

  const isEmpty = data?.pages[0].length === 0

  return (
    <MaxWidthWrapper>
      <div className="h-9 flex justify-center items-center my-12">
        <TradeStatusTabs
          tradeStatus={tradeStatus}
          setTradeStatus={setTradeStatus}
        />
      </div>
      <div>
        <ExceptionBoundary
          isLoading={isLoading}
          isError={isError}
          isEmpty={isEmpty}
          isFetchingNextPage={isFetchingNextPage}
        >
          <>
            {data?.pages.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((card: Card) => (
                  <MyCard key={card.cardId} card={card} />
                ))}
              </Fragment>
            ))}
          </>
        </ExceptionBoundary>

        {/*TODO: 로딩 부분에 대한 처리 논의 후 구체적으로 적용 할 것 => <Suspense> 를 사용할지, isLoading으로 처리할지 논의 */}
      </div>

      <div ref={lastElementRef} />
    </MaxWidthWrapper>
  )
}
export default MyCardList
