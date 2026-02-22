import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function AdminDashboard() {

  const navigate = useNavigate();

  /* Protect route */
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin");
    }
  }, []);

  return (

    <AdminLayout>

      <div className="p-10">

        {/* Heading */}
        <h1 className="text-4xl font-semibold mb-4">
          Welcome to TechAgro Admin Panel
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          Manage distributors, monitor orders, and control machinery parts
          efficiently from one centralized dashboard. This admin panel provides
          complete visibility and control over TechAgro’s distribution system.
        </p>

        {/* Highlight Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-xl">

          <h2 className="text-2xl font-medium mb-3">
            Control Everything from One Place
          </h2>

          <p className="text-gray-400">
            Use the sidebar to navigate between distributors, orders, and system
            management tools. Track order status, manage inventory, and ensure
            smooth operations across your entire network.
          </p>

        </div>

      </div>

    </AdminLayout>

  );

}