import React, { ChangeEventHandler } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Input from '@/components/ui/Input'
import Assets from '@/config/assets'
import { GetItems } from '@/services/item/item'

const SearchInput = ({
  params,
  updateParams,
}: {
  params: GetItems
  updateParams: (nextState: GetItems) => void
}) => {
  const queryClient = useQueryClient()
  const handleFetchData = () => {
    queryClient.invalidateQueries({ queryKey: ['items', { ...params }] })
  }

  const handleChangeParams: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    updateParams({ ...params, [name]: value })
  }

  return (
    <div className="relative w-4/5">
      <Input
        onChange={handleChangeParams}
        value={params.cursorId}
        name="cursorId"
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
