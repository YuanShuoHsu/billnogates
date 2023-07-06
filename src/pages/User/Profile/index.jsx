import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase";

import styles from "./index.module.scss";

export default function Profile() {
  const [userId, setUserId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const providerData = user.providerData;
        // console.log(providerData);
        // Check if user has signed in with social media platform
        const isSocialMediaUser = providerData.some((provider) => {
          return ["google.com", "facebook.com"].includes(provider.providerId);
        });
        if (isSocialMediaUser) {
          // console.log('User signed in with social media platform');
          const { uid, displayName, email } = user;
          setUserId(uid);
          setUserName(displayName);
          setEmail(email);
        } else {
          // console.log('User signed in with email and password');
          const { uid, email } = user;
          setUserId(uid);
          setPhoneNumber(email.slice(0, email.length - 10));
        }
        setFirstTime(false);
      } else {
        // User is signed out

        if (firstTime) {
          alert("請先登入會員");
          navigate("/membership/login");
        }
      }
    });
    return () => userState();
  }, [navigate, firstTime]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        alert("登出成功");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // console.log(error)
      });
  };

  return (
    <div className={styles.Profile}>
      {!userId ? null : <p className={styles.text}>用戶ID：{userId}</p>}
      {!userName ? null : <p className={styles.text}>用戶名稱：{userName}</p>}
      {!email ? null : <p className={styles.text}>郵子郵件：{email}</p>}
      {!phoneNumber ? null : (
        <p className={styles.text}>手機號碼：{phoneNumber}</p>
      )}
      <button className={styles.button} onClick={handleSignOut}>
        登出
      </button>
    </div>
  );
}
