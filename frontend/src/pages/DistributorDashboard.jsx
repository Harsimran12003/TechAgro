import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function DistributorDashboard() {
  const [distributor, setDistributor] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSearch = async (value) => {
    setSearch(value);

    if (!value) {
      setProducts([]);
      return;
    }

    try {
      const res = await fetch(
        `https://tech-agro-backend.vercel.app/api/products/search?q=${value}`,
      );

      const data = await res.json();

      setProducts(data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedDistributor = localStorage.getItem("distributor");
    if (storedDistributor) {
      setDistributor(JSON.parse(storedDistributor));
    }
  }, []);

  useEffect(() => {
    const storedDistributor = localStorage.getItem("distributor");

    if (storedDistributor) {
      const parsedDistributor = JSON.parse(storedDistributor);
      setDistributor(parsedDistributor);

      // Fetch orders for this distributor
      fetch(
        `https://tech-agro-backend.vercel.app/api/orders/distributor/${parsedDistributor._id}`,
      )
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#123d2a,_#000)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <p className="uppercase tracking-[0.4em] text-green-400 text-xs mb-4">
              Distributor Dashboard
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold">
              Welcome,{" "}
              <span className="text-green-400">
                {distributor?.name || "Distributor"}
              </span>
            </h1>
          </motion.div>
          {/* Authorization Status Card */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`mb-10 p-6 rounded-2xl border backdrop-blur-xl

    ${
      distributor?.status === "Approved"
        ? "bg-green-500/10 border-green-500/30"
        : "bg-yellow-500/10 border-yellow-500/30"
    }

  `}
          >
            {distributor?.status === "Approved" ? (
              <p className="text-green-400 font-medium">
                ✅ You are an Authorized Distributor
              </p>
            ) : (
              <p className="text-yellow-400 font-medium">
                ⏳ Your authorization is pending. Please wait for admin
                approval.
              </p>
            )}
          </motion.div>

          {distributor?.status === "Approved" && (
            <div className="bg-white/5 p-6 rounded-2xl mb-8">
              <h3 className="text-xl mb-4">Search Products</h3>

              <input
                type="text"
                placeholder="Enter Part Code..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full p-3 bg-black border border-white/10 rounded-xl"
              />
            </div>
          )}

          {products.map((product) => (
            <div
              key={product._id}
              className="flex justify-between items-center bg-white/5 p-4 rounded-xl mb-3"
            >
              <div>
                <p className="text-green-400">{product.partCode}</p>

                <p>{product.name}</p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="bg-green-500 text-black px-4 py-2 rounded-xl"
              >
                Add to Cart
              </button>
            </div>
          ))}

          {/* Orders Table */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-medium mb-8">Machinery Orders</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 uppercase text-xs tracking-widest">
                    <th className="pb-4">Machinery</th>
                    <th className="pb-4">Date of Order</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="py-5">{order.machinery}</td>
                      <td>
                        {new Date(order.date).toISOString().split("T")[0]}
                      </td>
                      <td>
                        <span
                          className={`px-4 py-1 rounded-full text-xs uppercase tracking-widest ${
                            order.status === "Delivered"
                              ? "bg-green-500/20 text-green-400"
                              : order.status === "Shipped"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
