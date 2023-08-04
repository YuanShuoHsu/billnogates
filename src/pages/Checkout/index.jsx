import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../utils/firebase";

import { useDispatch, useSelector } from "react-redux";
import { resetCartbarItem } from "../../store/slice/cartbarItem";

import Cartbar from "../../components/Cartbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Purchase from "./Purchase";
import Coupon from "./Coupon";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Remark from "./Remark";

import styles from "./index.module.scss";

export default function Checkout() {
  const navigate = useNavigate();

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
    return cartbarItem.reduce((sum, item) => sum + item.number * item.price, 0);
  };

  const handleSubmit = async (event) => {
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

  const addDataToCloudFirestore = async () => {
    const purchaseRef = doc(db, "purchase", auth.currentUser.uid);

    const newData = {
      product: cartbarItem,
      information: {
        send,
        address,
        lastName,
        firstName,
        email,
        phoneNumber,
        remark,
        pay,
        afterFiveYards,
        sum: renderTotal(),
        deliveryFee: renderTotal() < 1000 && discount !== 0 ? deliveryFee : 0,
        discount,
        timestamp: Timestamp.fromDate(new Date()),
      },
    };

    await getDoc(purchaseRef).then((docSnap) => {
      if (docSnap.exists()) {
        const existingData = docSnap.data();
        const updatedHistory = [newData, ...existingData.history];
        setDoc(purchaseRef, { history: updatedHistory }, { merge: true });
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
        setDoc(purchaseRef, { history: [newData] }, { merge: true });
      }
    });
  };

  const handleSetDiscount = (value) => {
    setDiscount(value);
  };

  return (
    <div className={styles.Checkout}>
      <Cartbar />
      <Sidebar />
      <ScrollToTopButton />
      <Header />
      <form onSubmit={handleSubmit} className={styles.main}>
        {cartbarItem.length === 0 ? (
          <div className={styles.grid}>
            <h2 className={styles.title}>購買商品</h2>
            <p className={styles.p}>目前還是空的</p>
          </div>
        ) : (
          <Fragment>
            <div className={styles.grid}>
              <h2 className={styles.title}>購買商品</h2>
              <Purchase
                cartbarItem={cartbarItem}
                discount={discount}
                renderTotal={renderTotal}
                deliveryFee={deliveryFee}
              />
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>優惠券</h2>
              <Coupon setDiscount={handleSetDiscount} />
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>聯絡資訊</h2>
              <Contact
                lastName={lastName}
                firstName={firstName}
                email={email}
                phoneNumber={phoneNumber}
                handleSave={handleSave}
              />
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>寄件方式</h2>
              <Delivery handleSave={handleSave} address={address} send={send} />
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>付款方式</h2>
              <Payment
                handleSave={handleSave}
                pay={pay}
                afterFiveYards={afterFiveYards}
              />
            </div>
            <div className={styles.grid}>
              <h2 className={styles.title}>訂單備註</h2>
              <Remark handleSave={handleSave} remark={remark} />
            </div>
            <div className={styles.grid}>
              <button className={styles.button} type="submit">
                立即下單
              </button>
            </div>
          </Fragment>
        )}
      </form>
      <Footer />
    </div>
  );
}
