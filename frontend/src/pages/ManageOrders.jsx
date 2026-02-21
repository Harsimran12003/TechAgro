import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function ManageOrders() {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    machinery: "",
    date: "",
    distributor: "",
    status: "Placed",
  });

  const [editingId, setEditingId] = useState(null);

  const [distributors, setDistributors] = useState([]);

  /* Protect route */
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin");
    }
  }, []);

  /* Fetch distributors */
  useEffect(() => {
    fetch("https://tech-agro-backend.vercel.app/api/distributors")
      .then((res) => res.json())
      .then((data) => setDistributors(data));
  }, []);

  /* Fetch orders */
  const fetchOrders = () => {
    fetch("https://tech-agro-backend.vercel.app/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  /* Edit handler */
  const handleEdit = (order) => {

    setForm({
      machinery: order.machinery,
      date: order.date.split("T")[0],
      distributor: order.distributor._id,
      status: order.status,
    });

    setEditingId(order._id);
  };

  /* Update */
  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch(
      `https://tech-agro-backend.vercel.app/api/orders/${editingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    setEditingId(null);

    fetchOrders();
  };

  /* Delete */
  const handleDelete = async (id) => {

    await fetch(
      `https://tech-agro-backend.vercel.app/api/orders/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchOrders();
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });


  return (

    <AdminLayout>

      <div className="max-w-6xl">

        <h1 className="text-3xl mb-8">
          Manage Orders
        </h1>


        {/* EDIT FORM (only visible when editing) */}

        {editingId && (

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 p-8 rounded-3xl space-y-4 mb-12"
          >

            <input
              name="machinery"
              value={form.machinery}
              onChange={handleChange}
              className="input w-full"
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="input w-full"
            />

            <select
              name="distributor"
              value={form.distributor}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-black border border-white/10 rounded-xl text-white"
            >

              {distributors.map(d => (
                <option
                  key={d._id}
                  value={d._id}
                  className="bg-black text-white"
                >
                  {d.name}
                </option>
              ))}

            </select>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-black border border-white/10 rounded-xl text-white"
            >
              <option className="bg-black text-white">Placed</option>
              <option className="bg-black text-white">Shipped</option>
              <option className="bg-black text-white">Out for Delivery</option>
              <option className="bg-black text-white">Delivered</option>
            </select>

            <button className="bg-green-500 px-8 py-3 text-black rounded-full">
              Update Order
            </button>

          </form>

        )}


        {/* EXACT SAME TABLE */}

        <table className="w-full text-sm">

          <thead className="bg-white/5 border-b border-white/10">

            <tr className="text-left uppercase tracking-widest text-gray-400 text-xs">

              <th className="px-6 py-4">Machinery</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Distributor</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>

            </tr>

          </thead>


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
                      }

                    `}
                  >

                    {order.status}

                  </span>

                </td>


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

    </AdminLayout>

  );

}