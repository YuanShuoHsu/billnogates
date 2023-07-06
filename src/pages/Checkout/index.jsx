import React, { useState, useEffect, Fragment } from "react";

import { useNavigate } from "react-router-dom";

import {
  doc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";

import { useDispatch, useSelector } from "react-redux";
import { resetCartbarItem } from "../../store/slice/cartbarItem";

import Cartbar from "../../components/Cartbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Order from "./Order";

import styles from "./index.module.scss";

export default function Checkout() {
  const navigate = useNavigate();

  const [couponArray, setCouponArray] = useState([]);

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const docRef = collection(db, "coupons");
        getDocs(docRef).then((querySnapshot) => {
          const keyValueArray = [];
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            const key = doc.id;
            const value = doc.data();
            keyValueArray.push({ [key]: value });
          });
          setCouponArray(keyValueArray);
        });
      } else {
        // User is signed out

        alert("請先登入會員");
        navigate("/membership/login");
      }
    });
    return () => userState();
  }, [navigate]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(null);
  const [send, setSend] = useState("");
  const [address, setAddress] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [remark, setRemark] = useState("");
  const [pay, setPay] = useState("");
  const [deliveryFee, setDeliveryFee] = useState(null);
  const [afterFiveYards, setAfterFiveYards] = useState("");

  const dispatch = useDispatch();
  const cartbarItem = useSelector((state) => state.cartbarItem.value);

  const renderTotal = () => {
    let sum = 0;
    cartbarItem &&
      cartbarItem.forEach((item) => (sum += item.number * item.price));
    return sum;
  };

  const handleSubmit = async (event) => {
    if (cartbarItem.length !== 0) {
      event.preventDefault();
      await addDataToCloudFirestore();
      dispatch(resetCartbarItem());

      switch (pay) {
        case "銀行轉帳":
          navigate("/remittance", { state: { keyWord: "checkout" } });
          break;
        default:
          break;
      }
    }
  };

  const handleCouponSubmit = (event) => {
    event.preventDefault();
    const couponFind = couponArray.find(
      (element) => Object.keys(element)[0] === coupon
    );
    if (couponFind) {
      const { discount, timestamp } = couponFind[coupon];

      const now = new Date();
      if (now > timestamp.toDate()) {
        alert("過期優惠碼");
      } else {
        setDiscount(discount);
      }
    } else {
      alert("無效優惠碼");
    }
  };

  const handleSend = (target) => {
    setSend(target.value);
    switch (target.value) {
      case "郵局寄送":
        setDeliveryFee(80);
        break;
      case "7-ELEVEN":
        setDeliveryFee(60);
        break;
      case "FamilyMart":
        setDeliveryFee(60);
        break;
      default:
        break;
    }
  };

  const handleSave = (event, type) => {
    const { target } = event;
    switch (type) {
      case "coupon":
        setCoupon(target.value);
        break;
      case "send":
        handleSend(target);
        setAddress("");
        break;
      case "address":
        setAddress(target.value);
        break;
      case "lastName":
        setLastName(target.value);
        break;
      case "firstName":
        setFirstName(target.value);
        break;
      case "email":
        setEmail(target.value);
        break;
      case "phoneNumber":
        const number = target.value.replace(/[^0-9]/g, "");
        setPhoneNumber(number);
        break;
      case "remark":
        setRemark(target.value);
        break;
      case "pay":
        setPay(target.value);
        setAfterFiveYards("");
        break;
      case "afterFiveYards":
        const yard = target.value.replace(/[^0-9]/g, "");
        setAfterFiveYards(yard);
        break;
      default:
        break;
    }
  };

  const renderSwitchSend = (send) => {
    switch (send) {
      case "郵局寄送":
        return (
          <div className={styles.content}>
            <input
              onChange={(event) => handleSave(event, "address")}
              value={address}
              className={styles.input}
              type="text"
              placeholder="地址"
              maxLength={40}
              required
            />
          </div>
        );
      case "7-ELEVEN":
        return (
          <div className={styles.content}>
            <div className={styles.href}>
              <a
                className={styles.a}
                href="https://emap.pcsc.com.tw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                7-ELEVEN 門市查詢
              </a>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </div>
            <input
              onChange={(event) => handleSave(event, "address")}
              value={address}
              className={styles.input}
              type="text"
              placeholder="門市名稱"
              maxLength={10}
              required
            />
          </div>
        );
      case "FamilyMart":
        return (
          <div className={styles.content}>
            <div className={styles.href}>
              <a
                className={styles.a}
                href="https://www.family.com.tw/Marketing/Map"
                target="_blank"
                rel="noopener noreferrer"
              >
                FamilyMart 門市查詢
              </a>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </div>
            <input
              onChange={(event) => handleSave(event, "address")}
              value={address}
              className={styles.input}
              type="text"
              placeholder="店舖名"
              maxLength={10}
              required
            />
          </div>
        );
      default:
        return;
    }
  };

  const renderSwitchPay = (pay) => {
    switch (pay) {
      case "銀行轉帳":
        return (
          <div className={styles.content}>
            <input
              onChange={(event) => handleSave(event, "afterFiveYards")}
              value={afterFiveYards}
              className={styles.input}
              type="text"
              placeholder="帳號末五碼"
              minLength={5}
              maxLength={5}
              required
            />
          </div>
        );
      default:
        return;
    }
  };

  const addDataToCloudFirestore = () => {
    const setRef = doc(db, "purchase", auth.currentUser.uid);
    setDoc(setRef, {}, { merge: true });

    const updateRef = doc(db, "purchase", auth.currentUser.uid);
    updateDoc(updateRef, {
      history: arrayUnion({
        product: cartbarItem,
        information: {
          send: send,
          address: address,
          lastName: lastName,
          firstName: firstName,
          email: email,
          phoneNumber: phoneNumber,
          remark: remark,
          pay: pay,
          afterFiveYards: afterFiveYards,
          sum: renderTotal(),
          deliveryFee: renderTotal() < 1000 && discount !== 0 ? deliveryFee : 0,
          discount: discount,
          timestamp: Timestamp.fromDate(new Date()),
        },
      }),
    });
  };

  return (
    <div className={styles.Checkout}>
      <Cartbar />
      <Sidebar />
      <ScrollToTopButton />
      <Header />
      <form onSubmit={handleSubmit} className={styles.main}>
        <div className={styles.grid}>
          <h2 className={styles.title}>購買商品</h2>
          {cartbarItem.length === 0 ? (
            <p className={styles.p}>目前還是空的</p>
          ) : (
            <div className={styles.product}>
              {cartbarItem &&
                cartbarItem.map((item) => (
                  <Order item={item} key={`${item.id} ${item.choose}`} />
                ))}
              <div className={styles.item}>
                <div className={styles.total}>
                  {discount !== null ? (
                    discount === 0 ? (
                      <Fragment>
                        <span className={styles.text}>
                          合計：NT${renderTotal()}
                        </span>
                        <span className={`${styles.text} ${styles.fee}`}>
                          免運
                        </span>
                      </Fragment>
                    ) : discount < 1 ? (
                      <Fragment>
                        {renderTotal() < 1000 ? (
                          <span className={styles.text}>
                            合計：NT${renderTotal() * discount + deliveryFee}
                          </span>
                        ) : (
                          <span className={styles.text}>
                            合計：NT${renderTotal() * discount}
                          </span>
                        )}
                        <span className={`${styles.text} ${styles.fee}`}>
                          {discount * 10}折
                        </span>
                        {renderTotal() < 1000 ? (
                          deliveryFee !== null ? (
                            <span className={`${styles.text} ${styles.fee}`}>
                              運費{deliveryFee}
                            </span>
                          ) : null
                        ) : (
                          <span className={`${styles.text} ${styles.fee}`}>
                            免運
                          </span>
                        )}
                      </Fragment>
                    ) : (
                      <Fragment>
                        {renderTotal() < 1000 ? (
                          <span className={styles.text}>
                            合計：NT${renderTotal() - discount + deliveryFee}
                          </span>
                        ) : (
                          <span className={styles.text}>
                            合計：NT${renderTotal() - discount}
                          </span>
                        )}
                        <span className={`${styles.text} ${styles.fee}`}>
                          折{discount}
                        </span>
                        {renderTotal() < 1000 ? (
                          deliveryFee !== null ? (
                            <span className={`${styles.text} ${styles.fee}`}>
                              運費{deliveryFee}
                            </span>
                          ) : null
                        ) : (
                          <span className={`${styles.text} ${styles.fee}`}>
                            免運
                          </span>
                        )}
                      </Fragment>
                    )
                  ) : deliveryFee !== null && discount !== 0 ? (
                    renderTotal() < 1000 ? (
                      <Fragment>
                        <span className={styles.text}>
                          合計：NT${renderTotal() + deliveryFee}
                        </span>
                        <span className={`${styles.text} ${styles.fee}`}>
                          運費{deliveryFee}
                        </span>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <span className={styles.text}>
                          合計：NT${renderTotal()}
                        </span>
                        <span className={`${styles.text} ${styles.fee}`}>
                          免運
                        </span>
                      </Fragment>
                    )
                  ) : (
                    <span className={styles.text}>
                      合計：NT${renderTotal()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {cartbarItem.length === 0 ? null : (
          <Fragment>
            <div className={styles.grid}>
              <h2 className={styles.title}>優惠券</h2>
              <div className={styles.coupon}>
                <input
                  onChange={(event) => handleSave(event, "coupon")}
                  value={coupon}
                  className={styles.input}
                  type="text"
                  placeholder="優惠碼"
                  maxLength={10}
                />
                <button
                  onClick={(event) => handleCouponSubmit(event)}
                  className={styles.button}
                >
                  送出
                </button>
              </div>
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>聯絡資訊</h2>
              <div className={styles.information}>
                <div className={styles.name}>
                  <input
                    onChange={(event) => handleSave(event, "lastName")}
                    value={lastName}
                    className={styles.lastName}
                    type="text"
                    placeholder="姓氏"
                    maxLength={20}
                    required
                  />
                  <input
                    onChange={(event) => handleSave(event, "firstName")}
                    value={firstName}
                    className={styles.firstName}
                    type="text"
                    placeholder="名字"
                    maxLength={20}
                    required
                  />
                </div>
                <div className={styles.contact}>
                  <input
                    onChange={(event) => handleSave(event, "email")}
                    value={email}
                    className={styles.email}
                    type="text"
                    placeholder="電子郵件"
                    maxLength={40}
                    required
                  />
                  <input
                    onChange={(event) => handleSave(event, "phoneNumber")}
                    value={phoneNumber}
                    className={styles.phone}
                    type="text"
                    placeholder="手機號碼"
                    minLength={10}
                    maxLength={10}
                    required
                  />
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>寄件方式</h2>
              <div className={styles.box}>
                <div className={styles.radio}>
                  <input
                    onChange={(event) => handleSave(event, "send")}
                    className={styles.input}
                    type="radio"
                    name="send"
                    value="郵局寄送"
                    id="郵局寄送"
                    checked={send === "郵局寄送"}
                    required
                  />
                  <label className={styles.label} htmlFor="郵局寄送">
                    <div className={styles.imageBox}>
                      <img
                        className={styles.image}
                        src={
                          require("../../images/checkout/Chunghwa_Post_Logo.svg")
                            .default
                        }
                        alt="郵局"
                      />
                    </div>
                    <span className={styles.text}>郵局寄送</span>
                  </label>
                </div>
                <div className={styles.radio}>
                  <input
                    onChange={(event) => handleSave(event, "send")}
                    className={styles.input}
                    type="radio"
                    name="send"
                    value="7-ELEVEN"
                    id="7-ELEVEN"
                    checked={send === "7-ELEVEN"}
                    required
                  />
                  <label className={styles.label} htmlFor="7-ELEVEN">
                    <div className={styles.imageBox}>
                      <img
                        className={styles.image}
                        src={
                          require("../../images/checkout/7-eleven_logo.svg")
                            .default
                        }
                        alt="7-ELEVEN"
                      />
                    </div>
                    <span className={styles.text}>7-ELEVEN</span>
                  </label>
                </div>
                <div className={styles.radio}>
                  <input
                    onChange={(event) => handleSave(event, "send")}
                    className={styles.input}
                    type="radio"
                    name="send"
                    value="FamilyMart"
                    id="FamilyMart"
                    checked={send === "FamilyMart"}
                    required
                  />
                  <label className={styles.label} htmlFor="FamilyMart">
                    <div className={styles.imageBox}>
                      <img
                        className={styles.image}
                        src={
                          require("../../images/checkout/FamilyMart_Logo_(2016-).svg")
                            .default
                        }
                        alt="FamilyMart"
                      />
                    </div>
                    <span className={styles.text}>FamilyMart</span>
                  </label>
                </div>
              </div>
              {renderSwitchSend(send)}
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>付款方式</h2>
              <div className={styles.box}>
                <div className={styles.radio}>
                  <input
                    onChange={(event) => handleSave(event, "pay")}
                    className={styles.input}
                    type="radio"
                    name="pay"
                    value="銀行轉帳"
                    id="銀行轉帳"
                    checked={pay === "銀行轉帳"}
                    required
                  />
                  <label className={styles.label} htmlFor="銀行轉帳">
                    <svg
                      className={styles.svg}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h32l-18.8 75.1c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z" />
                    </svg>
                    <span className={styles.text}>銀行轉帳</span>
                  </label>
                </div>
              </div>
              {renderSwitchPay(pay)}
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>訂單備註</h2>
              <input
                onChange={(event) => handleSave(event, "remark")}
                value={remark}
                className={styles.input}
                type="text"
                placeholder="留言給賣家"
                maxLength={80}
              />
            </div>
            <div className={styles.buy}>
              <button className={styles.button}>立即下單</button>
            </div>
          </Fragment>
        )}
      </form>
      <Footer />
    </div>
  );
}
