import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Input from '@/components/ui/Input'
import Assets from '@/config/assets'

const SearchInput = () => {
  const { register } = useFormContext()
  const queryClient = useQueryClient()
  const handleFetchData = () => {
    queryClient.invalidateQueries({
      queryKey: ['items'],
    })
  }
  return (
    <div className="relative w-4/5">
      <Input
        {...register('name')}
        placeholder="찾으시는 물건을 입력해주세요."
      />
      <div
        className="absolute right-3 top-2.5 hover:cursor-pointer"
        onClick={handleFetchData}
      >
        <Image src={Assets.search} alt="검색 아이콘" />
      </div>
    </div>
  )
}

SearchInput.displayName = 'SearchInput'

export default SearchInput
