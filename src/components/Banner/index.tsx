import { renderToStaticMarkup } from "react-dom/server";
import { ReactNode } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";

import styles from "./index.module.scss";

import { Autoplay, FreeMode, Keyboard, Pagination } from "swiper/modules";

import SLIDES from "../../dataset/banner";

interface Bullet {
  id: number;
  image: string;
  name: string;
}

interface PaginationOptions {
  clickable: boolean;
  renderBullet: (index: number, className: string) => ReactNode;
}

export default function Banner() {
  const bullets: Bullet[] = [
    {
      id: 1,
      image: require("../../images/banner/bullets/腦袋按鈕1.svg").default,
      name: "腦袋按鈕1",
    },
    {
      id: 2,
      image: require("../../images/banner/bullets/腦袋按鈕2.svg").default,
      name: "腦袋按鈕2",
    },
    {
      id: 3,
      image: require("../../images/banner/bullets/腦袋按鈕3.svg").default,
      name: "腦袋按鈕3",
    },
  ];

  const renderCorrectBullet = (
    index: number,
    className: string,
    item: Bullet
  ): ReactNode => {
    if (index % bullets.length === item.id - 1) {
      return renderToStaticMarkup(
        <span className={className}>
          <img src={item.image} alt={item.name} />
        </span>
      );
    }
  };

  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index: number, className: string): ReactNode {
      const correctBulletIndex = index % bullets.length;
      const bulletItem = bullets[correctBulletIndex];
      return renderCorrectBullet(index, className, bulletItem);
    },
  };

  return (
    <Swiper
      {...({} as any)}
      autoHeight={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
      }}
      className={styles.Banner}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      grabCursor={true}
      keyboard={{ enabled: true }}
      loop={true}
      modules={[Autoplay, FreeMode, Keyboard, Pagination]}
      pagination={pagination}
      slidesPerView={1}
      spaceBetween={0}
      speed={500}
    >
      {SLIDES &&
        SLIDES.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.name} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
