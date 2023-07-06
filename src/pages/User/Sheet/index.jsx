import { useState, useEffect, Fragment } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../utils/firebase";
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

  const date = () => {
    const { information } = history[sheetId - 1];
    const { timestamp } = information;

    return timestamp.toDate();
  };

  const addDays = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
  };

  const newDate = (days) => {
    return addDays(date(), days);
  };

  const renderGetDay = (day) => {
    switch (day) {
      case 0:
        return "日";
      case 1:
        return "一";
      case 2:
        return "二";
      case 3:
        return "三";
      case 4:
        return "四";
      case 5:
        return "五";
      case 6:
        return "六";
      default:
        return;
    }
  };

  const renderDate = (days) => {
    if (history) {
      return `${newDate(days).getFullYear()}/${
        newDate(days).getMonth() + 1
      }/${newDate(days).getDate()}(${renderGetDay(newDate(days).getDay())})`;
    }
  };

  return (
    <div className={styles.Sheet}>
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
                請於 {renderDate(3)} 23:59
                前完成匯款，逾時未付款皆視為取消訂單。匯款完成後，將於一週內進行出貨程序。如有任何疑慮，請私訊
                Instagram -《比爾公主沒蓋子》billnogates2407。
              </p>
            </div>
          )}
          {history[sheetId - 1].product.map((item, index) => (
            <Fragment key={index}>
              <div className={styles.container}>
                <div className={styles.box}>
                  <div className={styles.photo}>
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
                {history[sheetId - 1].information.discount !== null ? (
                  history[sheetId - 1].information.discount === 0 ? (
                    <Fragment>
                      <span className={styles.text}>
                        合計：NT${history[sheetId - 1].information.sum}
                      </span>
                      <span className={`${styles.text} ${styles.fee}`}>
                        免運
                      </span>
                    </Fragment>
                  ) : history[sheetId - 1].information.discount < 1 ? (
                    <Fragment>
                      <span className={styles.text}>
                        合計：NT$
                        {history[sheetId - 1].information.sum *
                          history[sheetId - 1].information.discount +
                          history[sheetId - 1].information.deliveryFee}
                      </span>
                      <span className={`${styles.text} ${styles.fee}`}>
                        {history[sheetId - 1].information.discount * 10}折
                      </span>
                      {history[sheetId - 1].information.deliveryFee === 0 ? (
                        <span className={`${styles.text} ${styles.fee}`}>
                          免運
                        </span>
                      ) : (
                        <span className={`${styles.text} ${styles.fee}`}>
                          運費{history[sheetId - 1].information.deliveryFee}
                        </span>
                      )}
                    </Fragment>
                  ) : (
                    <Fragment>
                      <span className={styles.text}>
                        合計：NT$
                        {history[sheetId - 1].information.sum -
                          history[sheetId - 1].information.discount +
                          history[sheetId - 1].information.deliveryFee}
                      </span>
                      <span className={`${styles.text} ${styles.fee}`}>
                        折{history[sheetId - 1].information.discount}
                      </span>
                      {history[sheetId - 1].information.deliveryFee === 0 ? (
                        <span className={`${styles.text} ${styles.fee}`}>
                          免運
                        </span>
                      ) : (
                        <span className={`${styles.text} ${styles.fee}`}>
                          運費{history[sheetId - 1].information.deliveryFee}
                        </span>
                      )}
                    </Fragment>
                  )
                ) : history[sheetId - 1].information.deliveryFee === 0 ? (
                  <Fragment>
                    <span className={styles.text}>
                      合計：NT${history[sheetId - 1].information.sum}
                    </span>
                    <span className={`${styles.text} ${styles.fee}`}>免運</span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className={styles.text}>
                      合計：NT$
                      {history[sheetId - 1].information.sum +
                        history[sheetId - 1].information.deliveryFee}
                    </span>
                    <span className={`${styles.text} ${styles.fee}`}>
                      運費{history[sheetId - 1].information.deliveryFee}
                    </span>
                  </Fragment>
                )}
              </div>
            </div>
          }
        </Fragment>
      )}
    </div>
  );
}
