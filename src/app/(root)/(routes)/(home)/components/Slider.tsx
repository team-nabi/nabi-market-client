'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import { TYPOGRAPHY } from '@/styles/sizes'
import { CardDetail } from '@/types/card'
import { getValueByKey } from '@/utils/getValueByKey'
import './index.css'

type PopularCardSliderProps = {
  cardData: Pick<
    CardDetail,
    'cardId' | 'itemName' | 'priceRange' | 'thumbnail'
  >[]
}

const PopularCardSlider = ({ cardData }: PopularCardSliderProps) => {
  console.log(cardData)
  const router = useRouter()

  const handleClick = (cardId: number) => {
    router.push(`/cards/${cardId}`)
  }
  return (
    <div className="popular-card-slider">
      <Swiper
        loop={true}
        spaceBetween={24}
        slidesPerView={2}
        centeredSlides={true}
      >
        {cardData.map((v) => (
          <SwiperSlide key={v.cardId}>
            <Image
              width={0}
              height={0}
              alt="sliderImage"
              src={v.thumbnail}
              sizes="100vw"
              style={{ width: '100%' }}
              onClick={() => handleClick(v.cardId)}
            />
            <div className="flex flex-col gap-1 items-center justify-center opacity-70 bg-black rounded-b-[5px] text-white w-full absolute inset-x-0 bottom-0 max-w-[240px] left-2/4 translate-x-[-50%] ">
              <p className={`${TYPOGRAPHY.title}`}>{v.itemName}</p>
              <p className={`${TYPOGRAPHY.description}`}>
                {getValueByKey(PRICE_RANGE_OBJS, v.priceRange)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PopularCardSlider
