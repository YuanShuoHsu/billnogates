import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { showSearch, hideSearch } from "../../store/slice/search";
import { showCartbar } from "../../store/slice/cartbar";
import { showSidebar } from "../../store/slice/sidebar";

import styles from "./index.module.scss";

export default function HeaderButton() {
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

  const dispatch = useDispatch();
  const cartbarItem = useSelector((state) => state.cartbarItem.value);

  const handleShowHeaderSearch = () => {
    dispatch(showSearch());
  };

  const handleHideHeaderSearch = () => {
    dispatch(hideSearch());
  };

  const handleShowCartbar = () => {
    dispatch(showCartbar());
  };

  const handleShowSidebar = () => {
    dispatch(showSidebar());
  };

  const renderCartbarNumber = () => {
    return cartbarItem.reduce((count, item) => count + item.number, 0);
  };
  
  return (
    <div className={styles.headerButton}>
      <button
        onClick={handleShowHeaderSearch}
        onMouseLeave={handleHideHeaderSearch}
        aria-label="show Search"
        className={`${styles.button} ${styles.search}`}
      >
        <div className={styles.svgBox}>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </div>
      </button>
      {renderUserButton()}
      <button
        aria-label="show Cartbar"
        style={{ "--x": `${renderCartbarNumber()}` }}
        onClick={handleShowCartbar}
        className={`${styles.button} ${styles.cart} ${
          cartbarItem.length === 0 ? "" : `${styles.active}`
        }`}
      >
        <div className={styles.svgBox}>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
          </svg>
        </div>
      </button>
      <button
        aria-label="show Sidebar"
        onClick={handleShowSidebar}
        className={`${styles.button} ${styles.hamburger}`}
      >
        <div className={styles.svgBox}>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </button>
    </div>
  );
}
