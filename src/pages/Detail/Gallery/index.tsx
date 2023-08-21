import GalleryThumbs from "./GalleryThumbs";
import GalleryOptions from "./GalleryOptions";

import { Products } from "../../../typings/products";

import styles from "./index.module.scss";

interface GalleryProps {
  foundProduct: Products;
}

export default function Gallery({ foundProduct }: GalleryProps) {
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
