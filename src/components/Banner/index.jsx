import React from 'react'

import { renderToStaticMarkup } from "react-dom/server";

import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SLIDES from "../../dataset/banner"

import 'swiper/scss';
import "swiper/scss/free-mode";
import 'swiper/scss/pagination';

import styles from "./index.module.scss"

export default function Banner() {

  const bullets = [
    {
      id: 1,
      image: require("../../images/banner/bullets/腦袋按鈕1.svg").default,
      name: "腦袋按鈕1"
    },
    {
      id: 2,
      image: require("../../images/banner/bullets/腦袋按鈕2.svg").default,
      name: "腦袋按鈕2"
    },
    {
      id: 3,
      image: require("../../images/banner/bullets/腦袋按鈕3.svg").default,
      name: "腦袋按鈕3"
    },
  ]

  const judgeBulletNumberIndex = (index, className, item) => {
    if (index % bullets.length === item.id - 1) {
      return renderToStaticMarkup(
        <span className={className} >
          <img src={item.image} alt={item.name} />
        </span>
      );
    }
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const newBullet = bullets && bullets.map(item => {
        return judgeBulletNumberIndex(index, className, item)
      });
      return newBullet[index % bullets.length]
    }
  };

  return (
    <Swiper
      className={styles.Banner}
      modules={[Autoplay, FreeMode, Keyboard, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      autoHeight={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
      }}
      freeMode={{
        enabled: true,
        sticky: true
      }}
      grabCursor={true}
      keyboard={{ nabled: true }}
      loop={true}
      pagination={pagination}
    >
      {
        SLIDES && SLIDES.map(item =>
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.name} loading="lazy" />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}
