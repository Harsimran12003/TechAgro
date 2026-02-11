import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DistributorCTA from "../components/DistributorCTA";
import DistributorForm from "../components/DistributorForm";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Distributors() {
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
