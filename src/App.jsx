import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/components/utils/Sidebar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
