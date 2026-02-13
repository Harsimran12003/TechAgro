import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";


export default function TermsConditions() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-40 pb-32 max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-semibold mb-10">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            By accessing this website, you agree to comply with these terms
            and conditions.
          </p>

          <h2 className="text-xl text-white font-medium">
            Use of Website
          </h2>
          <p>
            You agree not to misuse our website or engage in unlawful
            activities.
          </p>

          <h2 className="text-xl text-white font-medium">
            Orders & Payments
          </h2>
          <p>
            All machinery orders are subject to availability and confirmation.
          </p>

          <h2 className="text-xl text-white font-medium">
            Limitation of Liability
          </h2>
          <p>
            Tech Agro shall not be liable for any indirect or consequential
            damages arising from use of our products.
          </p>

          <p>
            These terms may be updated without prior notice.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}