import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'
import Textarea from '@/components/ui/Textarea'
import type { ItemUploadFormValues } from '../hook/useItemUploadForm'

const Content = ({ form }: { form: UseFormReturn<ItemUploadFormValues> }) => {
  return (
    <FormField
      control={form.control}
      name="content"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormLabel htmlFor="content">상세 내용</FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <Textarea
              id="content"
              placeholder="상세 내용을 입력하세요"
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default Content
