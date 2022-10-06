import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Banner from "./components/Banner"
import Product from "./components/Product"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Header />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}