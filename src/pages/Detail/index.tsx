import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Cartbar from "../../components/Cartbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Gallery from "./Gallery";
import Commodity from "./Commodity";

import products from "../../dataset/products";

import styles from "./index.module.scss";

export default function Detail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const foundProduct = products.find(
    (detailObj) => detailObj.id === Number(productId)
  );

  useEffect(() => {
    if (!foundProduct) {
      navigate("/detail/1");
    }
  }, [foundProduct, navigate]);

  return (
    <div className={styles.detail}>
      <Cartbar />
      <Sidebar />
      <ScrollToTopButton />
      <Header />
      <div className={styles.detail__main}>
        <div className={styles.detail__grid}>
          {foundProduct && <Gallery foundProduct={foundProduct} />}
        </div>
        <div className={styles.detail__grid}>
          {foundProduct && <Commodity foundProduct={foundProduct} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
