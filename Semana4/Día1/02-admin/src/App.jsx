import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardView from "./views/DashboardView";
import CreateProductView from "./views/CreateProductView";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<DashboardView />} />
        <Route path='/createproduct' element={<CreateProductView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App