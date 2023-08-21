import { Fragment } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { useLocation } from "react-router-dom";

import Arrangement from "../../components/Arrangement";
import Cartbar from "../../components/Cartbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Sidebar from "../../components/Sidebar";

import styles from "./index.module.scss";

export default function Find() {
  const location = useLocation();
  const { state } = location;
  const { keyWord } = state || {};

  const products = useSelector((state: RootState) => state.products.value);
  const findProduct = products.filter((item) =>
    keyWord ? item.name.toLowerCase().includes(keyWord.toLowerCase()) : null
  )

  console.log(findProduct)
  return (
    <div className={styles.find}>
      <Cartbar />
      <Sidebar />
      <ScrollToTopButton />
      <Header />
      <div className={styles.main}>
        {findProduct.length === 0 ? (
          <h2 className={styles.title}>無符合「{keyWord}」商品</h2>
        ) : (
          <Fragment>
            <div className={styles.grid}>
              <Arrangement />
            </div>
            <div className={styles.grid}>
              <Products products={findProduct} />
            </div>
            <div className={styles.grid}>
              <Pagination products={findProduct} />
            </div>
          </Fragment>
        )}
      </div>
      <Footer />
    </div>
  );
}
