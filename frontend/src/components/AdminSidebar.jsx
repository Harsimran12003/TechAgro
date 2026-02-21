import { NavLink , Link} from "react-router-dom";
import { LayoutDashboard, PlusSquare, ShoppingCart, Users, LogOut } from "lucide-react";

export default function AdminSidebar() {

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition hover:bg-green-500/10";

  const activeClass =
    "bg-green-500/20 text-green-400";

  return (
    <div className="w-64 h-screen bg-black border-r border-white/10 fixed left-0 top-0 flex flex-col justify-between">

      {/* Logo */}
      <div>
        <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="TechAgro"
              className="h-14 md:h-20 w-27 p-3 mb-3 transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(34,197,94,0.35)]"
            />
          </Link>

        {/* Links */}
        <nav className="px-4 space-y-2">

          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/add-order"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <PlusSquare size={18} />
            Add Order
          </NavLink>

          <NavLink
            to="/admin/manage-orders"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <ShoppingCart size={18} />
            Manage Orders
          </NavLink>

          <NavLink
            to="/admin/distributors"
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