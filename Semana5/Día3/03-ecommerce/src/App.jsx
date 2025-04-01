import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./modules/ui/components/Navbar";
import ProductPage from "./modules/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App