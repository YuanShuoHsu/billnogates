import React, { useState } from 'react'

import { Autoplay, FreeMode, Keyboard, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BANNERS from "../../dataset/banner"

import 'swiper/scss';
import "swiper/scss/free-mode";
import "swiper/css/thumbs";
// import 'swiper/scss/pagination';

import styles from "./index.module.scss"
// import a from "../../images/banner/bullets/"
// import a from require("")
export default function Banner() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  // const swiperRef = useRef()

  // useEffect(() => {
  //   swiperRef.current.children[1].style = `--x: ${BANNERS.length}`
  // }, [])

  return (

    <div className={styles.Banner}>
      <Swiper
        className={styles.mySwiper2}
        modules={[Autoplay, FreeMode, Keyboard, Thumbs]}
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
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      >
        {
          BANNERS.slides && BANNERS.slides.map(item =>
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={item.name} loading="lazy" />
            </SwiperSlide>
          )
        }
      </Swiper>
      <div className={styles.scrollBox}>
        <Swiper
          onSwiper={setThumbsSwiper}
          style={{ "--x": `${BANNERS.slides.length}` }}
          className={styles.mySwiper}
          modules={[FreeMode, Thumbs]}
          spaceBetween={10}
          slidesPerView={BANNERS.slides.length}
          speed={500}
          freeMode={true}
          grabCursor={true}
          watchSlidesProgress={true}
        >
          {
            BANNERS.slides && BANNERS.slides.map(item => {
              // console.log(item.id % )
              return <SwiperSlide key={item.id}>
                <img src={BANNERS.bullets[0].image} alt={item.name} loading="lazy" />
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  )
}
