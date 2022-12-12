import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/components/utils/Sidebar";
import Navbar from "./assets/components/utils/Navbar";
import HomePage from "./assets/components/Home/HomePage";
function App() {
  return (
    <div className="bg-lgray">
      <Router>
        <Navbar />
        <Sidebar>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
