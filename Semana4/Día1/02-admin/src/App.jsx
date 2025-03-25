import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardView from "./views/DashboardView";
import CreateProductView from "./views/CreateProductView";
import EditProductView from "./views/EditProductView";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<DashboardView />} />
        <Route path='/createproduct' element={<CreateProductView />} />
        <Route path='/editproduct/:id' element={<EditProductView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App