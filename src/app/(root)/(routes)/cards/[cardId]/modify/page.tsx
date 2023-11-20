import React from 'react'
import PageTitle from '@/components/domain/page-title'
import { getCardInfo } from '@/services/card/card'
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
  const res = await getCardInfo(parseInt(cardId))
  const imagesByForm = res.data.cardInfo.images.map((image) => {
    return image.url
  })
  Object.assign(res.data.cardInfo, { images: imagesByForm })

  return res.data.cardInfo as unknown as CardUploadFormValues
}

const CardModifyPage = async ({ params }: CardModifyPageProps) => {
  const initialCardInfo = await getInitialCardInfo(params.cardId)
  return (
    <>
      <PageTitle title={'물건 수정'} />
      <CardModifyTemplate cardInfo={initialCardInfo} cardId={params.cardId} />
    </>
  )
}

export default CardModifyPage
