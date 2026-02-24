import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f2e20,_#000)]"></div>

      {/* Ambient Glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[240px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-16">

        {/* TOP FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-16"
        >

          {/* BRAND */}
          <div>
            <img src="/logo.png" alt="Tech Agro" className="h-14 mb-6" />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Tech Agro is a premium agro-machinery manufacturer committed to
              precision engineering, durability, and future-ready agricultural solutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <ul className="space-y-4 text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>

            <li>
              <Link to="/distributors" className="hover:text-white transition">
                Distributors
              </Link>
            </li>

            <li>
              <Link to="/distributors" className="hover:text-white transition">
                Dealers
              </Link>
            </li>
          </ul>

          {/* PRODUCTS */}
          <div>
            <h4 className="uppercase tracking-[0.3em] text-xs text-green-400 mb-6">
              Products
            </h4>

            <ul className="space-y-4 text-gray-300">

              <li>
                <Link to="/products?model=88bhp" className="hover:text-white transition">
                  88 BHP Harvester
                </Link>
              </li>

              <li>
                <Link to="/products?model=102bhp" className="hover:text-white transition">
                  102 BHP Harvester
                </Link>
              </li>

              <li>
                <Link to="/products?model=120bhp" className="hover:text-white transition">
                  120 HP Harvester
                </Link>
              </li>

              

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="uppercase tracking-[0.3em] text-xs text-green-400 mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-300">

              {/* Address clickable → Google Maps */}
              <li>
                <a
                  href="https://maps.google.com/?q=TechAgro+Hansi+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Address: VPO MUNDHAL, MANDHAHERI, SISAR LINK ROAD,
                  NEAR NH-9, HANSI, HISAR, HARYANA, 125033
                </a>
              </li>

              {/* Email clickable */}
              <li>
                <a
                  href="mailto:info@techagro.co.in"
                  className="hover:text-white transition"
                >
                  Email: info@techagro.co.in
                </a>
              </li>

              {/* Phone clickable */}
              <li>
                <a
                  href="tel:+919992332017"
                  className="hover:text-white transition"
                >
                  Phone: +91 99923 32017
                </a>
              </li>

              {/* Country clickable */}
              <li>
                <a
                  href="https://maps.google.com/?q=India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  India
                </a>
              </li>

            </ul>
          </div>

        </motion.div>

        {/* DIVIDER */}
        <div className="mt-20 border-t border-white/10"></div>

        {/* BOTTOM FOOTER */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">

          <p>© {new Date().getFullYear()} Tech Agro. All rights reserved.</p>

          <div className="flex gap-8 uppercase tracking-widest text-xs">

            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions" className="hover:text-white transition">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}