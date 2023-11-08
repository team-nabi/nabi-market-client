import Image from 'next/image'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.css'

type SliderProps = {
  imageData: [{ _id: number; image: string }]
}

const Slider = ({ imageData }: SliderProps) => {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false
        // }}
      >
        {imageData.map((v) => (
          <SwiperSlide key={v._id}>
            <Image
              width={0}
              height={0}
              alt="sliderImage"
              src={v.image}
              style={{ width: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
