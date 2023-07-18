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
      <div className={styles.card__imgBox}>
        <img className={styles.card__image} src={item.image} alt={item.name} />
      </div>
      <div className={styles.card__contentBox}>
        <div className={styles.card__content}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
}
