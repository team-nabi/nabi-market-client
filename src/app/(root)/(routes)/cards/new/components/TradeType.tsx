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
import { TRADE_TYPE_OBJS } from '@/constants/card'
import type { CardUploadFormValues } from '../hooks/useCardUploadForm'

const TradeType = ({ form }: { form: UseFormReturn<CardUploadFormValues> }) => {
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
                {TRADE_TYPE_OBJS.map((tradeType) => (
                  <SelectItem value={tradeType.key} key={tradeType.key}>
                    {tradeType.value}
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
