'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import Assets from '@/config/assets'
import useDibs from '@/hooks/useDibs'
import { Dibs } from '@/types'

type DibsProps = {
  dibsData: Dibs[]
  itemId: number
}
const Dibs = ({ dibsData, itemId }: DibsProps) => {
  const {callDibs, dibsCount, handleDibs} = useDibs(dibsData)
  const onClickDibs = () => {
    handleDibs(itemId)
  }
  return (
    <div className="flex flex-row gap-0 items-center ml-auto">
      <Button size="icon_sm" variant={null} onClick={onClickDibs}>
        <Image src={callDibs ? Assets.activeHeartIcon:Assets.inactiveHeartIcon} alt="dibs" />
      </Button>
      <p className="ml-1">{dibsCount}</p>
    </div>
  )
}

export default Dibs
