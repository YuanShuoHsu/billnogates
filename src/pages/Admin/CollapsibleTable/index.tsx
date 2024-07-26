import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../../utils/firebase";

import CollapsibleTableRow from "./CollapsibleTableRow";

import styles from "./index.module.scss"

interface ProductItem {
  dimensions: { [key: string]: number };
  name: string;
  colors: { [key: string]: string };
  number: number;
  price: number;
  images: {
    description: { src: string; alt: string }[];
    gallery: { src: string; alt: string }[];
    main: { src: string; alt: string };
    information: { src: string; alt: string }[];
  };
  selectedSize: string;
  selectedColor: string;
  id: number;
}

interface HistoryItem {
  information: {
    sum: number;
    discount: number | null;
    deliveryFee: number;
    lastName: string;
    firstName: string;
    phoneNumber: string;
    email: string;
    send: string;
    address: string;
    pay: string;
    afterFiveYards: string;
    remark: string;
    timestamp: { seconds: number; nanoseconds: number };
  };
  product: ProductItem[];
}

const CollapsibleTable: React.FC = () => {
  const [history, setHistory] = useState<Record<string, HistoryItem[]>>({});

  useEffect(() => {
    const userState = onAuthStateChanged(auth, async () => {
      const collectionRef = collection(db, "purchase");
      const querySnapshot = await getDocs(collectionRef);
      const historyData: Record<string, HistoryItem[]> = {};

      for (const userDoc of querySnapshot.docs) {
        const userId = userDoc.id;
        const userHistoryData = userDoc.data().history as HistoryItem[];
        historyData[userId] = userHistoryData;
      }

      setHistory(historyData);
    });
    return () => userState();
  }, []);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.theadRow}>
            <th className={styles.theadCell} />
            <th className={styles.theadCell}>用戶 ID</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {Object.entries(history).map(([userId, orders], index) => (
            <CollapsibleTableRow key={index} userId={userId} orders={orders} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CollapsibleTable