import Image from 'next/image'
import { images } from '@/lib/images-portfolio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode, } from 'swiper/modules'
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { useState } from 'react'


export function CardPortfolio(){
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    
    return(
        <div className='container mx-auto w-full sm:px-20 xl:w-9/12 flex flex-col px-4'>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='h-[580px] sm:h-[500px] w-full rounded-lg shadow-xl'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='flex h-full w-full items-center justify-center'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={9000}
                    height={9000}
                    quality={100}
                    priority={true}
                    className='block h-full w-full object-cover'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='thumbs mt-3 h-20 w-full rounded-lg shadow-xl'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <button className='flex h-full w-full items-center justify-center'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={900}
                    quality={100}
                    className='block h-full w-full object-cover'
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}