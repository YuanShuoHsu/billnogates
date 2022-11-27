import React, { useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { number_pagination } from '../../store/slice/pagination';

import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import PRODUCTS from "../../dataset/product"

import "swiper/scss";
import "swiper/scss/free-mode";

import "./index.scss"

export default function Pagination() {

    const swiperRef = useRef()

    const dispatch = useDispatch();
    const pagination = useSelector(state => state.pagination.value);
    const numberLength = Math.ceil(PRODUCTS.length / 10)

    const pageList = []

    for (let index = 0; index < numberLength; index++) {
        pageList.push(
            <SwiperSlide key={index}>
                <button
                    onClick={() => handleNumber(index + 1)}
                    className={`button ${pagination === index + 1 ? "active" : ""}`}>
                    <span className='text'>{index + 1}</span>
                </button>
            </SwiperSlide>
        )
    }

    const scrollToElement = () => {
        setTimeout(() => {
            document.querySelector(".swiper-pagination").scrollIntoView({ behavior: "smooth" });
        }, 0)
    }

    const handleNumber = (index) => {
        dispatch(number_pagination(index))
        scrollToElement()
    }

    const handleFirstNumber = () => {
        swiperRef.current.swiper.slideTo(0)
        handleNumber(1)
    }

    const handleLastNumber = () => {
        swiperRef.current.swiper.slideTo(numberLength - 1)
        handleNumber(numberLength)
    }

    return (
        <div className='Pagination'>
            <button onClick={handleFirstNumber} className={`navigation ${pagination === 1 ? "active" : ""}`}>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
                </svg>
                <span className='text'>首頁</span>
            </button>
            <Swiper
                modules={[FreeMode]}
                slidesPerView={numberLength < 5 ? numberLength : 5}
                spaceBetween={0}
                slideToClickedSlide={true}
                centeredSlides={true}
                freeMode={{
                    enabled: true,
                    sticky: true
                }}
                grabCursor={true}
                className="mySwiper"
                style={{ "--x": `${numberLength}` }}
                ref={swiperRef}
            >
                {pageList}
            </Swiper>
            <button onClick={handleLastNumber} className={`navigation ${pagination === numberLength ? "active" : ""}`}>
                <span className='text'>最後</span>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                </svg>
            </button>
        </div >
    )
}