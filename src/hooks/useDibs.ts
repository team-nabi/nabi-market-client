'use client'

import { useState } from 'react'
import { deleteCardDibs, postCardDibs } from '@/services/card/card'
import { toast } from './useToast'

const useDibs = (isMyDib: boolean, count: number) => {
  const [isDibsActive, setIsDibsActive] = useState(isMyDib)
  const [dibsCount, setDibsCount] = useState(count)

  const handleDibs = async (cardId: number) => {
    if (isDibsActive) {
      setDibsCount(dibsCount - 1)
      setIsDibsActive(false)
      try {
        const res = await deleteCardDibs(cardId)
        console.log(res)
      } catch (error) {
        setDibsCount(dibsCount + 1)
        setIsDibsActive(true)
        toast({
          variant: 'destructive',
          title: 'Error',
          description: '찜 취소를 실패했습니다.',
        })
      }
    } else {
      setDibsCount(dibsCount + 1)
      setIsDibsActive(true)
      try {
        const res = await postCardDibs(cardId)
        console.log(res)
      } catch (error) {
        setDibsCount(dibsCount - 1)
        setIsDibsActive(false)
        toast({
          variant: 'destructive',
          title: 'Error',
          description: '찜을 실패했습니다.',
        })
      }
    }
  }

  return {
    isDibsActive,
    dibsCount,
    handleDibs,
  }
}

export default useDibs
