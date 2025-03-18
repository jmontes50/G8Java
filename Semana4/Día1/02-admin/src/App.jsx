import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView";

const App = () => {
  return (
    <BrowserRouter>
      <div>App</div>
      <Routes>
        <Route path='/' element={<DashboardView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App