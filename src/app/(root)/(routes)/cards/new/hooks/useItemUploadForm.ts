import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AppValidation } from '@/config/appValidation'
import { useToast } from '@/hooks/useToast'

const itemUploadFormSchema = z.object({
  cardTitle: AppValidation.title(),
  itemName: AppValidation.itemName(),
  priceRange: AppValidation.priceRange(),
  category: AppValidation.category(),
  tradeType: AppValidation.tradeType(),
  tradeArea: AppValidation.tradeArea(),
  pokeAvailable: AppValidation.pokeAvailable(),
  content: AppValidation.content(),
  images: AppValidation.images(),
  thumbnailImage: AppValidation.thumbnailImage(),
})

export type ItemUploadFormValues = z.infer<typeof itemUploadFormSchema>

export const useItemUploadForm = () => {
  const { toast } = useToast()
  const form = useForm<ItemUploadFormValues>({
    resolver: zodResolver(itemUploadFormSchema),
    defaultValues: {
      cardTitle: undefined,
      itemName: undefined,
      priceRange: undefined,
      category: undefined,
      tradeType: undefined,
      tradeArea: undefined,
      pokeAvailable: false,
      content: undefined,
      images: undefined,
      thumbnailImage: undefined,
    },
    mode: 'onSubmit',
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const onSubmit = async (data: ItemUploadFormValues) => {
    if (isSubmitting) return
    setisSubmitting(() => true)
    console.log(data)
    try {
      // await createItem({ variables: { input: { ...values } } })
      // await router.push('/items')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: '게시글을 업로드하는데 실패했습니다.',
      })
      console.log(error)
    }
  }

  return { form, onSubmit: form.handleSubmit(onSubmit), isSubmitting }
}
