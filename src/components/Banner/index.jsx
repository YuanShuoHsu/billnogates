import React from 'react'

import { Autoplay, FreeMode, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import IMAGES from "../../dataset/banner.js"

import 'swiper/scss';
import "swiper/scss/free-mode";
import 'swiper/scss/pagination';
import "./index.scss"

export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay, FreeMode, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      autoHeight={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      freeMode={{ enabled: true, sticky: true }}
      grabCursor={true}
      loop={true}
      pagination={{ clickable: true }}
    >
      {
        IMAGES && IMAGES.map(item => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.name} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
