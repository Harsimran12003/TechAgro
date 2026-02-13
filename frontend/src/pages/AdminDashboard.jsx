import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [distributors, setDistributors] = useState([]);

  const [form, setForm] = useState({
    machinery: "",
    date: "",
    distributor: "",
    status: "Placed",
  });

  const [editingId, setEditingId] = useState(null);

  /* Protect route */
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin");
    }
  }, []);

  /* Fetch distributors */
  useEffect(() => {
    fetch("https://tech-agro-backend.vercel.app//api/distributors")
      .then((res) => res.json())
      .then((data) => setDistributors(data));
  }, []);

  /* Fetch orders */
  const fetchOrders = () => {
    fetch("https://tech-agro-backend.vercel.app//api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* Add / Update */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `https://tech-agro-backend.vercel.app//api/orders/${editingId}`
      : "https://tech-agro-backend.vercel.app//api/orders";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      machinery: "",
      date: "",
      distributor: "",
      status: "Placed",
    });

    setEditingId(null);
    fetchOrders();
  };

  const handleEdit = (order) => {
    setForm({
      machinery: order.machinery,
      date: order.date.split("T")[0],
      distributor: order.distributor._id,
      status: order.status,
    });
    setEditingId(order._id);
  };

  const handleDelete = async (id) => {
    await fetch(`https://tech-agro-backend.vercel.app//api/orders/${id}`, {
      method: "DELETE",
    });
    fetchOrders();
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <AdminNavbar />

      <div className="max-w-6xl mx-auto mt-32">
        <div className="flex justify-between mb-10">
          <h1 className="text-4xl font-semibold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-6 py-2 rounded-full"
          >
            Logout
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 p-8 rounded-3xl space-y-4 mb-12"
        >
          <input
            name="machinery"
            value={form.machinery}
            onChange={handleChange}
            placeholder="Machinery"
            required
            className="input"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="input"
          />

          {/* Distributor Dropdown */}
          <select
            name="distributor"
            value={form.distributor}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500"
          >
            <option value="" className="bg-black text-white">
              Select Distributor
            </option>

            {distributors.map((d) => (
              <option key={d._id} value={d._id} className="bg-black text-white">
                {d.name}
              </option>
            ))}
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500"
          >
            <option className="bg-black text-white">Placed</option>
            <option className="bg-black text-white">Shipped</option>
            <option className="bg-black text-white">Out for Delivery</option>
            <option className="bg-black text-white">Delivered</option>
          </select>

          <button className="bg-green-500 px-8 py-3 text-black rounded-full">
            {editingId ? "Update Order" : "Add Order"}
          </button>
        </form>

        {/* TABLE */}
        <table className="w-full text-sm">

      {/* HEADER */}
      <thead className="bg-white/5 border-b border-white/10">
        <tr className="text-left uppercase tracking-widest text-gray-400 text-xs">
          <th className="px-6 py-4">Machinery</th>
          <th className="px-6 py-4">Date</th>
          <th className="px-6 py-4">Distributor</th>
          <th className="px-6 py-4">Status</th>
          <th className="px-6 py-4 text-right">Actions</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody>
        {orders.map((order) => (
          <tr
            key={order._id}
            className="border-b border-white/5 hover:bg-white/5 transition"
          >
            <td className="px-6 py-5 font-medium text-white">
              {order.machinery}
            </td>

            <td className="px-6 py-5 text-gray-300">
              {new Date(order.date).toISOString().split("T")[0]}
            </td>

            <td className="px-6 py-5 text-gray-300">
              {order.distributor?.name}
            </td>

            {/* STATUS BADGE */}
            <td className="px-6 py-5">
              <span
                className={`px-4 py-1 rounded-full text-xs uppercase tracking-widest font-medium
                  ${
                    order.status === "Delivered"
                      ? "bg-green-500/20 text-green-400"
                      : order.status === "Shipped"
                      ? "bg-blue-500/20 text-blue-400"
                      : order.status === "Out for Delivery"
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
              >
                {order.status}
              </span>
            </td>

            {/* ACTIONS */}
            <td className="px-6 py-5 text-right space-x-4">
              <button
                onClick={() => handleEdit(order)}
                className="text-yellow-400 hover:text-yellow-300 transition font-medium"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(order._id)}
                className="text-red-400 hover:text-red-300 transition font-medium"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

        </table>
      </div>
    </div>
  );
}
