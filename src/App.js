import Searchbar from "./components/Searchbar"
import Cartbar from "./components/Cartbar"
import Sidebar from "./components/Sidebar"
import ScrollToTop from "./components/ScrollToTop"
import Recommend from "./components/Recommend"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Product from "./components/Product"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="app">
      <Searchbar />
      <Cartbar />
      <Sidebar />
      <ScrollToTop />
      <Header />
      <Recommend />
      <Banner />
      <Recommend />
      <Product />
      <Footer />
    </div>
  );
}