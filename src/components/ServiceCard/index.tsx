import styles from "./index.module.scss";

interface ServiceItem {
  id: number;
  image: string;
  name: string;
  title: string;
  text: string;
}

interface ServiceCardProps {
  item: ServiceItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div className={styles.card} key={item.id}>
      <div className={styles.imgBox}>
        <img className={styles.photo} src={item.image} alt={item.name} />
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.text}>{item.text}</p>
        </div>
      </div>
    </div>
  );
}
