import React from 'react'
import { Autoplay, FreeMode, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      freeMode={{ enabled: true, sticky: true }}
      grabCursor={true}
      loop={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
  )
}
