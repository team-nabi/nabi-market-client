'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import { useCardsQuery } from '@/hooks/api/queries/useCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Card } from '@/types/card'
import { Category, PriceRange } from '@/types/card'
import FilterFormDialog from '../filter-form-dialog'
import SearchInput from '../search-input'

const CardListContent = () => {
  const searchParams = useSearchParams()
  const [cardTitle, setCardTitle] = useState(
    searchParams.get('cardTitle' as string) || '',
  )
  const [category, setCatgegory] = useState<Category>(
    (searchParams.get('category') as Category) || '전체보기',
  )
  const [priceRange, setPriceRange] = useState<PriceRange>(
    (searchParams.get('priceRange') as PriceRange) || '전체보기',
  )

  // TODO: 현재 API 명세에 status에 어떤 값을 줘야하는지에 대한 정의가 되어 있지 않기 때문에 임시로 상수 값을 전달함 => 추후에 실제 동작 값으로 고치기
  const { data, fetchNextPage, isError, isFetchingNextPage, isLoading } =
    useCardsQuery({
      category: category,
      priceRange: priceRange,
      cardTitle: cardTitle,
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

  // TODO: 아이템이 없을시 어떤 UI를 보여줄지 차후에 결정

  const isEmpty = data?.pages[0].length === 0

  return (
    <MaxWidthWrapper>
      <div className="h-9 flex justify-between items-center mb-6">
        <SearchInput setCardTitle={setCardTitle} />
        <FilterFormDialog
          category={category}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          setCategory={setCatgegory}
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
        </ExceptionBoundary>
      </div>

      <div ref={lastElementRef} />
    </MaxWidthWrapper>
  )
}
export default CardListContent
