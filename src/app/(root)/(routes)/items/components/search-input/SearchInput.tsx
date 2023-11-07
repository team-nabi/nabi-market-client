import React from 'react'
import { useFormContext } from 'react-hook-form'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Input from '@/components/ui/Input'
import Assets from '@/config/assets'
import { useItemsQuery } from '@/hooks/api/useItemsQuery'

const SearchInput = () => {
  const { register, getValues } = useFormContext()

  const searchParams = useSearchParams()

  const { fetchNextPage } = useItemsQuery({
    category: getValues('category'),
    priceRange: getValues('priceRange'),
    cardTitle: getValues('cardTitle'),
    status: ['TRADE_AVAILABLE'],
    size: 5,
  })

  return (
    <div className="relative w-4/5">
      <Input
        {...register('cardTitle', { value: searchParams.get('cardTitle') })}
        placeholder="찾으시는 물건을 입력해주세요."
      />
      <div
        className="absolute right-3 top-2.5 hover:cursor-pointer"
        onClick={() => {
          fetchNextPage()
        }}
      >
        <Image src={Assets.search} alt="검색 아이콘" />
      </div>
    </div>
  )
}

SearchInput.displayName = 'SearchInput'

export default SearchInput
