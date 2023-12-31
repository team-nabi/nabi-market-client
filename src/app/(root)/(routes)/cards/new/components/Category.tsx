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
import { CATEGORY_OBJS } from '@/constants/card'
import type { CardUploadFormValues } from '../hooks/useCardUploadForm'

const Category = ({ form }: { form: UseFormReturn<CardUploadFormValues> }) => {
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
                {CATEGORY_OBJS.map((category) => (
                  <SelectItem value={category.key} key={category.key}>
                    {category.value}
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
