import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { DialogFooter, DialogHeader } from '@/components/ui/Dialog'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select/Select'
import Assets from '@/config/assets'
import { useItemsQuery } from '@/hooks/api/useItemsQuery'

const FilterFormDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const { control, getValues } = useFormContext()

  const { fetchNextPage } = useItemsQuery({
    category: getValues('category'),
    priceRange: getValues('priceRange'),
    cardTitle: getValues('cardTitle'),
    status: ['TRADE_AVAILABLE'],
    size: 5,
  })

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="flex gap-2 cursor-pointer">
            <Image
              src={
                getValues('priceRange') !== '' || getValues('category') !== ''
                  ? Assets.filterActiveIcon
                  : Assets.filterIcon
              }
              alt="필터 아이콘"
            />{' '}
            <div
              className={
                getValues('priceRange') !== '' || getValues('category') !== ''
                  ? 'text-primary-color'
                  : ''
              }
              onClick={openModal}
            >
              필터
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[390px] h-[398px] shadow-md z-50 p-6 rounded-lg">
          <DialogHeader>
            <div className="flex justify-between mb-4">
              <DialogTitle className="text-xl font-bold">필터</DialogTitle>
              <Image
                className="cursor-pointer"
                onClick={closeModal}
                src={Assets.xIcon}
                alt="검색 아이콘"
              />
            </div>
          </DialogHeader>
          <DialogDescription className="mb-6">
            <div className="text-sm mb-2">가격대</div>
            <Controller
              name="priceRange"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    field.onChange({ target: { name, value } })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        getValues('priceRange') || '가격대를 선택해주세요.'
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="w-full">
                      <SelectItem value="10만원대">10만원대</SelectItem>
                      <SelectItem value="20만원대">20만원대</SelectItem>
                      <SelectItem value="30만원대">30만원대</SelectItem>
                      <SelectItem value="40만원대">40만원대</SelectItem>
                      <SelectItem value="50만원이상">50만원이상</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </DialogDescription>
          <div className="border border-solid border-background-secondary-color mb-6"></div>

          {/*TODO: 카테고리 Select를 어떻게 구현할지 조언을 구한 후 구현,  현재 SelectItem의 value와 textContent가 동일 실 API를 받을 경우, 어떤 값을 줄지 정한후 map 객체로 파싱하여 요청 */}
          <DialogDescription className="mb-6">
            <div className="text-sm mb-2">카테고리</div>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    field.onChange({ target: { name, value } })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        getValues('category') || '카테고리를 선택해주세요.'
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="w-full">
                      <SelectItem value="남성의류">남성의류</SelectItem>
                      <SelectItem value="여성의류">여성의류</SelectItem>
                      <SelectItem value="잡화,액세서리">
                        잡화,액세서리
                      </SelectItem>
                      <SelectItem value="신발">신발</SelectItem>
                      <SelectItem value="가전">가전</SelectItem>
                      <SelectItem value="스포츠">스포츠</SelectItem>
                      <SelectItem value="가구">가구</SelectItem>
                      <SelectItem value="도서">도서</SelectItem>
                      <SelectItem value="전자기기,디지털">
                        전자기기,디지털
                      </SelectItem>
                      <SelectItem value="기타">기타</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </DialogDescription>
          <DialogFooter className="w-full flex justify-end">
            <Button
              onClick={() => {
                fetchNextPage()
                closeModal()
              }}
            >
              적용하기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {isOpen && <div className="fixed inset-0 bg-black opacity-60 z-40" />}
    </div>
  )
}

export default FilterFormDialog
