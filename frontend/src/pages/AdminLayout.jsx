import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Menu } from "lucide-react";

export default function AdminLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="bg-black text-white w-screen min-h-screen flex overflow-x-hidden">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 min-h-screen">

        {/* Mobile Header */}
        <div className="md:hidden flex items-center gap-4 p-4 border-b border-white/10 bg-black">

          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={26} />
          </button>

          <img
            src="/logo.png"
            className="h-10"
          />

        </div>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-10 bg-black">
          {children}
        </main>

      </div>

    </div>

  );

}