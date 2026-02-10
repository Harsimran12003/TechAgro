import { motion } from "framer-motion";

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
              precision engineering, durability, and future-ready agricultural
              solutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="uppercase tracking-[0.3em] text-xs text-green-400 mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Products
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Infrastructure
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Dealers
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="uppercase tracking-[0.3em] text-xs text-green-400 mb-6">
              Products
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>88 BHP Harvester</li>
              <li>102 BHP Harvester</li>
              <li>120 HP Harvester</li>
              <li>Custom Machinery</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="uppercase tracking-[0.3em] text-xs text-green-400 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>Email: info@techagro.co.in</li>
              <li>Phone: +91 99923 32017</li>
              <li>India</li>
            </ul>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="mt-20 border-t border-white/10"></div>

        {/* BOTTOM FOOTER */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Tech Agro. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.excellencegroupofinstitutes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white transition  "
            >
              Excellence Group of Institutes
            </a>
          </p>

          <div className="flex gap-8 uppercase tracking-widest text-xs">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
