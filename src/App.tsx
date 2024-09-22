import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import DashBoard from "./components/pages/Dashboard/Dashboard"
import StockDetail from "./components/pages/StockDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/:symbol/detail" element={<StockDetail />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
