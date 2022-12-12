import React, { useState } from 'react'

import { useParams } from 'react-router-dom';

import PRODUCTS from "../../../../dataset/product"

import { Keyboard, FreeMode, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import "swiper/scss/thumbs";

import styles from "./index.module.scss"

export default function GalleryThumbs() {

    const { productId } = useParams()

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const findProduct = PRODUCTS.find(detailObj => (
        detailObj.id === Number(productId)
    ))

    return (
        <div className={styles.GalleryThumbs}>
            <Swiper
                className={styles.mySwiper2}
                modules={[Keyboard, FreeMode, Pagination, Thumbs]}
                spaceBetween={0}
                slidesPerView={1}
                speed={500}
                keyboard={{
                    enabled: true,
                }}
                freeMode={{
                    enabled: true,
                    sticky: true
                }}
                grabCursor={true}
                pagination={{
                    type: "progressbar",
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            >
                {
                    findProduct.gallery && findProduct.gallery.map(item => (
                        <SwiperSlide key={item.subId}>
                            <img src={item.image} alt={item.name} loading="lazy" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={styles.scrollBox}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    className={styles.mySwiper}
                    modules={[FreeMode, Thumbs]}
                    spaceBetween={10}
                    slidesPerView={4}
                    speed={500}
                    freeMode={true}
                    grabCursor={true}
                    watchSlidesProgress={true}
                >
                    {
                        findProduct.gallery && findProduct.gallery.map(item =>
                            <SwiperSlide key={item.subId}>
                                <img src={item.image} alt={item.name} loading="lazy" />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}
