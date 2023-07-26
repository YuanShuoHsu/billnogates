import GalleryThumbs from "./GalleryThumbs";
import GalleryOptions from "./GalleryOptions";

import styles from "./index.module.scss";

export default function Gallery(props) {
  const { findResult } = props;

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__box}>
        <GalleryThumbs findResult={findResult} />
      </div>
      <div className={styles.gallery__box}>
        <GalleryOptions findResult={findResult} />
      </div>
    </div>
  );
}
