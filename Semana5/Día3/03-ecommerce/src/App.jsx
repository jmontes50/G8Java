import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./modules/ui/components/Navbar";
import ProductPage from "./modules/Products";
import ProductDetailPage from "./modules/Products/ProductDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/productdetail/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App