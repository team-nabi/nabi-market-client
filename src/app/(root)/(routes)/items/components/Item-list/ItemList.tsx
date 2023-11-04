'use client'

import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import TradeStateCard from '@/components/domain/card/trade-state-card'
import Assets from '@/config/assets'
import { useItemsQuery } from '@/hooks/api/useItemsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { getItems } from '@/services/item/item'
import { Item } from '@/types'
import SearchInput from '../search-input'

type ItemFilterInputs = {
  category: string[]
  priceRange: string
  name: string
  status: string[]
}

const ItemList = () => {
  const PAGE_SIZE = 5
  const methods = useForm<ItemFilterInputs>()
  const { getValues } = methods

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  const { data, fetchNextPage, isFetchingNextPage } = useItemsQuery({
    category: getValues('category'),
    priceRange: getValues('priceRange'),
    name: getValues('name'),
    status: getValues('status'),
    size: PAGE_SIZE,
  })

  useEffect(() => {
    if (isFetchingNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage])

  return (
    <div>
      <div className="h-9 flex justify-between items-center mb-6">
        <FormProvider {...methods}>
          <SearchInput />
        </FormProvider>
        <div className="h-6 flex gap-2">
          <Image src={Assets.filterIcon} alt="필터 아이콘" />{' '}
          <div className="flex">필터</div>
        </div>
      </div>
      <div className="">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item: Item) => (
              <TradeStateCard key={item._id} item={item} className="mb-6" />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && '데이터 불러오는 중'}
      </div>
      <div ref={lastElementRef} />
    </div>
  )
}
export default ItemList
