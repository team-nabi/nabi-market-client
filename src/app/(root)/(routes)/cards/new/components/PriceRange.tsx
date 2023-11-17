import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import type { CardUploadFormValues } from '../hooks/useCardUploadForm'

const PriceRange = ({
  form,
}: {
  form: UseFormReturn<CardUploadFormValues>
}) => {
  return (
    <FormField
      control={form.control}
      name="priceRange"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormLabel htmlFor="priceRange">가격대</FormLabel>
            <FormMessage />
          </div>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="가격대를 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {PRICE_RANGE_OBJS.map((priceRange) => (
                  <SelectItem value={priceRange.key} key={priceRange.key}>
                    {priceRange.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}

export default PriceRange
