import GalleryThumbs from "./GalleryThumbs";
import GalleryOptions from "./GalleryOptions";

import styles from "./index.module.scss";

export default function Gallery(props) {
  const { foundProduct } = props;

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__box}>
        <GalleryThumbs foundProduct={foundProduct} />
      </div>
      <div className={styles.gallery__box}>
        <GalleryOptions foundProduct={foundProduct} />
      </div>
    </div>
  );
}
