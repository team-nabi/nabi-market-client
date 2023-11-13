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
import { TRADE_TYPE } from '@/constants/card'
import type { ItemUploadFormValues } from '../hooks/useItemUploadForm'

const TradeType = ({ form }: { form: UseFormReturn<ItemUploadFormValues> }) => {
  return (
    <FormField
      control={form.control}
      name="tradeType"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormLabel htmlFor="tradeType">거래 방식</FormLabel>
            <FormMessage />
          </div>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="거래방식을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {TRADE_TYPE.map((tradeType) => (
                  <SelectItem value={tradeType} key={tradeType}>
                    {tradeType}
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

export default TradeType
