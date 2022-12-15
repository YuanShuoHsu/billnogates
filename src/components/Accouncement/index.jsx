import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode } from "swiper";

import Forms from "../../dataset/accouncement"

import "swiper/scss";
import "swiper/scss/free-mode";

import styles from"./index.module.scss"

export default function Accouncement() {
    return (
        <Swiper
            className={styles.Accouncement}
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={1}
            speed={1000}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                waitForTransition: false,
            }}
            direction={"vertical"}
            freeMode={{
                enabled: true,
                sticky: true
            }}
            grabCursor={true}
            loop={true}
        >
            {
                Forms && Forms.map(item =>
                    <SwiperSlide key={item.id}>
                        <span className={styles.text}>{item.text}</span>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}
