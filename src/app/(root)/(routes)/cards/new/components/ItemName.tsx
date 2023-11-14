import React from 'react'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Input from '@/components/ui/input'

const ItemName = () => {
  return (
    <FormField
      name="itemName"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormLabel htmlFor="itemName">물품명</FormLabel>
            <FormMessage />
          </div>
          <Input
            id="itemName"
            type="text"
            placeholder="물품명을 입력하세요"
            {...field}
          />
        </FormItem>
      )}
    />
  )
}

export default ItemName
