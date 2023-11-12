'use client'

import { useState } from 'react'
import { deleteItemDibs, postItemDibs } from '@/services/item/item'

const useDibs = (isMyDib: boolean, count: number) => {
  /**
   * FIX: 로그인 관련 PR merge 되면 실제 currentUser 데이터 가져오기
   * const {currentUser} = useAuth();
   * const token = Cookies.get(Environment.tokenName())
   */

  const [isDibsActive, setIsDibsActive] = useState(isMyDib)
  const [dibsCount, setDibsCount] = useState(count)

  /**
   * TODO: 실제 api 연결 + 실패처리
   * 만약 찜 기능 실패로 답이 온다면?
   * useMutation에서 낙관적 업데이트 먼저 하고 실패했을 경우 onError 핸들러로 이전 값 복원
   */
  const handleDibs = async (itemId: number) => {
    if (isDibsActive) {
      setDibsCount(dibsCount - 1)
      setIsDibsActive(false)
      const res = await deleteItemDibs(itemId)
      console.log(res.message)
    } else {
      setDibsCount(dibsCount + 1)
      setIsDibsActive(true)
      const res = await postItemDibs(itemId)
      console.log(res.message)
    }
  }

  return {
    isDibsActive,
    dibsCount,
    handleDibs,
  }
}

export default useDibs
