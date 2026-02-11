import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <ContactForm />
      <WhatsAppButton />

      <Footer />
    </div>
  );
}
