import styles from "./index.module.scss";

interface Item {
  name: string;
  image: string;
  choose: string[]; // 假設 choose 是一個包含兩個元素的字串陣列
  price: number;
  number: number;
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
            <img className={styles.image} src={item.image} alt={item.name} />
          </div>
          <div className={styles.information}>
            <h3 className={styles.title}>{item.name}</h3>
            <p className={styles.text}>
              {item.choose[0]}、{item.choose[1]}
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
