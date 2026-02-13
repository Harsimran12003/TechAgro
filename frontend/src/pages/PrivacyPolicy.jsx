import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";


export default function PrivacyPolicy() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-40 pb-32 max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-semibold mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            At Tech Agro, we respect your privacy and are committed to protecting
            your personal information.
          </p>

          <h2 className="text-xl text-white font-medium">Information We Collect</h2>
          <p>
            We may collect your name, email, phone number, and business details
            when you register as a distributor or contact us.
          </p>

          <h2 className="text-xl text-white font-medium">How We Use Your Information</h2>
          <p>
            Your information is used to process orders, provide support,
            communicate updates, and improve our services.
          </p>

          <h2 className="text-xl text-white font-medium">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your
            information from unauthorized access or disclosure.
          </p>

          <p>
            By using our website, you consent to this privacy policy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}