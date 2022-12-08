import React, { useState } from 'react'

import { useParams } from 'react-router-dom';

import PRODUCTS from "../../../../dataset/product"

import { Keyboard, FreeMode, Lazy, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/lazy";
import "swiper/css/thumbs";

import "./index.scss"

export default function GalleryThumbs() {

    const { productId } = useParams()

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const findProduct = PRODUCTS.find(detailObj => (
        detailObj.id === Number(productId)
    ))

    return (
        <div className="GalleryThumbs">
            <Swiper
                className="mySwiper2"
                modules={[Keyboard, FreeMode, Pagination, Lazy, Thumbs]}
                spaceBetween={0}
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
                lazy={{
                    loadPrevNext: true,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: true,
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            >
                {
                    findProduct.gallery && findProduct.gallery.map(item => (
                        <SwiperSlide key={item.subId}>
                            <img className="swiper-lazy" data-src={item.image} alt={item.name} />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='scrollBox'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    className="mySwiper"
                    modules={[FreeMode, Lazy, Thumbs]}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    grabCursor={true}
                    lazy={{
                        loadPrevNext: true,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: true,
                    }}
                    watchSlidesProgress={true}
                >
                    {
                        findProduct.gallery && findProduct.gallery.map(item => (
                            <SwiperSlide key={item.subId}>
                                <img className="swiper-lazy" data-src={item.image} alt={item.name} />
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
