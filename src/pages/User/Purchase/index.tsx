import { useState, useEffect, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

import { formatDate,formatTime } from "../../../utils/formatDateTime";

import styles from "./index.module.scss";

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
    timestamp: { toDate: () => Date };
  };
}

export default function Purchase() {
  const navigate = useNavigate();

  const [history, setHistory] = useState<HistoryItem[] | null>(null);

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const docRef = doc(db, "purchase", user.uid);
        getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            const { history } = docSnap.data();
            setHistory(history);
          } else {
            setHistory(null);
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

  // const scrollRef = useRef(null);

  // useEffect(() => {
  //     if (history) {
  //         const container = scrollRef.current;
  //         const observer = new IntersectionObserver(entries => {
  //             // entries.forEach(entry => {
  //             //     // 如果目標元素進入視口
  //             //     console.log(entry)
  //             //     if (entry.isIntersecting) {
  //             //         // 將背景顏色設置為紅色
  //             //         entry.target.style.backgroundColor = 'white';
  //             //     } else {
  //             //         // 將背景顏色設置為白色
  //             //         entry.target.style.backgroundColor = 'red';
  //             //     }
  //             // });
  //         }, { root: null, rootMargin: '0px', threshold: 1 });
  //         observer.observe(container);

  //         return () => {
  //             observer.unobserve(container);
  //         };
  //     }
  // }, [history]);

  const renderInformation = (type: string, item: HistoryItem) => {
    if (history) {
      const { information } = item;
      const {
        sum,
        discount,
        deliveryFee,
        lastName,
        firstName,
        phoneNumber,
        email,
        send,
        address,
        pay,
        afterFiveYards,
        remark,
      } = information;

      switch (type) {
        case "sum":
          return sum;
        case "discount":
          if (discount === null) {
            return "無";
          } else if (discount === 0) {
            return `NT$${discount}`;
          } else if (0 < discount && discount < 1) {
            return `${discount * 10}折`;
          } else if (1 < discount) {
            return `NT$${discount}`;
          }
          break;
        case "deliveryFee":
          return deliveryFee;
        case "total":
          if (discount === null) {
            return Math.round(sum + deliveryFee);
          } else if (discount === 0) {
            return Math.round(sum);
          } else if (0 < discount && discount < 1) {
            return Math.round(sum * discount + deliveryFee);
          } else if (1 < discount) {
            return Math.round(sum - discount + deliveryFee);
          }
          break;
        case "name":
          return lastName + firstName;
        case "phoneNumber":
          return phoneNumber;
        case "email":
          return email;
        case "send":
          return send;
        case "address":
          return address;
        case "pay":
          return pay;
        case "afterFiveYards":
          return `帳號末五碼：${afterFiveYards}`;
        case "remark":
          return remark === "" ? "無" : remark;
        default:
          return;
      }
    }
  };

  return (
    <div className={styles.purchase}>
      {!history ? (
        <span className={styles.text}>資料讀取中...</span>
      ) : history.length === 0 ? (
        <span className={styles.text}>無購買紀錄</span>
      ) : (
        history.map((item, index) => {
          return (
            <Fragment key={index}>
              <Link className={styles.link} to={`${index + 1}`}>
                <div className={styles.box}>
                  <div className={styles.content}>
                    <h3 className={styles.subtitle}>下單時間</h3>
                    <p className={styles.subtext}>
                      {formatDate(item.information.timestamp.toDate())}{" "}
                      {formatTime(item.information.timestamp.toDate())}
                    </p>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.subtitle}>金額細項</h3>
                    <p className={styles.subtext}>
                      總額：NT${renderInformation("sum", item)}
                    </p>
                    <p className={styles.subtext}>
                      折扣：{renderInformation("discount", item)}
                    </p>
                    <p className={styles.subtext}>
                      運費：NT${renderInformation("deliveryFee", item)}
                    </p>
                    <p className={styles.subtext}>
                      合計：NT${renderInformation("total", item)}
                    </p>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.subtitle}>聯絡資訊</h3>
                    <p className={styles.subtext}>
                      {renderInformation("name", item)}
                    </p>
                    <p className={styles.subtext}>
                      {renderInformation("phoneNumber", item)}
                    </p>
                    <p className={styles.subtext}>
                      {renderInformation("email", item)}
                    </p>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.subtitle}>寄件方式</h3>
                    <p className={styles.subtext}>
                      {renderInformation("send", item)}
                    </p>
                    <p className={styles.subtext}>
                      {renderInformation("address", item)}
                    </p>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.subtitle}>付款方式</h3>
                    <p className={styles.subtext}>
                      {renderInformation("pay", item)}
                    </p>
                    <p className={styles.subtext}>
                      {renderInformation("afterFiveYards", item)}
                    </p>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.subtitle}>訂單備註</h3>
                    <p className={styles.subtext}>
                      {renderInformation("remark", item)}
                    </p>
                  </div>
                </div>
              </Link>
              {index !== history.length - 1 && <span className={styles.line} />}
            </Fragment>
          );
        })
      )}
    </div>
  );
}
