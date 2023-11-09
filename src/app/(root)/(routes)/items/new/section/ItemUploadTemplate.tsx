'use client'

import React from 'react'
import ImageUploader from '@/components/domain/ImageUploader'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import Switch from '@/components/ui/Switch'
import Textarea from '@/components/ui/Textarea'
import { CATEGORY, PRICE_RANGE, TRADE_TYPE } from '@/constants/item'

const ItemUploadTemplate = () => {
  return (
    <main className="flex flex-col items-center w-full gap-3 px-2">
      <h1>물건 등록</h1>
      <section className="w-full mr-auto">
        <ImageUploader onFilesChanged={() => {}} />
      </section>
      <section className="w-full">
        <form onSubmit={() => {}} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cardTitle">제목</Label>
            <Input id="cardTitle" type="text" placeholder="제목을 입력하세요" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="itemName">물품명</Label>
            <Input
              id="itemName"
              type="text"
              placeholder="물품명을 입력하세요"
            />
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col flex-1 gap-2">
              <Label htmlFor="priceRange">가격대</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="가격대를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {PRICE_RANGE.map((priceRange) => (
                      <SelectItem value={priceRange.value} key={priceRange.key}>
                        {priceRange.value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <Label htmlFor="category">카테고리</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="카테고리를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {CATEGORY.map((category) => (
                      <SelectItem value={category.value} key={category.key}>
                        {category.value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="tradeType">거래 방식</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="거래방식을 선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TRADE_TYPE.map((tradeType) => (
                    <SelectItem value={tradeType.value} key={tradeType.key}>
                      {tradeType.value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="tradeArea">거래 지역</Label>
            <Input
              id="tradeArea"
              type="text"
              placeholder="거래 지역을 간단하게 작성해주세요. 예시) 서울시 강남구"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="pokeAvailable">찔러보기 활성화/비활성화</Label>
            <Card className="flex flex-row items-center p-3 h-fit">
              <span className={'font-normal'}>
                등록할 상품보다 낮은 금액의 상품 거래 제안을 허용합니다.
              </span>
              <Switch id="pokeAvailable" className="ml-auto" />
            </Card>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="content">상세 내용</Label>
            <Textarea id="content" placeholder="상세 내용을 입력하세요" />
          </div>
          <div className="ml-auto w-fit">
            <Button type="submit" variant={'gradation'}>
              등록하기
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default ItemUploadTemplate
