'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import TradeStateCard from '@/components/domain/card/trade-state-card'
import Assets from '@/config/assets'
import { useItemsQuery } from '@/hooks/api/useItemsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Item } from '@/types'
import FilterFormDialog from '../filter-form-dialog'
import SearchInput from '../search-input'

type ItemFilterInputs = {
  category: string
  priceRange: string
  cardTitle: string
}

const ItemList = () => {
  const searchParams = useSearchParams()
  const methods = useForm<ItemFilterInputs>({
    defaultValues: {
      category: searchParams.get('category') || '', // 초기값 설정
      priceRange: searchParams.get('priceRange') || '',
    },
  })
  const { getValues } = methods

  // TODO: 현재 API 명세에 status에 어떤 값을 줘야하는지에 대한 정의가 되어 있지 않기 때문에 임시로 상수 값을 전달함 => 추후에 실제 동작 값으로 고치기
  // TODO: size에 숫자 5를 넣었지만 상수 처리하여 바꿔줄 것
  const { data, fetchNextPage, isFetchingNextPage } = useItemsQuery({
    category: getValues('category'),
    priceRange: getValues('priceRange'),
    cardTitle: getValues('cardTitle'),
    status: ['TRADE_AVAILABLE'],
    size: 5,
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
  return (
    <div>
      <div className="h-9 flex justify-between items-center mb-6">
        <FormProvider {...methods}>
          <SearchInput />

          <FilterFormDialog />
        </FormProvider>
      </div>
      <div>
        {data?.pages[0].length !== 0
          ? data?.pages.map((group, i) => (
              <Fragment key={i}>
                {group.map((item: Item) => (
                  <TradeStateCard key={item._id} item={item} className="mb-6" />
                ))}
              </Fragment>
            ))
          : '데이터가 없습니다.'}
        {/*TODO: 로딩 부분에 대한 처리 논의 후 구체적으로 적용 할 것 => <Suspense> 를 사용할지, isLoading으로 처리할지 논의 */}
        {isFetchingNextPage && '데이터 불러오는 중'}
      </div>
      <div ref={lastElementRef} />
    </div>
  )
}
export default ItemList
