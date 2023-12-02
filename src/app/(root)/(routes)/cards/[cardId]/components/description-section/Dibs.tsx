'use client'

import Image from 'next/image'
import Button from '@/components/ui/button'
import Assets from '@/config/assets'
import useDibs from '@/hooks/useDibs'
import { toast } from '@/hooks/useToast'

type DibsProps = {
  isMyDib: boolean
  dibCount: number
  cardId: number
  isMyCard: boolean
}
const Dibs = ({ isMyDib, dibCount: count, cardId, isMyCard }: DibsProps) => {
  const { dibsCount, isDibsActive, handleDibs } = useDibs(isMyDib, count)
  const onClickDibs = () => {
    if (isMyCard) {
      toast({
        title: '내 물건에는 찜이 불가능합니다.',
        variant: 'destructive',
        duration: 2000,
      })
    } else {
      handleDibs(cardId)
    }
  }
  return (
    <div className="flex flex-row items-center gap-0 ml-auto">
      <Button size="icon_sm" variant={null} onClick={onClickDibs}>
        <Image
          src={isDibsActive ? Assets.activeHeartIcon : Assets.inactiveHeartIcon}
          alt="dibs"
          loading="eager"
          quality={50}
          sizes="24px"
        />
      </Button>
      <p className="ml-1">{dibsCount}</p>
    </div>
  )
}

export default Dibs
