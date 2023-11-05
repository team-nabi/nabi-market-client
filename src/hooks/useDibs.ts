'use client'

import { useEffect, useState } from 'react'
import { deleteItemDibs, postItemDibs } from '@/services/item/item'
import { Dibs } from '@/types'

const currentUser = {
  imageUrl: 'http://asdf~',
  nickname: '병원에 간 미어캣',
  userId: 1,
}

const useDibs = (dibsData: Dibs[]) => {
  /**
   * FIX: 로그인 관련 PR merge 되면 실제 currentUser 데이터 가져오기
   * const {currentUser} = useAuth();
   * const token = Cookies.get(Environment.tokenName())
   */

  const [callDibs, setCallDibs] = useState(false)
  const [dibsCount, setDibsCount] = useState(0)
  const tmpToken = 'abcd'

  useEffect(() => {
    if (!currentUser) return
    setDibsCount(dibsData.length ?? 0)
    setCallDibs(dibsData.some((x) => x.userId === currentUser.userId))
  }, [dibsData])

  const handleDibs = async (itemId: number) => {
    if (callDibs) {
      setDibsCount(dibsCount - 1)
      setCallDibs(false)
      const res = await deleteItemDibs(itemId, tmpToken)
      console.log(res.message)
    } else {
      setDibsCount(dibsCount + 1)
      setCallDibs(true)
      const res = await postItemDibs(itemId, tmpToken)
      console.log(res.message)
    }
  }

  return {
    callDibs,
    dibsCount,
    handleDibs,
  }
}

export default useDibs
