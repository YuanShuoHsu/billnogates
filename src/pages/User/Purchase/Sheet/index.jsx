import { useState, useEffect, Fragment } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

import styles from "./index.module.scss";

export default function Sheet() {
  const navigate = useNavigate();

  const { sheetId } = useParams();

  const [history, setHistory] = useState(null);

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const docRef = doc(db, "purchase", user.uid);
        getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            const { history } = docSnap.data();
            setHistory(history.reverse());
          } else {
            setHistory([]);
            // doc.data() will be undefined in this case
            // console.log("No such document!");
          }
        });
      } else {
        // User is signed out

        alert("請先登入會員");
        navigate("/membership/login");
      }
    });
    return () => userState();
  }, [navigate]);

  useEffect(() => {
    if (isNaN(sheetId)) {
      navigate("/user/purchase/1");
    } else {
      if (history && !history[sheetId - 1]) {
        navigate("/user/purchase/1");
      }
    }
  }, [history, sheetId, navigate]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
    return `${year}/${month}/${day}(${dayOfWeek})`;
  };

  const getTotalPrice = () => {
    const { sum, discount, deliveryFee } = history[sheetId - 1].information;

    let total = sum;

    if (discount !== null && discount !== 0) {
      if (discount < 1) {
        total *= discount;
      } else {
        total -= discount;
      }
    }

    if (sum < 1000 && discount !== 0 && deliveryFee !== null) {
      total += deliveryFee;
    }

    return Math.round(total);
  };

  const renderDiscountText = () => {
    const discount = history[sheetId - 1].information.discount;

    if (discount === null || discount === 0) {
      return null;
    }

    if (discount < 1) {
      return `${discount * 10}折`;
    } else {
      return `折${discount}`;
    }
  };

  const renderFeeText = () => {
    const { sum, discount, deliveryFee } = history[sheetId - 1].information;

    if (sum < 1000) {
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
    <div className={styles.sheet}>
      {!history ? (
        <span className={styles.text}>資料讀取中...</span>
      ) : history.length === 0 ? (
        <span className={styles.text}>無購買紀錄</span>
      ) : !history[sheetId - 1] ? null : (
        <Fragment>
          {history[sheetId - 1].information.pay !== "銀行轉帳" ? null : (
            <div className={styles.bank}>
              <h2 className={styles.title}>銀行轉帳</h2>
              <p className={styles.text}>銀行名稱：玉山銀行(808)</p>
              <p className={styles.text}>帳戶名稱：許元馨</p>
              <p className={styles.text}>帳號：</p>
              <p className={styles.text}>
                請於{" "}
                {history[sheetId - 1] &&
                  formatDate(
                    new Date(
                      history[sheetId - 1].information.timestamp
                        .toDate()
                        .getTime() +
                        3 * 24 * 60 * 60 * 1000
                    )
                  )}{" "}
                23:59
                前完成匯款，逾時未付款皆視為取消訂單。匯款完成後，將於一週內進行出貨程序。如有任何疑慮，請私訊
                Instagram -《比爾公主沒蓋子》billnogates2407。
              </p>
            </div>
          )}
          {history[sheetId - 1].product.map((item, index) => (
            <Fragment key={index}>
              <div className={styles.container}>
                <div className={styles.box}>
                  <div className={styles.imgBox}>
                    <img
                      className={styles.image}
                      src={item.image}
                      alt={item.name}
                    />
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
                    <span className={styles.text}>
                      {item.price * item.number}
                    </span>
                  </div>
                </div>
              </div>
              <span className={styles.line} />
            </Fragment>
          ))}
          {
            <div className={styles.footer}>
              <div className={styles.total}>
                <span className={`${styles.totalText} ${styles.sum}`}>
                  合計：NT${getTotalPrice()}
                </span>
                {renderDiscountText() && (
                  <span className={`${styles.totalText} ${styles.rebate}`}>
                    {renderDiscountText()}
                  </span>
                )}
                {renderFeeText() && (
                  <span className={`${styles.totalText} ${styles.fee}`}>
                    {renderFeeText()}
                  </span>
                )}
              </div>
            </div>
          }
        </Fragment>
      )}
    </div>
  );
}
