import React from 'react'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Input from '@/components/ui/input'

const TradeArea = () => {
  return (
    <FormField
      name="tradeArea"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormLabel htmlFor="tradeArea">거래 지역</FormLabel>
            <FormMessage />
          </div>
          <Input
            id="tradeArea"
            type="text"
            placeholder="거래 지역을 간단하게 작성해주세요. 예시) 서울시 강남구"
            {...field}
          />
        </FormItem>
      )}
    />
  )
}

export default TradeArea
