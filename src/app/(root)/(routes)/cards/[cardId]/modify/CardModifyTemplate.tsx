'use client'

import React from 'react'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  CardTitle,
  Category,
  ItemName,
  ItemImageUploader,
  PokeAvailable,
  PriceRange,
  TradeArea,
  TradeType,
  Content,
} from '../../new/components'
import { CardUploadFormValues } from '../../new/hooks/useCardUploadForm'
import { useCardModifyForm } from './hooks/useCardModifyForm'

export type CardModifyTemplateProps = {
  cardInfo: CardUploadFormValues
  cardId: string
}

const CardModifyTemplate = ({ cardInfo, cardId }: CardModifyTemplateProps) => {
  const { form, onSubmit, isSubmitting } = useCardModifyForm({
    cardInfo,
    cardId,
  })

  return (
    <main className="flex flex-col items-center w-full gap-3 px-2">
      <Form {...form}>
        <form onSubmit={onSubmit} className="flex flex-col w-full gap-3">
          <section className="w-full mr-auto">
            <ItemImageUploader defaultImages={cardInfo.images} />
          </section>
          <section className="flex flex-col w-full gap-3">
            <div className="flex flex-col gap-2 ">
              <CardTitle />
            </div>
            <div className="flex flex-col gap-2 ">
              <ItemName />
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <div className="flex flex-col flex-1 gap-2">
                <PriceRange form={form} />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <Category form={form} />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <TradeType form={form} />
            </div>
            <div className="flex flex-col gap-2 ">
              <TradeArea />
            </div>
            <div className="flex flex-col gap-2 ">
              <PokeAvailable form={form} />
            </div>
            <div className="flex flex-col gap-2 ">
              <Content form={form} />
            </div>
            <div className="mt-8 ml-auto w-fit">
              <Button
                type="submit"
                variant={'gradation'}
                disabled={isSubmitting}
              >
                수정하기
              </Button>
            </div>
          </section>
        </form>
      </Form>
    </main>
  )
}

export default CardModifyTemplate
