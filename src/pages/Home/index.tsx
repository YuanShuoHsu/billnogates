import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Cartbar from "../../components/Cartbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Header from "../../components/Header";
import Accouncement from "../../components/Accouncement";
import Ticker from "../../components/Ticker";
import Banner from "../../components/Banner";
import Supply from "../../components/Service";
import Arrangement from "../../components/Arrangement";
import Products from "../../components/Products";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

import styles from "./index.module.scss";

export default function Home() {
  const products = useSelector((state:RootState) => state.products.value);

  return (
    <div className={styles.home}>
      <Cartbar />
      <Sidebar />
      <ScrollToTopButton />
      <Header />
      <Accouncement />
      <Banner />
      <Ticker />
      <div className={styles.home__main}>
        <div className={styles.home__grid}>
          <Supply />
        </div>
        <div className={styles.home__grid}>
          <Arrangement />
        </div>
        <div className={styles.home__grid}>
          <Products products={products} />
        </div>
        <div className={styles.home__grid}>
          <Pagination products={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
