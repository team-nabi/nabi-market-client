'use client'

import React from 'react'
import ImageUploader from '@/components/domain/ImageUploader'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'
import Input from '@/components/ui/Input'
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
import { useItemUploadForm } from '../hook/useItemUploadForm'

const ItemUploadTemplate = () => {
  const { form, onSubmit } = useItemUploadForm()
  return (
    <main className="flex flex-col items-center w-full gap-3 px-2">
      <h1>물건 등록</h1>
      <Form {...form}>
        <form onSubmit={onSubmit} className="flex flex-col w-full gap-3">
          <section className="w-full mr-auto">
            <FormField
              name="images"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-center gap-2 ">
                    <FormMessage />
                  </div>
                  <FormControl>
                    <ImageUploader onFilesChanged={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </section>
          <section className="flex flex-col w-full gap-3">
            <div className="flex flex-col gap-2 ">
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
            </div>
            <div className="flex flex-col gap-2 ">
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
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <div className="flex flex-col flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="priceRange"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row items-center gap-2 ">
                        <FormLabel htmlFor="priceRange">가격대</FormLabel>
                        <FormMessage />
                      </div>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="가격대를 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {PRICE_RANGE.map((priceRange) => (
                              <SelectItem value={priceRange} key={priceRange}>
                                {priceRange}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row items-center gap-2 ">
                        <FormLabel htmlFor="category">카테고리</FormLabel>
                        <FormMessage />
                      </div>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="카테고리를 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {CATEGORY.map((category) => (
                              <SelectItem value={category} key={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <FormField
                control={form.control}
                name="tradeType"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row items-center gap-2 ">
                      <FormLabel htmlFor="tradeType">거래 방식</FormLabel>
                      <FormMessage />
                    </div>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
            </div>
            <div className="flex flex-col gap-2 ">
              <FormField
                name="tradeArea"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row items-center gap-2 ">
                      {' '}
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
            </div>
            <div className="flex flex-col gap-2 ">
              <FormField
                control={form.control}
                name="pokeAvailable"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row items-center gap-2 ">
                      {' '}
                      <FormLabel htmlFor="pokeAvailable">
                        찔러보기 활성화/비활성화
                      </FormLabel>
                      <FormMessage />
                    </div>

                    <FormControl>
                      <Card className="flex flex-row items-center p-3 h-fit">
                        <span className={'font-normal'}>
                          등록할 상품보다 낮은 금액의 상품 거래 제안을
                          허용합니다.
                        </span>
                        <Switch
                          id="pokeAvailable"
                          className="ml-auto"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </Card>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2 ">
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
            </div>
            <div className="mt-8 ml-auto w-fit">
              <Button type="submit" variant={'gradation'}>
                등록하기
              </Button>
            </div>
          </section>
        </form>
      </Form>
    </main>
  )
}

export default ItemUploadTemplate
