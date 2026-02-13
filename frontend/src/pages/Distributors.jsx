import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DistributorCTA from "../components/DistributorCTA";
import DistributorForm from "../components/DistributorForm";
import WhatsAppButton from "../components/WhatsAppButton";
import { useEffect } from "react";

export default function Distributors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* CTA FIRST */}
      <DistributorCTA />

      {/* REGISTRATION FORM */}
      <DistributorForm />
      <WhatsAppButton />

      <Footer />
    </div>
  );
}
