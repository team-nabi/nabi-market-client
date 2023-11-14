import React from 'react'
import PageTitle from '@/components/domain/page-title'
import { DEFAULT_ITEM_THUMBNAIL_IMG } from '@/constants/image'
import { CardUploadFormValues } from '../../new/hooks/useCardUploadForm'
import CardModifyTemplate from './CardModifyTemplate'

type CardModifyPageProps = {
  params: {
    cardId: string
  }
}

const getInitialCardInfo = async (
  cardId: string,
): Promise<CardUploadFormValues> => {
  console.log(cardId)
  return {
    cardTitle: '테스트',
    itemName: '스마트폰',
    priceRange: '~ 1만원',
    category: '여성의류',
    tradeType: '직거래',
    tradeArea: '서울 강남',
    pokeAvailable: true,
    content: '테스트',
    images: [DEFAULT_ITEM_THUMBNAIL_IMG],
  }
}

const CardModifyPage = async ({ params }: CardModifyPageProps) => {
  const initialCardInfo = await getInitialCardInfo(params.cardId)
  return (
    <>
      <PageTitle title={'물건 수정'} />
      <CardModifyTemplate cardInfo={initialCardInfo} />
    </>
  )
}

export default CardModifyPage
