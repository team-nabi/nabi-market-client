'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import MaxWidthWrapper from '@/components/domain/MaxWidthWrapper'
import { useMyCardsQuery } from '@/hooks/api/queries/useMyCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Card, TradeStatus } from '@/types/card'
import MyCard from '../MyCard'
import TradeStatusTabs from '../TradeStatusTabs'

const MyCardList = () => {
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>('TRADE_AVAILABLE')

  const { data, fetchNextPage, isFetchingNextPage } = useMyCardsQuery({
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

  const hasData = data?.pages[0].length !== 0
  const pages = data?.pages

  return (
    <MaxWidthWrapper>
      <div className="flex items-center justify-center my-12 h-9">
        <TradeStatusTabs
          tradeStatus={tradeStatus}
          setTradeStatus={setTradeStatus}
        />
      </div>
      <div>
        {hasData
          ? pages?.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((card: Card) => (
                  <MyCard key={card.cardId} card={card} />
                ))}
              </Fragment>
            ))
          : '데이터가 없습니다.'}
        {/*TODO: 로딩 부분에 대한 처리 논의 후 구체적으로 적용 할 것 => <Suspense> 를 사용할지, isLoading으로 처리할지 논의 */}
        {isFetchingNextPage && '데이터 불러오는 중'}
      </div>

      <div ref={lastElementRef} />
    </MaxWidthWrapper>
  )
}
export default MyCardList
