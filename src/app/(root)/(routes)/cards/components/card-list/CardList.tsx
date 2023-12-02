import { Fragment, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import EmptyDataWrapper from '@/components/domain/empty-data-wrapper'
import NoData from '@/components/domain/no-data'
import AppPath from '@/config/appPath'
import { useCardsQuery } from '@/hooks/api/queries/useCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { GetCardListRes } from '@/services/card/card'
import { Card, CategoryObjs, PriceRangeObjs } from '@/types/card'

const CardList = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  // TODO: 현재 API 명세에 status에 어떤 값을 줘야하는지에 대한 정의가 되어 있지 않기 때문에 임시로 상수 값을 전달함 => 추후에 실제 동작 값으로 고치기
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useCardsQuery({
      category:
        (searchParams.get('category') as CategoryObjs['key']) || undefined,
      priceRange:
        (searchParams.get('priceRange') as PriceRangeObjs['key']) || undefined,
      cardTitle: searchParams.get('cardTitle' as string) || '',
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
        <NoData
          title={'해당 물건이 없습니다.'}
          buttonContent={'물건 등록하기'}
          onClickButton={() => router.push(AppPath.newCard())}
        />
      }
    >
      {data?.pages.map(({ data: { cardList } }: GetCardListRes, pageIndex) => (
        <Fragment key={pageIndex}>
          {cardList.map((card: Card) => (
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

export default CardList
