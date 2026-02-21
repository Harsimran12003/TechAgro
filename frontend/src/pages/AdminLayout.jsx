import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children }) {

  return (
    <div className="bg-black text-white min-h-screen flex">

      <AdminSidebar />

      <div className="ml-64 w-full p-10">
        {children}
      </div>

    </div>
  );
}