import { useState, useRef, useEffect, Fragment } from "react";

import { formatDate, formatTime } from "../../../../utils/formatDateTime";

// import { ReactComponentElement } from "react";

import { ReactComponent as AngleDown } from "../../../../images/others/angle-down.svg";

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

interface CollapsibleTableRowProps {
  userId: string;
  orders: HistoryItem[];
}

const CollapsibleTableRow: React.FC<CollapsibleTableRowProps> = ({ userId, orders }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = open ? `${contentRef.current.scrollHeight}px` : "0px";
    }
  }, [open]);

  return (
    <Fragment>
      <tr className={`${styles.tbodyRow} ${open ? styles.open : ""}`}>
        <td className={styles.tbodyCell}>
          <div className={styles.iconWrapper}>
            <AngleDown className={`${styles.angleDown} ${open ? styles.open : ""}`} onClick={() => setOpen(!open)} />
          </div>
        </td>
        <td className={styles.tbodyCell}>{userId}</td>
      </tr>
      <tr className={`${styles.collapsibleTbodyRow} ${open ? styles.open : ""}`}>
        <td colSpan={2} className={styles.collapsibleTbodyCell}>
          <div ref={contentRef} className={`${styles.collapsibleTbodyCellContent} ${open ? styles.open : ""}`}>
            <h6>Orders</h6>
            <table>
              <thead>
                <tr>
                  <th>下單時間</th>
                  <th>總額</th>
                  <th>運費</th>
                  <th>地址</th>
                  <th>備註</th>
                  <th>付款方式</th>
                  <th>寄送方式</th>
                  <th>客戶姓名</th>
                  <th>電子郵件</th>
                  <th>電話號碼</th>
                  <th>折扣</th>
                  <th>商品</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(({ information: { address, deliveryFee, discount, email, firstName, lastName, pay, phoneNumber, remark, send, sum, timestamp, }, product }, orderIndex) => (
                  <tr key={orderIndex}>
                    <td>
                      {formatDate(new Date(timestamp.seconds * 1000))}{" "}
                      {formatTime(new Date(timestamp.seconds * 1000))}
                    </td>
                    <td>{sum}</td>
                    <td>{deliveryFee}</td>
                    <td>{address}</td>
                    <td>{remark}</td>
                    <td>{pay}</td>
                    <td>{send}</td>
                    <td>{lastName} {firstName}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>{discount ?? "N/A"}</td>
                    <td>
                      {product.map(({ images, name, number, price, selectedColor, selectedSize }, productIndex) => (
                        <div key={productIndex} style={{ marginBottom: "10px" }}>
                          <p>{name}</p>
                          <p>Size: {selectedSize}</p>
                          <p>Color: {selectedColor}</p>
                          <p>Quantity: {number}</p>
                          <p>Price: ${price}</p>
                          <img
                            src={images.main.src}
                            alt={images.main.alt}
                            width="50"
                          />
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </Fragment >
  );
}

export default CollapsibleTableRow;
