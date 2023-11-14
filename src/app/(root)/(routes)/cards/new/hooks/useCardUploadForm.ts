import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { AppValidation } from '@/config/appValidation'
import { useToast } from '@/hooks/useToast'
import { postCard } from '@/services/card/card'

export const cardUploadFormSchema = z.object({
  cardTitle: AppValidation.title(),
  itemName: AppValidation.itemName(),
  priceRange: AppValidation.priceRange(),
  category: AppValidation.category(),
  tradeType: AppValidation.tradeType(),
  tradeArea: AppValidation.tradeArea(),
  pokeAvailable: AppValidation.pokeAvailable(),
  content: AppValidation.content(),
  images: AppValidation.images(),
  thumbnail: AppValidation.thumbnail(),
})

export type CardUploadFormValues = z.infer<typeof cardUploadFormSchema>

export const useCardUploadForm = () => {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<CardUploadFormValues>({
    resolver: zodResolver(cardUploadFormSchema),
    defaultValues: {
      cardTitle: '',
      itemName: '',
      priceRange: undefined,
      category: undefined,
      tradeType: undefined,
      tradeArea: '',
      pokeAvailable: false,
      content: '',
      images: [],
      thumbnail: undefined,
    },
    mode: 'onSubmit',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: CardUploadFormValues) => {
    if (isSubmitting) return
    setIsSubmitting(() => true)
    console.log(data)
    try {
      await postCard(data)
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

  return { form, onSubmit: form.handleSubmit(onSubmit), isSubmitting }
}
