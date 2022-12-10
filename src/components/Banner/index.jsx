import React, { useRef, useEffect } from 'react'

import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import IMAGES from "../../dataset/banner"

import 'swiper/scss';
import "swiper/scss/free-mode";
import 'swiper/scss/pagination';

import styles from "./index.module.scss"

export default function Banner() {

  const swiperRef = useRef()

  useEffect(() => {
    swiperRef.current.children[1].style = `--x: ${IMAGES.length}`
  }, [])

  return (
    <Swiper
      className={styles.Banner}
      modules={[Autoplay, FreeMode, Keyboard, Pagination]}
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
      loop={true}
      ref={swiperRef}
      pagination={{ clickable: true }}
    >
      {
        IMAGES && IMAGES.map(item =>
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.name} loading="lazy" />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}
