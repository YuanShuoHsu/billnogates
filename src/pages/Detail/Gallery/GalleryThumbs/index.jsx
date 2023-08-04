import { useState } from "react";

import { Keyboard, FreeMode, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import "swiper/scss/thumbs";

import styles from "./index.module.scss";

export default function GalleryThumbs(props) {
  const { foundProduct } = props;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
          sticky: true,
        }}
        grabCursor={true}
        pagination={{
          type: "progressbar",
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {foundProduct.images.gallery &&
          foundProduct.images.gallery.map((item) => (
            <SwiperSlide key={item.name}>
              <img src={item.image} alt={item.name} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        className={styles.mySwiper}
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        speed={500}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        grabCursor={true}
        watchSlidesProgress={true}
      >
        {foundProduct.images.gallery &&
          foundProduct.images.gallery.map((item) => (
            <SwiperSlide key={item.name}>
              <img src={item.image} alt={item.name} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
