import services from "../../dataset/service";

import ServiceCard from "../ServiceCard";

import styles from "./index.module.scss";

export default function Service() {
  return (
    <div className={styles.service}>
      {services &&
        services.map((item) => <ServiceCard item={item} key={item.id} />)}
    </div>
  );
}
