import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

import Cartbar from "../../components/Cartbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./index.module.scss";

interface History {
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

export default function Remittance() {
  const location = useLocation();
  const { state } = location;
  const { keyWord } = state || {};

  const navigate = useNavigate();

  useEffect(() => {
    if (keyWord === "checkout") {
    } else {
      alert("請先完成結帳");
      navigate("/checkout");
    }
  }, [keyWord, navigate]);

  const [history, setHistory] = useState<History | null>(null);

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const docRef = doc(db, "purchase", user.uid);
        getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            const { history } = docSnap.data();
            setHistory(history[0]);
          } else {
            // doc.data() will be undefined in this case
            // console.log("No such document!");
          }
        });
      } else {
        // User is signed out

        if (keyWord) {
          alert("請先登入會員");
          navigate("/membership/login");
        }
      }
    });
    return () => userState();
  }, [navigate, keyWord]);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
    return `${year}/${month}/${day}(${dayOfWeek})`;
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const renderInformation = (type: string) => {
    if (history) {
      const { information } = history;
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
    <div className={styles.remittance}>
      <Cartbar />
      <Sidebar />
      <ScrollToTopButton />
      <Header />
      <div className={styles.remittance__main}>
        <div className={styles.remittance__grid}>
          <h2 className={styles.remittance__title}>您的訂單即將完成</h2>
          <div className={styles.remittance__quotation}>
            <div className={styles.remittance__svgBox}>
              <svg
                className={styles.remittance__svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
              </svg>
            </div>
            <span className={styles.remittance__quotationText}>
              此訂單中所需支付的金額為 NT${renderInformation("total")}
            </span>
          </div>
        </div>
        <div className={styles.remittance__grid}>
          <h2 className={styles.remittance__title}>銀行轉帳</h2>
          <p className={styles.remittance__text}>銀行名稱：玉山銀行(808)</p>
          <p className={styles.remittance__text}>帳戶名稱：許元馨</p>
          <p className={styles.remittance__text}>帳號：</p>
          <p className={styles.remittance__text}>
            請於{" "}
            {history &&
              formatDate(
                new Date(
                  history.information.timestamp.toDate().getTime() +
                    3 * 24 * 60 * 60 * 1000
                )
              )}{" "}
            23:59
            前完成匯款，逾時未付款皆視為取消訂單。匯款完成後，將於一週內進行出貨程序。如有任何疑慮，請私訊
            Instagram -《比爾公主沒蓋子》billnogates2407。
          </p>
        </div>
        <div className={styles.remittance__grid}>
          <h2 className={styles.remittance__title}>訂單詳情</h2>
          <div className={styles.remittance__wrap}>
            <div className={styles.remittance__content}>
              <h3 className={styles.remittance__subTitle}>下單時間</h3>
              <p className={styles.remittance__subText}>
                {history && formatDate(history.information.timestamp.toDate())}{" "}
                {history && formatTime(history.information.timestamp.toDate())}
              </p>
            </div>
            <div className={styles.remittance__content}>
              <h3 className={styles.remittance__subTitle}>金額細項</h3>
              <p className={styles.remittance__subText}>
                總額：NT${renderInformation("sum")}
              </p>
              <p className={styles.remittance__subText}>
                折扣：{renderInformation("discount")}
              </p>
              <p className={styles.remittance__subText}>
                運費：NT${renderInformation("deliveryFee")}
              </p>
              <p className={styles.remittance__subText}>
                合計：NT${renderInformation("total")}
              </p>
            </div>
            <div className={styles.remittance__content}>
              <h3 className={styles.remittance__subTitle}>聯絡資訊</h3>
              <p className={styles.remittance__subText}>
                {renderInformation("name")}
              </p>
              <p className={styles.remittance__subText}>
                {renderInformation("phoneNumber")}
              </p>
              <p className={styles.remittance__subText}>
                {renderInformation("email")}
              </p>
            </div>
            <div className={styles.remittance__content}>
              <h3 className={styles.remittance__subTitle}>寄件方式</h3>
              <p className={styles.remittance__subText}>
                {renderInformation("send")}
              </p>
              <p className={styles.remittance__subText}>
                {renderInformation("address")}
              </p>
            </div>
            <div className={styles.remittance__content}>
              <h3 className={styles.remittance__subTitle}>付款方式</h3>
              <p className={styles.remittance__subText}>
                {renderInformation("pay")}
              </p>
              <p className={styles.remittance__subText}>
                {renderInformation("afterFiveYards")}
              </p>
            </div>
            <div className={styles.remittance__content}>
              <h3 className={styles.remittance__subTitle}>訂單備註</h3>
              <p className={styles.remittance__subText}>
                {renderInformation("remark")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
