import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./modules/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App