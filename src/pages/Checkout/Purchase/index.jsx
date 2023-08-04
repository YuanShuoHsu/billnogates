import Order from "./Order";
import styles from "./index.module.scss";

export default function Purchase({
  cartbarItem,
  discount,
  renderTotal,
  deliveryFee,
}) {
  const getTotalPrice = () => {
    let total = renderTotal();
    if (discount !== null && discount !== 0) {
      if (discount < 1) {
        total *= discount;
      } else {
        total -= discount;
      }
    }
    if (renderTotal() < 1000 && discount !== 0 && deliveryFee !== null) {
      total += deliveryFee;
    }
    return Math.round(total);
  };

  const renderDiscountText = () => {
    if (discount === null || discount === 0) return null;

    if (discount < 1) {
      return `${discount * 10}折`;
    } else {
      return `折${discount}`;
    }
  };

  const renderFeeText = () => {
    if (renderTotal() < 1000) {
      if (discount === 0) {
        return "免運";
      } else if (deliveryFee !== null) {
        return `運費${deliveryFee}`;
      } else {
        return null;
      }
    } else {
      return "免運";
    }
  };

  return (
    <div className={styles.purchase}>
      {cartbarItem &&
        cartbarItem.map((item) => (
          <Order item={item} key={`${item.id} ${item.selectedSize} ${item.selectedColor}`} />
        ))}
      <div className={styles.purchase__footer}>
        <div className={styles.purchase__total}>
          <span
            className={`${styles.purchase__totalText} ${styles.purchase__sum}`}
          >
            合計：NT${getTotalPrice()}
          </span>
          {renderDiscountText() && (
            <span
              className={`${styles.purchase__totalText} ${styles.purchase__rebate}`}
            >
              {renderDiscountText()}
            </span>
          )}
          {renderFeeText() && (
            <span
              className={`${styles.purchase__totalText} ${styles.purchase__fee}`}
            >
              {renderFeeText()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// import { Fragment } from "react";
// import Order from "./Order";

// import styles from "./index.module.scss";

// export default function Purchase({
//   cartbarItem,
//   discount,
//   renderTotal,
//   deliveryFee,
// }) {
//   return (
//     <div className={styles.purchase}>
//       {cartbarItem &&
//         cartbarItem.map((item) => (
//           <Order item={item} key={`${item.id} ${item.choose}`} />
//         ))}
//       <div className={styles.item}>
//         <div className={styles.total}>
//           {discount !== null ? (
//             discount === 0 ? (
//               <Fragment>
//                 <span className={styles.text}>合計：NT${renderTotal()}</span>
//                 <span className={styles.rebate} />
//                 <span className={styles.fee}>免運</span>
//               </Fragment>
//             ) : discount < 1 ? (
//               renderTotal() < 1000 ? (
//                 deliveryFee !== null ? (
//                   <Fragment>
//                     <span className={styles.text}>
//                       合計：NT${renderTotal() * discount + deliveryFee}
//                     </span>
//                     <span className={styles.rebate}>
//                       {discount * 10}折
//                     </span>
//                     <span className={styles.fee}>
//                       運費{deliveryFee}
//                     </span>
//                   </Fragment>
//                 ) : (
//                   <Fragment>
//                     <span className={styles.text}>
//                       合計：NT${renderTotal() * discount + deliveryFee}
//                     </span>
//                     <span className={styles.rebate}>
//                       {discount * 10}折
//                     </span>
//                     <span className={styles.fee} />
//                   </Fragment>
//                 )
//               ) : (
//                 <Fragment>
//                   <span className={styles.text}>
//                     合計：NT${renderTotal() * discount}
//                   </span>
//                   <span className={styles.rebate}>
//                     {discount * 10}折
//                   </span>
//                   <span className={styles.fee}>免運</span>
//                 </Fragment>
//               )
//             ) : renderTotal() < 1000 ? (
//               deliveryFee !== null ? (
//                 <Fragment>
//                   <span className={styles.text}>
//                     合計：NT${renderTotal() - discount + deliveryFee}
//                   </span>
//                   <span className={styles.rebate}>
//                     折{discount}
//                   </span>
//                   <span className={styles.fee}>
//                     運費{deliveryFee}
//                   </span>
//                 </Fragment>
//               ) : (
//                 <Fragment>
//                   <span className={styles.text}>
//                     合計：NT${renderTotal() - discount + deliveryFee}
//                   </span>
//                   <span className={styles.rebate}>
//                     折{discount}
//                   </span>
//                   <span className={styles.fee} />
//                 </Fragment>
//               )
//             ) : (
//               <Fragment>
//                 <span className={styles.text}>
//                   合計：NT${renderTotal() - discount}
//                 </span>
//                 <span className={styles.rebate}>
//                   折{discount}
//                 </span>
//                 <span className={styles.fee}>免運</span>
//               </Fragment>
//             )
//           ) : renderTotal() < 1000 ? (
//             deliveryFee !== null ? (
//               <Fragment>
//                 <span className={styles.text}>
//                   合計：NT${renderTotal() + deliveryFee}
//                 </span>
//                 <span className={styles.rebate} />
//                 <span className={styles.fee}>
//                   運費{deliveryFee}
//                 </span>
//               </Fragment>
//             ) : (
//               <Fragment>
//                 <span className={styles.text}>合計：NT${renderTotal()}</span>
//                 <span className={styles.rebate} />
//                 <span className={styles.fee} />
//               </Fragment>
//             )
//           ) : (
//             <Fragment>
//               <span className={styles.text}>合計：NT${renderTotal()}</span>
//               <span className={styles.rebate} />
//               <span className={styles.fee}>免運</span>
//             </Fragment>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
