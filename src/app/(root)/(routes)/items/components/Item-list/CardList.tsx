'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import { useCardsQuery } from '@/hooks/api/queries/useCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Category, PriceRange, Card } from '@/types/card'
import FilterFormDialog from '../filter-form-dialog'
import SearchInput from '../search-input'

const CardList = () => {
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
  const { data, fetchNextPage, isFetchingNextPage } = useCardsQuery({
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

  const hasData = data?.pages[0].length !== 0
  const pages = data?.pages

  // TODO: 아이템이 없을시 어떤 UI를 보여줄지 차후에 결정
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
        {hasData
          ? pages?.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((card: Card) => (
                  <TradeStatusCard
                    key={card.cardId}
                    card={card}
                    className="mb-6"
                  />
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
export default CardList
