import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import Card from '@/components/ui/Card'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'
import Switch from '@/components/ui/Switch'
import { ItemUploadFormValues } from '../hook/useItemUploadForm'

const PokeAvailable = ({
  form,
}: {
  form: UseFormReturn<ItemUploadFormValues>
}) => {
  return (
    <FormField
      control={form.control}
      name="pokeAvailable"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormLabel htmlFor="pokeAvailable">
              찔러보기 활성화/비활성화
            </FormLabel>
            <FormMessage />
          </div>

          <FormControl>
            <Card className="flex flex-row items-center p-3 h-fit">
              <span className={'font-normal'}>
                등록할 상품보다 낮은 금액의 상품 거래 제안을 허용합니다.
              </span>
              <Switch
                id="pokeAvailable"
                className="ml-auto"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </Card>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default PokeAvailable
