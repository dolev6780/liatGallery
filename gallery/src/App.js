import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Logo from "./components/Logo";
import AdminGuard from "./components/AdminGuard";

function App() {
  return (
    <div className="App">
      <Router>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminGuard element={<Admin />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
