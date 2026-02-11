import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Distributors from "./pages/Distributors";
import './App.css'
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:power" element={<ProductDetails />} />
        <Route path="/distributors" element={<Distributors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
