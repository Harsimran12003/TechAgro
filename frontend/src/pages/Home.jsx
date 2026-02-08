import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import AboutTimeline from "../components/AboutTimeline";
import Products from "../components/Products";
import DistributorCTA from "../components/DistributorCTA";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <AboutTimeline />
      <Products />
      <DistributorCTA />
      <ContactForm />
      <Footer />

    </div>
  );
}
