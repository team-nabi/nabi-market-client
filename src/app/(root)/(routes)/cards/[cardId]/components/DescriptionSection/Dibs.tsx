'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import Assets from '@/config/assets'
import useDibs from '@/hooks/useDibs'

type DibsProps = {
  isMyDib: boolean
  dibsCount: number
  cardId: number
}
const Dibs = ({ isMyDib, dibsCount: count, cardId }: DibsProps) => {
  const { dibsCount, isDibsActive, handleDibs } = useDibs(isMyDib, count)
  const onClickDibs = () => {
    handleDibs(cardId)
  }
  return (
    <div className="flex flex-row items-center gap-0 ml-auto">
      <Button size="icon_sm" variant={null} onClick={onClickDibs}>
        <Image
          src={isDibsActive ? Assets.activeHeartIcon : Assets.inactiveHeartIcon}
          alt="dibs"
        />
      </Button>
      <p className="ml-1">{dibsCount}</p>
    </div>
  )
}

export default Dibs
