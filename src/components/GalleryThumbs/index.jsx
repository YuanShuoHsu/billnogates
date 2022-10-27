import React, { useState } from 'react'

import { FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";

import "./index.scss"

import images from "../../images/網站banner 聯名漁夫帽.png"

export default function GalleryThumbs() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="GalleryThumbs">
            <Swiper
                className="mySwiper2"
                modules={[Thumbs]}
                spaceBetween={0}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            >
                <SwiperSlide>
                    <img src={images} alt='1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images} alt='2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images} alt='3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images} alt='4' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images} alt='5' />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                className="mySwiper"
                modules={[FreeMode, Thumbs]}
                spaceBetween={0}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
            >
                <SwiperSlide>
                    <img src={images} alt='1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images} alt='2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images} alt='3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images} alt='4' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images} alt='5' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
