import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";

import styles from "./index.module.scss";

import { Autoplay, FreeMode } from "swiper/modules";

import Forms from "../../dataset/accouncement";

export default function Accouncement() {
  return (
    <Swiper
      {...({} as any)}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: false,
      }}
      className={styles.Accouncement}
      direction={"vertical"}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      grabCursor={true}
      loop={true}
      modules={[Autoplay, FreeMode]}
      slidesPerView={1}
      spaceBetween={20}
      speed={1000}
    >
      {Forms &&
        Forms.map((item) => (
          <SwiperSlide key={item.id}>
            <span className={styles.text}>{item.text}</span>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
