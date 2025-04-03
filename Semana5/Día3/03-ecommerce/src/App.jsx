import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./modules/ui/components/Navbar";
import ProductPage from "./modules/Products";
import ProductDetailPage from "./modules/Products/ProductDetailPage";
import CartPage from "./modules/Cart/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/productdetail/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App