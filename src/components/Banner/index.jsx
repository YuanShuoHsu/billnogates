import React from 'react'
import * as ReactDOMServer from "react-dom/server";


import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BANNERS from "../../dataset/banner"

import 'swiper/scss';
import "swiper/scss/free-mode";
import 'swiper/scss/pagination';

import styles from "./index.module.scss"

export default function Banner() {

  // const swiperRef = useRef()

  // useEffect(() => {
  //   swiperRef.current.children[1].style = `--x: ${BANNERS.length}`
  // }, [])

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const newBullet = BANNERS.bullets && BANNERS.bullets.map(item => {
        if (index % BANNERS.bullets.length === item.id - 1) {
          return ReactDOMServer.renderToStaticMarkup(
            <span className={`${className}`}>
              <img src={item.image} alt={item.name} />
            </span>
          );
        }
        return item
      });
      return newBullet[index]
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
        BANNERS.slides && BANNERS.slides.map(item =>
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.name} loading="lazy" />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}
