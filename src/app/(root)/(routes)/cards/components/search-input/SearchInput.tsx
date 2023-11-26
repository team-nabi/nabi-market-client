import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import Input from '@/components/ui/input'
import Assets from '@/config/assets'
import useCreateQueryString from '@/hooks/useCreateQueryString'

const SearchInput = () => {
  const searchParams = useSearchParams()

  const router = useRouter()

  const [cardTitleValue, setCardTitleValue] = useState(
    (searchParams.get('cardTitle') as string) || '',
  )

  const { createQueryString } = useCreateQueryString()

  const handleChangeCardTitle = () => {
    router.push('/cards' + '?' + createQueryString('cardTitle', cardTitleValue))
  }

  return (
    <div className="relative w-4/5">
      <Input
        value={cardTitleValue}
        onChange={(e) => setCardTitleValue(e.currentTarget.value)}
        placeholder="찾으시는 물건을 입력해주세요."
      />
      <div
        className="absolute right-3 top-2.5 hover:cursor-pointer"
        onClick={handleChangeCardTitle}
      >
        <Image src={Assets.search} alt="검색 아이콘" />
      </div>
    </div>
  )
}

export default SearchInput
