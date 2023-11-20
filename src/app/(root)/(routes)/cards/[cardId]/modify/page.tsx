import React from 'react'
import PageTitle from '@/components/domain/page-title'
import ApiEndPoint from '@/config/apiEndPoint'
import ErrorMessages from '@/config/errorMessages'
import { ForbiddenError } from '@/lib/errors'
import apiClient from '@/services/apiClient'
import { getCardInfo } from '@/services/card/card'
import { getServerCookie } from '@/utils/getServerCookie'
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
  const token = getServerCookie()
  const res = await getCardInfo(parseInt(cardId))
  const imagesByForm = res.data.cardInfo.images.map((image) => {
    return image.url
  })
  Object.assign(res.data.cardInfo, { images: imagesByForm })

  const resUser = await apiClient.get(
    ApiEndPoint.getValidateUser(),
    {},
    {
      Authorization: `${token}`,
    },
  )

  if (resUser.data.userInfo.userId !== res.data.userInfo.userId) {
    throw new ForbiddenError(new Response(ErrorMessages.Forbidden))
  }

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
