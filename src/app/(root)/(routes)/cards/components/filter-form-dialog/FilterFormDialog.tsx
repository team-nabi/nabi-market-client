import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { CATEGORY_OBJS, PRICE_RANGE_OBJS } from '@/constants/card'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import { CategoryObjs, PriceRangeObjs } from '@/types/card'
import { getValueByKey } from '@/utils/getValueByKey'

const FilterFormDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const searchParams = useSearchParams()
  const router = useRouter()

  const { createQueryString } = useCreateQueryString()
  const priceRange = searchParams.get('priceRange') || undefined
  const category = searchParams.get('category') || undefined

  const hasNoFilter = priceRange !== undefined || category !== undefined

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
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-[640px] h-[450px] shadow-md z-50 p-6 rounded-lg">
          <DialogHeader>
            <DialogDescription className="flex justify-between mb-4">
              <DialogTitle className="text-xl font-bold">필터</DialogTitle>
            </DialogDescription>
          </DialogHeader>
          <DialogDescription className="mb-6">
            <DialogDescription className="mb-2 text-sm">
              가격대
            </DialogDescription>
            <Select
              value={priceRange}
              onValueChange={(value: PriceRangeObjs['key']) => {
                router.push(
                  '/cards' + '?' + createQueryString('priceRange', value),
                )
              }}
            >
              <SelectTrigger>
                {getValueByKey(PRICE_RANGE_OBJS, priceRange) ||
                  '가격대를 선택해주세요'}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="w-full">
                  {PRICE_RANGE_OBJS.map((currentPriceRange: PriceRangeObjs) => (
                    <SelectItem
                      key={currentPriceRange['key']}
                      value={currentPriceRange['key']}
                    >
                      {currentPriceRange['value']}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </DialogDescription>
          <DialogDescription className="mb-6 border-t border-solid border-background-secondary-color"></DialogDescription>

          {/*TODO: 현재 SelectItem의 value와 textContent가 동일 실 API를 받을 경우, 어떤 값을 줄지 정한후 map 객체로 파싱하여 요청 */}
          <DialogDescription className="mb-6">
            <DialogDescription className="mb-2 text-sm">
              카테고리
            </DialogDescription>
            {CATEGORY_OBJS.map((currentCategory: CategoryObjs) => (
              <button
                key={currentCategory.key}
                data-category-key={currentCategory.key}
                className={`border rounded-[10px] text-[10px] h-[25px] px-3 m-1 ${
                  category === currentCategory.key
                    ? 'border-primary-color text-primary-color'
                    : 'border-background-secondary-color text-background-secondary-color'
                }`}
                onClick={(e) =>
                  router.push(
                    '/cards' +
                      '?' +
                      createQueryString(
                        'category',
                        e.currentTarget.getAttribute(
                          'data-category-key',
                        ) as CategoryObjs['key'],
                      ),
                  )
                }
              >
                {getValueByKey(CATEGORY_OBJS, currentCategory.key)}
              </button>
            ))}
          </DialogDescription>
          <DialogDescription>
            <DialogFooter className="pb-6">
              <Button
                variant={'gradation'}
                onClick={() => {
                  router.push(AppPath.cards())
                  closeModal()
                }}
              >
                필터 초기화
              </Button>
            </DialogFooter>
          </DialogDescription>
        </DialogContent>
      </Dialog>
      {isOpen && <div className="fixed inset-0 z-40 bg-black opacity-60" />}
    </>
  )
}

export default FilterFormDialog
