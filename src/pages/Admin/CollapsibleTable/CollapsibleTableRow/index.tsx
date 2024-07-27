import { useState, Fragment } from "react";

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

  return (
    <Fragment>
      <tr className={styles.tbodyRow}>
        <td className={styles.tbodyCell}>
          <AngleDown  className={styles.angleDown} onClick={() => setOpen(!open)} />
        </td>
        <td className={styles.tbodyCell}>{userId}</td>
      </tr>
      {open && (
        <tr>
          <td colSpan={2} style={{ padding: 0 }}>
            <div style={{ margin: '1em' }}>
              <h6>Orders</h6>
              <table style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Sum</th>
                    <th>Delivery Fee</th>
                    <th>Address</th>
                    <th>Remark</th>
                    <th>Payment</th>
                    <th>Send Method</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Discount</th>
                    <th>Products</th>
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
      )}
    </Fragment>
  );
}

export default CollapsibleTableRow;
