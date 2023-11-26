import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react'
import { useFormContext } from 'react-hook-form'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Input from '@/components/ui/input'
import Assets from '@/config/assets'
import { useCardsQuery } from '@/hooks/api/queries/useCardsQuery'
import { Category, PriceRange } from '@/types/card'

type SearchInputProps = {
  setCardTitle: (cardTitle: string) => void
}

const SearchInput = ({ setCardTitle }: SearchInputProps) => {
  const searchParams = useSearchParams()

  const [cardTitleValue, setCardTitleValue] = useState(
    (searchParams.get('cardTitle') as string) || '',
  )

  const handleChangeCardTitle = () => {
    setCardTitle(cardTitleValue)
  }

  const handleEnterDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleChangeCardTitle()
    }
  }

  return (
    <div className="relative w-4/5">
      <Input
        onKeyDown={handleEnterDown}
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
