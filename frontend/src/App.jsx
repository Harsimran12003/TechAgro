import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Distributors from "./pages/Distributors";
import "./App.css";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import DistributorDashboard from "./pages/DistributorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

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
        <Route
          path="/distributor/dashboard"
          element={<DistributorDashboard />}
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
     
      </Routes>
    </Router>
  );
}
