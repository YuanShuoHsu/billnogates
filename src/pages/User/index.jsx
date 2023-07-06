import Cartbar from "../../components/Cartbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Header from "../../components/Header";
import Profile from "./Profile";
import InfiniteScroll from "./Purchase";
import Sheet from "./Sheet";
import Footer from "../../components/Footer";

import { NavLink, Routes, Route, Navigate } from "react-router-dom";

import styles from "./index.module.scss";

export default function User() {
  return (
    <div className={styles.User}>
      <Cartbar />
      <Sidebar />
      <ScrollToTopButton />
      <Header />
      <div className={styles.main}>
        <div className={styles.group}>
          <NavLink
            className={({ isActive }) =>
              `${styles.href}` + (isActive ? ` ${styles.active}` : "")
            }
            to={"profile"}
          >
            <div className={styles.link}>
              <span className={styles.text}>會員資料</span>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.href}` + (isActive ? ` ${styles.active}` : "")
            }
            to={"purchase"}
          >
            <div className={styles.link}>
              <span className={styles.text}>購買記錄</span>
            </div>
          </NavLink>
        </div>
        <div className={styles.grid}>
          <div className={styles.box}>
            <Routes>
              <Route path="profile">
                <Route path="" element={<Profile />} />
                <Route path="*" element={<Navigate replace to="" />} />
              </Route>
              <Route path="purchase">
                <Route path="" element={<InfiniteScroll />} />
                <Route path=":sheetId">
                  <Route path="" element={<Sheet />} />
                  <Route path="*" element={<Navigate replace to="" />} />
                </Route>
              </Route>
              <Route path="*" element={<Navigate replace to="profile" />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
