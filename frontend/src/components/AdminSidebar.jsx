import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard,
  PlusSquare,
  ShoppingCart,
  Users,
  LogOut,
  X
} from "lucide-react";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-green-500/10";

  const activeClass =
    "bg-green-500/20 text-green-400";

  return (

    <div
      className={`
       fixed top-0 left-0 z-50 h-screen w-64 bg-black border-r border-white/10

        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

        md:translate-x-0
      `}
    >

      {/* Top */}
      <div>

        {/* Mobile close button */}
        <div className="flex items-center justify-between md:hidden p-4">

          <Link to="/">
            <img src="/logo.png" className="h-10" />
          </Link>

          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>

        </div>


        {/* Desktop Logo */}
        <div className="hidden md:flex items-center gap-3 p-4">

          <Link to="/">
            <img
              src="/logo.png"
              className="h-16"
            />
          </Link>

        </div>


        {/* Links */}
        <nav className="px-4 space-y-2">

          <NavLink
            to="/admin/dashboard"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>


          <NavLink
            to="/admin/add-order"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <PlusSquare size={18} />
            Add Order
          </NavLink>


          <NavLink
            to="/admin/manage-orders"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <ShoppingCart size={18} />
            Manage Orders
          </NavLink>


          <NavLink
            to="/admin/distributors"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <Users size={18} />
            View Distributors
          </NavLink>

        </nav>

      </div>


      {/* Logout */}
      <div className="p-4">

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </div>

  );

}