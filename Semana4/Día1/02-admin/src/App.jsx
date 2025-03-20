import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardView from "./views/DashboardView";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<DashboardView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App