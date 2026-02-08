import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Infrastructure from "./pages/Infrastructure";
// import Dealers from "./pages/Dealers";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
