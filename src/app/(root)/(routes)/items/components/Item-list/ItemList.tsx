'use client'

import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import TradeStateCard from '@/components/domain/card/trade-state-card'
import Assets from '@/config/assets'
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
  const [cursorId, setCursorId] = useState(0)
  const PAGE_SIZE = 5
  const methods = useForm<ItemFilterInputs>()
  const { getValues } = methods
  const fetchItems = async () => {
    console.log(cursorId)
    const response = await getItems({
      category: getValues('category'),
      priceRange: getValues('priceRange'),
      name: getValues('name'),
      status: ['EXCHANGEABLE', 'RESERVED'],
      cursorId,
      size: PAGE_SIZE,
    })
    const data = await response.json()

    return data
  }
  const { data } = useQuery({
    queryKey: ['items'],
    queryFn: () => fetchItems(),
  })

  return (
    <div>
      <div className="h-9 flex justify-between items-center mb-6">
        <FormProvider {...methods}>
          <SearchInput />
        </FormProvider>
        <div onClick={() => setCursorId(2)}>눌르면 cursorId증가</div>
        <div className="h-6 flex gap-2">
          <Image src={Assets.filterIcon} alt="필터 아이콘" />{' '}
          <div className="flex">필터</div>
        </div>
      </div>
      <div>
        {data?.map((item: Item) => (
          <TradeStateCard key={item._id} item={item} className="mb-6" />
        ))}
      </div>
    </div>
  )
}
export default ItemList
