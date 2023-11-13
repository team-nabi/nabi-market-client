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
import { PRICE_RANGE } from '@/constants/card'
import type { ItemUploadFormValues } from '../hooks/useItemUploadForm'

const PriceRange = ({
  form,
}: {
  form: UseFormReturn<ItemUploadFormValues>
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
                {PRICE_RANGE.map((priceRange) => (
                  <SelectItem value={priceRange} key={priceRange}>
                    {priceRange}
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
