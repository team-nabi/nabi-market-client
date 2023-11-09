'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import Assets from '@/config/assets'
import useDibs from '@/hooks/useDibs'

type DibsProps = {
  isMyDib: boolean
  dibsCount: number
  itemId: number
}
const Dibs = ({ isMyDib, dibsCount: count, itemId }: DibsProps) => {
  const { dibsCount, handleDibs } = useDibs(isMyDib, count)
  const onClickDibs = () => {
    handleDibs(itemId)
  }
  return (
    <div className="flex flex-row gap-0 items-center ml-auto">
      <Button size="icon_sm" variant={null} onClick={onClickDibs}>
        <Image
          src={isMyDib ? Assets.activeHeartIcon : Assets.inactiveHeartIcon}
          alt="dibs"
        />
      </Button>
      <p className="ml-1">{dibsCount}</p>
    </div>
  )
}

export default Dibs
