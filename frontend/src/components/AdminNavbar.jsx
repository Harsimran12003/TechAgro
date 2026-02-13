import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
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
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="TechAgro"
              className="h-14 md:h-20 w-27 transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(34,197,94,0.35)]"
            />
          </Link>

          
         </nav></header>
    </>
  );
}
