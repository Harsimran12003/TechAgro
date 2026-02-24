import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function AddOrder() {
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

  /* Protect Route */
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin");
    }
  }, []);

  /* Fetch Distributors */
  useEffect(() => {
    fetch("https://tech-agro-backend.vercel.app/api/distributors")
      .then((res) => res.json())
      .then((data) => setDistributors(data));
  }, []);

  /* Fetch Orders */
  const fetchOrders = () => {
    fetch("https://tech-agro-backend.vercel.app/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  /* Handle Change */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* Add or Update */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";

    const url = editingId
      ? `https://tech-agro-backend.vercel.app/api/orders/${editingId}`
      : "https://tech-agro-backend.vercel.app/api/orders";

    // Convert machinery text into items array
    const bodyData = editingId
      ? form
      : {
          distributorId: form.distributor,
          items: [
            {
              partCode: "ADMIN",
              name: form.machinery,
            },
          ],
        };

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    alert(
      editingId ? "Order updated successfully" : "Order added successfully",
    );

    setForm({
      machinery: "",
      date: "",
      distributor: "",
      status: "Placed",
    });

    setEditingId(null);

    fetchOrders();
  };

  /* Edit */
  const handleEdit = (order) => {
    setForm({
      machinery: order.machinery,
      date: order.date.split("T")[0],
      distributor: order.distributor._id,
      status: order.status,
    });

    setEditingId(order._id);
  };

  /* Delete */
  const handleDelete = async (id) => {
    await fetch(`https://tech-agro-backend.vercel.app/api/orders/${id}`, {
      method: "DELETE",
    });

    fetchOrders();
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl">
        <h1 className="text-3xl mb-8">
          {editingId ? "Update Order" : "Add Order"}
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 p-8 rounded-2xl space-y-4 mb-10"
        >
          <input
            name="machinery"
            value={form.machinery}
            onChange={handleChange}
            placeholder="Machinery"
            required
            className="input w-full"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="input w-full"
          />

          <select
            name="distributor"
            value={form.distributor}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none"
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
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white"
          >
            <option className="bg-black text-white">Placed</option>
            <option className="bg-black text-white">Shipped</option>
            <option className="bg-black text-white">Out for Delivery</option>
            <option className="bg-black text-white">Delivered</option>
          </select>

          <button className="bg-green-500 px-6 py-3 rounded-xl text-black">
            {editingId ? "Update Order" : "Add Order"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
