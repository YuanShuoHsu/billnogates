import { register } from "swiper/element/bundle";

import forms from "../../dataset/accouncement";

import styles from "./index.module.scss";

register();

export default function Accouncement() {
  return (
    <swiper-container
      autoplay-delay="3000"
      autoplay-disable-on-interaction="false"
      className={styles.accouncement}
      direction="vertical"
      free-mode-enabled="true"
      free-mode-sticky="true"
      grab-cursor="true"
      loop="true"
      space-between="20"
      speed="1000"
    >
      {forms &&
        forms.map((item) => (
          <swiper-slide key={item.id}>
            <span className={styles.text}>{item.text}</span>
          </swiper-slide>
        ))}
    </swiper-container>
  );
}
