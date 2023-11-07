'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'

type SliderProps = {
  autoSlide?: boolean
  autoSlideInterval?: number
  slides: string[]
  imageAspectRatio?: string
}

const Slider = ({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
  imageAspectRatio = 'auto',
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [coordinate, setCoordinate] = useState({ start: 0, end: 0 })
  const [style, setStyle] = useState({
    transform: `translateX(-${currentIndex}00%)`,
    transition: `all 0.4s ease-out`,
  })

  const ref = useRef<HTMLDivElement>(null)
  const imageList = [slides.at(-1), ...slides, slides[0]]

  const goPrevSlide = () => {
    setCurrentIndex(currentIndex - 1)
    setStyle({
      transform: `translateX(-${currentIndex - 1}00%)`,
      transition: `all 0.4s ease-out`,
    })
  }
  const goNextSlide = useCallback(() => {
    setCurrentIndex(currentIndex + 1)
    setStyle({
      transform: `translateX(-${currentIndex + 1}00%)`,
      transition: `all 0.4s ease-out`,
    })
  }, [currentIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    setCoordinate({
      ...coordinate,
      start: e.touches[0].pageX,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (ref.current) {
      const current = ref.current.clientWidth * currentIndex
      const result = -current + (e.targetTouches[0].pageX - coordinate.start)
      setStyle({
        transform: `translate3d(${result}px, 0px, 0px)`,
        transition: '0ms',
      })
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const end = e.changedTouches[0].pageX
    const distance = Math.abs(coordinate.start - end)

    if (coordinate.start > end && distance > 2) {
      goNextSlide()
    } else if (coordinate.start < end && distance < 2) {
      goPrevSlide()
    }
    setCoordinate({
      ...coordinate,
      end,
    })
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(goNextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, currentIndex, goNextSlide])

  useEffect(() => {
    if (currentIndex === 0) {
      setCurrentIndex(imageList.length - 2)
      setTimeout(function () {
        setStyle({
          transform: `translateX(-${imageList.length - 2}00%)`,
          transition: '0ms',
        })
      }, 400)
    }

    if (currentIndex >= imageList.length - 1) {
      setCurrentIndex(1)
      setTimeout(() => {
        setStyle({
          transform: `translateX(-100%)`,
          transition: '0ms',
        })
      }, 400)
    }
  }, [currentIndex, imageList.length])

  return (
    <div
      className="overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={ref} className="flex " style={style}>
        {imageList.map((url, i) => (
          <Image
            src={url as string}
            alt="itemImage"
            key={i}
            priority
            width={0}
            height={0}
            className={`w-full cursor-pointer aspect-${imageAspectRatio}`}
          />
        ))}
      </div>
      <div className="absolute p-2 w-full flex justify-between top-[50%]">
        <button onClick={goPrevSlide} className="p-1 rounded-full bg-white/20">
          <Image src={Assets.leftIcon} alt="left" />
        </button>

        <button onClick={goNextSlide} className="p-1 rounded-full bg-white/20">
          <Image src={Assets.rightIcon} alt="right" priority />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2" ref={ref}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`
              transition-all w-3 h-3 rounded-full
              ${
                currentIndex === i + 1
                  ? 'w-4 h-4 bg-primary-color'
                  : 'bg-white bg-opacity-50'
              }
            `}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
