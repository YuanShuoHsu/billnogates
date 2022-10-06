import Searchbar from "./components/Searchbar"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Product from "./components/Product"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="app">
      <Searchbar />
      <Sidebar />
      <Header />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}