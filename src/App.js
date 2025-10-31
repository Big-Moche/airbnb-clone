import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import PropertyPage from "./components/PropertyPage/PropertyPage";

function App() {
  return (
    // everything wrapped with router
    <Router>
      {/* our different routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
