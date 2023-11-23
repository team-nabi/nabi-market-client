import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import { useToast } from '@/hooks/useToast'
import { putCard } from '@/services/card/card'
import {
  CardUploadFormValues,
  cardUploadFormSchema,
} from '../../../new/hooks/useCardUploadForm'
import { CardModifyTemplateProps } from '../CardModifyTemplate'

export const useCardModifyForm = ({
  cardInfo,
  cardId,
}: CardModifyTemplateProps) => {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<CardUploadFormValues>({
    resolver: zodResolver(cardUploadFormSchema),
    defaultValues: {
      cardTitle: cardInfo.cardTitle,
      itemName: cardInfo.itemName,
      priceRange: cardInfo.priceRange,
      category: cardInfo.category,
      tradeType: cardInfo.tradeType,
      tradeArea: cardInfo.tradeArea,
      pokeAvailable: cardInfo.pokeAvailable,
      content: cardInfo.content,
      images: cardInfo.images,
      thumbnail: cardInfo.thumbnail,
    },
    mode: 'onSubmit',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: CardUploadFormValues) => {
    if (isSubmitting) return
    setIsSubmitting(() => true)

    try {
      await putCard({
        cardId: cardId,
        cardReq: data,
      })
      router.push(AppPath.cardDetail(cardId))
      toast({
        title: 'Success',
        description: '게시글을 성공적으로 수정했습니다.',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: '게시글을 수정하는데 실패했습니다.',
      })
    } finally {
      setIsSubmitting(() => false)
    }
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting,
    setValue: form.setValue,
  }
}
