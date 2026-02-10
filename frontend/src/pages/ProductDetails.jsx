import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

const productData = {
  "88-bhp": {
    title: "Multi Feeder Chain Harvester",
    power: "88 BHP",
    images: [
      "/harvester-88-1.jpeg",
      "/harvester-88-2.jpeg",
      "/harvester-88-3.jpeg",
    ],
    specs: [
      { label: "Model", value: "4LZ-6.0P" },
      { label: "Structural Style", value: "Crawler-type full feeding model" },
    ],
  },

  "102-bhp": {
    title: "Multi Feeder Chain Harvester",
    power: "102 BHP",
    images: [
      "/harvester-102-1.png",
      "/harvester-102-2.png",
      "/harvester-102-3.png",
      "/harvester-102-4.png",
    ],
    specs: [
      { label: "Model", value: "4LZ-6.0P" },
      { label: "Structural Style", value: "Crawler-type full feeding model" },
      { label: "Dimensions (L×W×H)", value: "5000 × 2530 × 2880 mm" },
      { label: "Total Weight (Cabin/Canopy)", value: "3720 kg" },
      { label: "Ground Clearance", value: "350 mm" },
      { label: "Production Efficiency", value: "0.55 – 0.95 hm²/h" },
      { label: "Fuel Consumption", value: "≤ 32 kg/hm²" },
      { label: "Feed Quantity", value: "6.0 kg/s" },

      { label: "Engine Manufacturer", value: "Changchai 4G33" },
      { label: "Engine Type", value: "4-cylinder, water-cooled, turbocharged" },
      { label: "Rated Power", value: "102 HP (Stage II)" },
      { label: "Rated Speed", value: "2600 r/min" },
      { label: "Fuel Tank Capacity", value: "160 L" },

      {
        label: "Track Size",
        value: "90 × 56 × 550 mm (FM WORLD Fully Interchanged)",
      },
      { label: "Track Distance", value: "1250 mm" },
      { label: "Operating Speed", value: "0 – 8.2 km/h" },

      { label: "Reel Type", value: "Eccentric gear type" },
      { label: "Reel Diameter", value: "900 mm" },
      { label: "Reel Plates", value: "5" },

      { label: "Cutter Width", value: "2200 mm (FM WORLD Fully Interchanged)" },
      { label: "Cutter Bar Type", value: "Pin tooth axial flow type" },

      { label: "Rear Threshing Drum", value: "620 × 2210 mm" },
      { label: "Rethresher Type", value: "Pin tooth type" },
      { label: "Concave Grid", value: "Sieve type" },

      { label: "HST & Gearbox Model", value: "56 HST + 95 Gearbox" },
      {
        label: "Grain Unloading",
        value: "360° unloading with lower air filter",
      },
      { label: "Grain Tank Capacity", value: "1.6 m³ (New type)" },
    ],
  },

  "120-hp": {
    title: "Multi Feeder Chain Harvester",
    power: "120 HP",
    images: ["/harvester-120-1.png", "/harvester-120-2.png"],
    specs: [
      { label: "Model", value: "4LZT-7.0ZS (120 HP + Cab)" },
      { label: "Dimensions (L×W×H)", value: "5400 × 2600 × 3000 mm" },
      { label: "Total Weight", value: "4750 kg" },

      // Power System
      { label: "Engine Manufacturer", value: "Changchai" },
      {
        label: "Engine Type",
        value: "In-line, water-cooled, four-stroke, direct injection",
      },
      { label: "Displacement", value: "3.50 L" },
      { label: "Rated Power", value: "120 HP" },
      { label: "Rated Speed", value: "2400 r/min" },
      { label: "Fuel Tank Capacity", value: "230 L" },

      // Chassis System
      { label: "Rubber Track Model", value: "550 × 90 × 59" },
      { label: "Track Center Distance", value: "1300 mm" },
      { label: "Grounding Dimension", value: "2010 × 550 mm" },
      { label: "Ground Pressure", value: "21.5 kPa" },
      { label: "Chassis Height", value: "765 mm" },

      // Working System
      {
        label: "Variable Speed Method",
        value: "Dual-pump / Dual-motor / Dual-gearbox",
      },
      { label: "Travel Speed", value: "2.7 m/s" },
      { label: "Harvesting Speed", value: "2.0 m/s" },
      { label: "Lodging Speed", value: "1.4 m/s" },

      // Header System
      { label: "Cutting Width", value: "2.3 m" },
      { label: "Cutting Height Range", value: "-4 to 110 mm" },
      {
        label: "Reel Shifting Method",
        value: "Adjust belt disc diameter",
      },

      // Threshing System
      {
        label: "Threshing Method",
        value: "Longitudinal axial flow",
      },
      {
        label: "Threshing Cylinder",
        value: "Φ605 × 2220 mm",
      },
      {
        label: "Threshing Cylinder Speed",
        value: "700 r/min",
      },
      {
        label: "Separating Type",
        value: "Vibrating sieves + centrifugal fan",
      },
      { label: "Sieve Box Size", value: "1780 × 960 mm" },

      // Unloading System
      { label: "Grain Tank Capacity", value: "1.7 m³" },
      {
        label: "Grain Unloading Method",
        value: "360° + 3.9 m automatic grain unloading",
      },

      // Performance
      { label: "Working Efficiency", value: "0.37 – 0.66 ha/h" },

      // Pricing
      { label: "FOB Price (With AC Cab)", value: "USD 22,500" },
      { label: "FOB Price (Without AC Cab)", value: "USD 21,000" },
    ],
  },
};

export default function ProductDetails() {
  const { power } = useParams();
  const product = productData[power];
  const [activeImage, setActiveImage] = useState(product.images[0]);

  if (!product) {
    return <div className="text-white p-20">Product not found</div>;
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#123d2a,_#000)]"></div>

        <div
          className="relative z-10 max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-start
 items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.4em] text-green-400 text-xs mb-6">
              Product Specifications
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              {product.title}
            </h1>

            <p className="text-green-400 text-xl mb-10">{product.power}</p>

            <div className="space-y-4 text-gray-300">
              {product.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-6 border-b border-white/10 pb-2"
                >
                  <span className="text-gray-400">{spec.label}</span>
                  <span className="text-white text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            className="space-y-6 sticky top-40 self-start"
          >
            {/* MAIN IMAGE */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <img
                src={activeImage}
                alt={product.power}
                className="w-full max-w-md mx-auto drop-shadow-[0_60px_120px_rgba(0,0,0,0.85)] transition-all duration-500"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex justify-center gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`border rounded-xl p-2 transition ${
                    activeImage === img
                      ? "border-green-500 bg-white/10"
                      : "border-white/10 hover:border-green-500/60"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-20 w-28 object-contain"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <ContactForm />

      <Footer />
    </div>
  );
}
