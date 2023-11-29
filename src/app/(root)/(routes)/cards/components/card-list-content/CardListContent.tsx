'use client'

import { useEffect, useRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSearchParams } from 'next/navigation'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useCardsQuery } from '@/hooks/api/queries/useCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { CategoryObjs, PriceRangeObjs } from '@/types/card'
import CardFilterSection from '../card-filter-section'
import CardList from '../card-list/CardList'

const CardListContent = () => {
  const searchParams = useSearchParams()

  // TODO: 현재 API 명세에 status에 어떤 값을 줘야하는지에 대한 정의가 되어 있지 않기 때문에 임시로 상수 값을 전달함 => 추후에 실제 동작 값으로 고치기
  const {
    data,
    fetchNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
  } = useCardsQuery({
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

  // TODO: 아이템이 없을시 어떤 UI를 보여줄지 차후에 결정

  const isEmpty = data?.pages[0].data.cardList.length === 0

  return (
    <>
      <CardFilterSection />
      <ExceptionBoundary
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        isFetchingNextPage={isFetchingNextPage}
      >
        <ErrorBoundary fallback={<div>렌더링 중 문제가 발생했습니다.</div>}>
          <CardList />
        </ErrorBoundary>
      </ExceptionBoundary>
      <div ref={lastElementRef} />
    </>
  )
}
export default CardListContent
