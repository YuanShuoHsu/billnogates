import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../utils/firebase";
import { getDocs, collection } from "firebase/firestore";

export default function Coupon({ setDiscount }) {
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

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCouponSubmit(event);
    }
  };

  return (
    <div className={styles.coupon}>
      <input
        className={styles.coupon__input}
        onChange={(event) => setCoupon(event.target.value)}
        onKeyDown={handleInputKeyDown}
        value={coupon}
        type="text"
        placeholder="優惠碼"
        maxLength={10}
      />
      <button
        className={styles.coupon__button}
        onClick={(event) => handleCouponSubmit(event)}
        type="button"
      >
        送出
      </button>
    </div>
  );
}
