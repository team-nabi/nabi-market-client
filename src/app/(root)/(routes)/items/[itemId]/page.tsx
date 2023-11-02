'use client'

import { useEffect } from 'react'
import { getItemInfo } from '@/services/item/item'
import ProfileSection from './components/ProfileSection'
import DescriptionSection from './components/description-section/DescriptionSection'
import TradeSection from './components/trade-section'

type ItemPageProps = {
  params: {
    itemId: string
  }
}

const ItemPage = ({ params }: ItemPageProps) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getItemInfo(params.itemId)
        const data = await res.json()
        console.log(data)
      } catch (error) {
        console.error('데이터 불러오기 실패')
      }
    }
    fetchData()
  }, [params.itemId])

  //console.log(data)

  return (
    <main className="flex-col min-h-screen bg-background-color">
      <div>이미지 슬라이더 영역</div>
      <div className="p-4">
        <ProfileSection profileImg={null} userName={'임시이름'} />
        <DescriptionSection />
        <TradeSection />
      </div>
    </main>
  )
}

export default ItemPage
