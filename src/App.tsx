import DashBoard from "./components/pages/Dashboard/Dashboard"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}


export default App
