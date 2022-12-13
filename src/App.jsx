import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/utils/Navbar";
import HomePage from "./assets/components/Home/HomePage";
import NewsClicked from "./assets/components/News/NewsClicked";
import Footer from "./assets/components/utils/Footer";
import Signup from "./assets/components/Login/Signup";
import Login from "./assets/components/Login/Login";
import Profile from "./assets/components/Profile/Profile";
import CompactView from "./assets/components/CompactView/CompactViews";
function App() {
  return (
    <div className="bg-lgray dark:bg-brown transition delay-100 ease-in-out">
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsClicked />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/compact" element={<CompactView />} />
          </Routes>
        </Navbar>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
