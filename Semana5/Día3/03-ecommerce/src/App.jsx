import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./modules/ui/components/Navbar";
import ProtectedRoute from "./modules/Auth/components/ProtectedRoute";
import ProductPage from "./modules/Products";
import ProductDetailPage from "./modules/Products/ProductDetailPage";
import CartPage from "./modules/Cart/CartPage";
import Article from "./modules/Static/Article";
import LoginPage from "./modules/Auth/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/productdetail/:id" element={<ProductDetailPage />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route path="/article" element={<Article />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
