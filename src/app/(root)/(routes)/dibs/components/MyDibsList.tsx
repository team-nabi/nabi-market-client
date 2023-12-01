import { Fragment, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import EmptyDataWrapper from '@/components/domain/empty-data-wrapper'
import NoData from '@/components/domain/no-data'
import AppPath from '@/config/appPath'
import { useMyDibsQuery } from '@/hooks/api/queries/useMyDibsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { GetMyDibsRes } from '@/services/card/card'
import { Card } from '@/types/card'

const MyDibsList = () => {
  const router = useRouter()
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useMyDibsQuery()

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  useEffect(() => {
    console.log(hasNextPage)
    if (isFetchingNextPage || !hasNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage, hasNextPage])

  const isEmpty = data?.pages[0].data.dibList.length === 0
  return (
    <EmptyDataWrapper
      isEmpty={isEmpty}
      fallback={
        <NoData
          title={'찜한 물건이 없습니다.'}
          buttonContent={'찜 하러가기'}
          onClickButton={() => router.push(AppPath.cards())}
        />
      }
    >
      {data?.pages.map(({ data: { dibList } }: GetMyDibsRes, pageIndex) => (
        <Fragment key={pageIndex}>
          {dibList.map((card: Card) => (
            <div key={card.cardId} className="mb-6">
              <TradeStatusCard card={card} />
            </div>
          ))}
        </Fragment>
      ))}
      <div ref={lastElementRef} />
    </EmptyDataWrapper>
  )
}
export default MyDibsList
