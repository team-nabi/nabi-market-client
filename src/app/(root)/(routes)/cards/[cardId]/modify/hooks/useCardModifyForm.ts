import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/useToast'
import {
  CardUploadFormValues,
  cardUploadFormSchema,
} from '../../../new/hooks/useCardUploadForm'

export const useCardModifyForm = (cardInfo: CardUploadFormValues) => {
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
    console.log(data)
    try {
      //   await postCard(data)
      toast({
        title: 'Success',
        description: '게시글을 업로드했습니다.',
      })
      router.back()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: '게시글을 업로드하는데 실패했습니다.',
      })
      console.log(error)
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
