import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Products", "Distributors", "Contact"];

  return (
    <>
      {/* Top Luxury Accent Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-600 via-red-600 to-green-600 z-[60]" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="TechAgro"
              className="h-14 md:h-20 w-27 transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(34,197,94,0.35)]"
            />
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li
                key={link}
                className="relative text-[13px] uppercase tracking-[0.25em] text-gray-300 hover:text-white transition duration-300 group"
              >
                <a
                  href={
                    link === "Distributors"
                      ? "/distributors"
                      : link === "Contact"
                        ? "/contact"
                        : `#${link.toLowerCase()}`
                  }
                >
                  {link}
                </a>

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-green-500 to-green-300 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <div className="hidden md:flex">
            <a
              href="/distributors"
              className="relative px-7 py-2.5 text-[13px] uppercase tracking-[0.3em] text-white rounded-full border border-green-500/70 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-black transition">
                Become Distributor
              </span>
            </a>
          </div>

          {/* MOBILE ICON */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={
                link === "Distributors"
                  ? "/distributors"
                  : link === "Contact"
                    ? "/contact"
                    : `#${link.toLowerCase()}`
              }
              onClick={() => setOpen(false)}
              className="text-2xl uppercase tracking-[0.3em] text-gray-300 hover:text-green-500 transition"
            >
              {link}
            </a>
          ))}

          <button className="mt-6 px-10 py-3 border border-green-500 rounded-full text-white uppercase tracking-[0.3em] hover:bg-green-500 hover:text-black transition">
            Get Quote
          </button>
        </div>
      </div>
    </>
  );
}
