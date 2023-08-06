import styles from "./index.module.scss";

interface Dimension {
  [size: string]: number;
}

interface Color {
  [rgb: string]: string;
}

interface ImageData {
  main: {
    src: string;
    alt: string;
  }
  gallery: {
    src: string;
    alt: string;
  }[];
  description: {
    src: string;
    alt: string;
  }[];
  information: {
    src: string;
    alt: string;
  }[];
}

interface Item {
  id: number;
  name: string;
  dimensions: Dimension;
  colors: Color;
  images: ImageData;
  price: number;
  number: number;
  selectedColor: string;
  selectedSize: string;
}

interface OrderProps {
  item: Item;
}

export default function Order({ item }: OrderProps) {
  return (
    <div className={styles.order}>
      <div className={styles.main}>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img
              className={styles.image}
              src={item.images.main.src}
              alt={item.images.main.alt}
            />
          </div>
          <div className={styles.information}>
            <h3 className={styles.title}>{item.name}</h3>
            <p className={styles.text}>
              {item.selectedSize}、{item.selectedColor}
            </p>
            <p className={styles.text}>NT${item.price}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <span className={styles.text}>數量</span>
            <span className={styles.text}>{item.number}</span>
          </div>
          <div className={styles.content}>
            <span className={styles.text}>金額</span>
            <span className={styles.text}>{item.price * item.number}</span>
          </div>
        </div>
      </div>
      <div className={styles.gap}>
        <span className={styles.line}></span>
      </div>
    </div>
  );
}
