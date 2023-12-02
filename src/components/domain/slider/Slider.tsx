'use client'

import Image, { StaticImageData } from 'next/image'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.css'

type SliderProps = {
  imageData: { url: string | StaticImageData }[]
  imageAspectRatio: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
}

/**
 * @param {ImageData} 이미지 아이디, 이미지 url을 담은 데이터
 * @param {imageAspectRatio} swiper 크기 지정을 위한 변수
 */
const Slider = ({
  imageData,
  imageAspectRatio,
  loading = 'lazy',
  priority = false,
}: SliderProps) => {
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
      {imageData.map((v, idx) => (
        <SwiperSlide key={idx}>
          <Image
            width={0}
            height={0}
            alt="sliderImage"
            src={v.url}
            sizes="(max-width: 640px) 100vw, 640px"
            quality={50}
            style={{ width: '100%' }}
            loading={loading}
            priority={priority}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
