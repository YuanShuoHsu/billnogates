import Header from "./components/Header"
import Menu from "./components/Menu"
import Banner from "./components/Banner"
import Product from "./components/Product"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="app">
      <Menu />
      <Header />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}