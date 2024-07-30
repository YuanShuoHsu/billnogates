import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../utils/firebase";

import HeaderSearchButton from "./HeaderSearchButton";
import HeaderCartbarButton from "./HeaderCartbarButton";
import HeaderSidebarButton from "./HeaderSidebarButton";

import styles from "./index.module.scss";

export default function HeaderButtonGroup() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setCurrentUser(user);
      } else {
        // User is signed out
      }
    });
  }, []);

  const location = useLocation();
  const { pathname } = location;

  const renderUserButton = () => {
    switch (pathname) {
      case "/membership/login":
        return;
      case "/membership/register":
        return;
      case "/membership/forget":
        return;
      case "/user/profile":
        return;
      case "/user/purchase":
        return;
      default:
        return currentUser ? (
          <Link className={styles.link} to="/user">
            <button
              aria-label="go User"
              className={`${styles.button} ${styles.customer} ${styles.active}`}
            >
              <div className={styles.svgBox}>
                <svg
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
              <span className={styles.name}>
                {currentUser.uid.slice(0, 10)}
              </span>
            </button>
          </Link>
        ) : (
          <Link className={styles.link} to="/membership/login">
            <button
              aria-label="go Membership"
              className={`${styles.button} ${styles.customer}`}
            >
              <div className={styles.svgBox}>
                <svg
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
            </button>
          </Link>
        );
    }
  };

  return (
    <div className={styles.headerButton}>
      <HeaderSearchButton />
      {renderUserButton()}
      <HeaderCartbarButton />
      <HeaderSidebarButton />
    </div>
  );
}
