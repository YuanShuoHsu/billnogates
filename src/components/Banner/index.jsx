import React, { useRef, useEffect } from 'react'

import { Autoplay, FreeMode, Keyboard, Lazy, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import IMAGES from "../../dataset/banner"

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/lazy";
import 'swiper/css/pagination';

import "./index.scss"

export default function Banner() {

  const swiperRef = useRef()

  useEffect(() => {
    swiperRef.current.children[1].style = `--x: ${IMAGES.length}`
  }, [])

  return (
    <Swiper
      className='Banner'
      modules={[Autoplay, FreeMode, Keyboard, Lazy, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoHeight={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      freeMode={{
        enabled: true,
        sticky: true
      }}
      grabCursor={true}
      keyboard={{ nabled: true }}
      lazy={{
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: true,
      }}
      loop={true}
      ref={swiperRef}
      pagination={{ clickable: true }}
    >
      {
        IMAGES && IMAGES.map(item => (
          <SwiperSlide key={item.id}>
            <img className="swiper-lazy" data-src={item.image} alt={item.name} />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
