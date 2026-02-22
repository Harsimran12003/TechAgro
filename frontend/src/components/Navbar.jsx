import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  

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
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="TechAgro"
              className="h-12 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(34,197,94,0.35)]"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              let path = "/";

              if (link === "Home") path = "/";
              else if (link === "About") path = "/about";
              else if (link === "Products") path = "/products";
              else if (link === "Distributors") path = "/distributors";
              else if (link === "Contact") path = "/contact";

              return (
                <li
                  key={link}
                  className="relative text-[13px] uppercase tracking-[0.25em] text-gray-300 hover:text-white transition duration-300 group"
                >
                  <Link to={path}>{link}</Link>

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-green-500 to-green-300 transition-all duration-300 group-hover:w-full"></span>
                </li>
              );
            })}
          </ul>
          {/* CTA BUTTON */}
          <div className="hidden md:flex">
            <Link
              to="/distributors"
              className="relative px-7 py-2.5 text-[13px] uppercase tracking-[0.3em] text-white rounded-full border border-green-500/70 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-black transition">
                Login as Distributor
              </span>
            </Link>
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
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => {
            let path = "/";

            if (link === "Home") path = "/";
            else if (link === "About") path = "/about";
            else if (link === "Products") path = "/products";
            else if (link === "Distributors") path = "/distributors";
            else if (link === "Contact") path = "/contact";

            return (
              <Link
                key={link}
                to={path}
                onClick={() => setOpen(false)}
                className="text-lg sm:text-xl uppercase tracking-[0.2em] text-gray-300 hover:text-green-500 transition"
              >
                {link}
              </Link>
            );
          })}
          <Link to="/cart">Cart ({cart.length})</Link>

          <div className="flex flex-col items-center gap-4 mt-6">
            <Link
              to="/distributors"
              onClick={() => setOpen(false)}
              className="px-8 py-2 border border-green-500 rounded-full text-sm uppercase tracking-[0.2em] text-white hover:bg-green-500 hover:text-black transition"
            >
              Login as Distributor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
