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
import { CATEGORY } from '@/constants/card'
import type { ItemUploadFormValues } from '../hooks/useItemUploadForm'

const Category = ({ form }: { form: UseFormReturn<ItemUploadFormValues> }) => {
  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormLabel htmlFor="category">카테고리</FormLabel>
            <FormMessage />
          </div>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="카테고리를 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CATEGORY.map((category) => (
                  <SelectItem value={category} key={category}>
                    {category}
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

export default Category
