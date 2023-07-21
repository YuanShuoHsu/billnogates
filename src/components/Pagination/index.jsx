import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changePagination } from "../../store/slice/pagination";

import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";

import styles from "./index.module.scss";

const ITEMS_PER_PAGE = 24;
const MINI_SWIPER_ITEMS = 5;

export default function Pagination({ products }) {
  const swiperRef = useRef();

  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pagination.value);
  const anchorPoint = useSelector((state) => state.arrangement.anchorPoint);
  const numberLength = Math.ceil(products.length / ITEMS_PER_PAGE);

  const scrollToAnchorPoint = () => {
    setTimeout(() => {
      anchorPoint.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleNumber = (index) => {
    dispatch(changePagination(index));
    scrollToAnchorPoint();
  };

  const goToSlide = (slideIndex) => {
    swiperRef.current.swiper.slideTo(slideIndex);
    handleNumber(slideIndex + 1);
  };

  // const SwiperStyle = {
  //   "--x": numberLength,
  // } as React.CSSProperties;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => goToSlide(0)}
        className={`${styles.navigation} ${
          pagination === 1 ? styles.active : ""
        }`}
      >
        <div className={styles.svgBox}></div>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
        </svg>
        <span className={styles.text}>首頁</span>
      </button>
      <Swiper
        // {...({} as any)}
        centeredSlides={true}
        className={styles.mySwiper}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        grabCursor={true}
        modules={[FreeMode]}
        ref={swiperRef}
        spaceBetween={0}
        slideToClickedSlide={true}
        slidesPerView={
          numberLength < MINI_SWIPER_ITEMS ? numberLength : MINI_SWIPER_ITEMS
        }
        style={{ "--x": numberLength }}
      >
        {Array.from({ length: numberLength }, (_, index) => (
          <SwiperSlide key={index}>
            <button
              onClick={() => handleNumber(index + 1)}
              className={`${styles.button} ${
                pagination === index + 1 ? styles.active : ""
              }`}
            >
              <span className={styles.text}>{index + 1}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => goToSlide(numberLength - 1)}
        className={`${styles.navigation} ${
          pagination === numberLength ? styles.active : ""
        }`}
      >
        <span className={styles.text}>最後</span>
        <div className={styles.svgBox}>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </div>
      </button>
    </div>
  );
}
