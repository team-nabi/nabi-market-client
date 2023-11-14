'use client'

import Image from 'next/image'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardImages } from '@/types/card'
import './index.css'

type SliderProps = {
  imageData: CardImages[]
  imageAspectRatio: string
}

/**
 * @param {ImageData} 이미지 아이디, 이미지 url을 담은 데이터
 * @param {imageAspectRatio} swiper 크기 지정을 위한 변수
 */
const Slider = ({ imageData, imageAspectRatio }: SliderProps) => {
  SwiperCore.use([Pagination, Autoplay])
  return (
    <Swiper
      loop={true}
      pagination={{ clickable: true }}
      allowTouchMove={true}
      className={`aspect-${imageAspectRatio}`}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {imageData.map((v) => (
        <SwiperSlide key={v._id}>
          <Image
            width={0}
            height={0}
            alt="sliderImage"
            src={v.image}
            sizes="100vw"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
