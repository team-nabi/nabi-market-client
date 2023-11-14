import React from 'react'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Input from '@/components/ui/input'

const CardTitle = () => {
  return (
    <FormField
      name="cardTitle"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormLabel htmlFor="cardTitle">제목</FormLabel>
            <FormMessage />
          </div>
          <Input
            id="cardTitle"
            type="text"
            placeholder="제목을 입력하세요"
            {...field}
          />
        </FormItem>
      )}
    />
  )
}

export default CardTitle
