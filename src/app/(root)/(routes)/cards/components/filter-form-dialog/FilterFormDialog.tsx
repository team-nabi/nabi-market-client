import React, { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog'
import Image from 'next/image'
import { DialogHeader } from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import Assets from '@/config/assets'
import { CATEGORY, CATEGORY_TO_KR } from '@/constants/card'
import { Category, PriceRange } from '@/types/card'

type FilterFormDialogProps = {
  priceRange: PriceRange
  category: Category
  setPriceRange: (priceRange: PriceRange) => void
  setCategory: (category: Category) => void
}

const FilterFormDialog = ({
  priceRange,
  category,
  setPriceRange,
  setCategory,
}: FilterFormDialogProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  //  const hasNoFilter = priceRange !== '전체보기' || category !== '전체보기'
  const hasNoFilter = true
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <DialogTitle className="flex gap-2 cursor-pointer">
            <Image
              src={hasNoFilter ? Assets.filterActiveIcon : Assets.filterIcon}
              alt="필터 아이콘"
            />{' '}
            <DialogDescription
              className={hasNoFilter ? 'text-primary-color' : ''}
              onClick={openModal}
            >
              필터
            </DialogDescription>
          </DialogTitle>
        </DialogTrigger>
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-[640px] h-[398px] shadow-md z-50 p-6 rounded-lg">
          <DialogHeader>
            <DialogDescription className="flex justify-between mb-4">
              <DialogTitle className="text-xl font-bold">필터</DialogTitle>
              <Image
                className="cursor-pointer"
                onClick={closeModal}
                src={Assets.xIcon}
                alt="검색 아이콘"
              />
            </DialogDescription>
          </DialogHeader>
          <DialogDescription className="mb-6">
            <DialogDescription className="text-sm mb-2">
              가격대
            </DialogDescription>
            <Select
              value={priceRange}
              onValueChange={(value: PriceRange) => {
                setPriceRange(value)
              }}
            >
              <SelectTrigger>{priceRange}</SelectTrigger>
              <SelectContent>
                <SelectGroup className="w-full">
                  <SelectItem value="전체보기">전체보기</SelectItem>
                  <SelectItem value="10만원대">10만원대</SelectItem>
                  <SelectItem value="20만원대">20만원대</SelectItem>
                  <SelectItem value="30만원대">30만원대</SelectItem>
                  <SelectItem value="40만원대">40만원대</SelectItem>
                  <SelectItem value="50만원이상">50만원이상</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </DialogDescription>
          <DialogDescription className="border-t border-solid border-background-secondary-color mb-6"></DialogDescription>

          {/*TODO: 현재 SelectItem의 value와 textContent가 동일 실 API를 받을 경우, 어떤 값을 줄지 정한후 map 객체로 파싱하여 요청 */}
          <DialogDescription className="mb-6">
            <DialogDescription className="text-sm mb-2">
              카테고리
            </DialogDescription>
            {CATEGORY.map((currentCategory: Category, index) => (
              <button
                key={index}
                className={`border rounded-[10px] text-[10px] h-[25px] px-3 py-1 m-1 ${
                  category === currentCategory
                    ? 'border-primary-color text-primary-color'
                    : 'border-background-secondary-color text-background-secondary-color'
                }`}
                onClick={(e) =>
                  setCategory(e.currentTarget.textContent as Category)
                }
              >
                {CATEGORY_TO_KR[currentCategory]}
              </button>
            ))}
          </DialogDescription>
        </DialogContent>
      </Dialog>
      {isOpen && <div className="fixed inset-0 bg-black opacity-60 z-40" />}
    </>
  )
}

export default FilterFormDialog
