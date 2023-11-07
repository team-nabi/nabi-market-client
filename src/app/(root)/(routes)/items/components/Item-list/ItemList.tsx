'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import TradeStateCard from '@/components/domain/card/trade-state-card'
import Assets from '@/config/assets'
import { GetItems, getItems } from '@/services/item/item'
import { Item } from '@/types'
import SearchInput from '../search-input'

const ItemList = () => {
  const [params, setParams] = useState<GetItems>({
    category: [],
    priceRange: '',
    name: '',
    cursorId: 0,
  })

  const fetchItems = async () => {
    const response = await getItems(params)
    const data = await response.json()

    return data
  }

  const { data } = useQuery({
    queryKey: ['items', { ...params }],
    queryFn: () => fetchItems(),
  })

  return (
    <div>
      <div className="h-9 flex justify-between items-center mb-6">
        <SearchInput
          params={params}
          updateParams={(nextState) => setParams(nextState)}
        />
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
