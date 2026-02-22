import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function Cart() {

  const [cart, setCart] = useState([]);
  const [distributor, setDistributor] = useState(null);
  const [loading, setLoading] = useState(false);
  

  /* Load cart and distributor */

  useEffect(() => {

    const storedCart = localStorage.getItem("cart");
    const storedDistributor = localStorage.getItem("distributor");

    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedDistributor) setDistributor(JSON.parse(storedDistributor));

  }, []);
  

  /* Remove item */

  const removeItem = (index) => {

    const updatedCart = cart.filter((_, i) => i !== index);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

  };

  /* Place order */

  const placeOrder = async () => {

    if (!cart.length) {
      alert("Cart is empty");
      return;
    }

    setLoading(true);

    try {

      await fetch(
        "https://tech-agro-backend.vercel.app/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            distributorId: distributor._id,
            items: cart,
          }),
        }
      );

      alert("Order placed successfully");

      setCart([]);
      localStorage.removeItem("cart");

    } catch (error) {

      alert("Failed to place order");

    }

    setLoading(false);

  };

  return (

    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="pt-40 pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold mb-10"
          >
            Your Cart
          </motion.h1>


          {/* Empty Cart */}

          {!cart.length && (

            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">

              <p className="text-gray-400 text-lg">
                Your cart is empty
              </p>

            </div>

          )}


          {/* Cart Items */}

          {cart.length > 0 && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between items-center p-6 border-b border-white/10 hover:bg-white/5 transition"
                >

                  <div>

                    <p className="text-green-400 font-medium">
                      {item.partCode}
                    </p>

                    <p className="text-gray-300">
                      {item.name}
                    </p>

                  </div>


                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-400 hover:text-red-300 transition"
                  >
                    <Trash2 size={20} />
                  </button>

                </div>

              ))}

            </motion.div>

          )}


          {/* Place Order Button */}

          {cart.length > 0 && (

            <div className="mt-8 flex justify-end">

              <button
                onClick={placeOrder}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-xl font-medium transition disabled:opacity-50"
              >

                {loading ? "Placing Order..." : "Place Order"}

              </button>

            </div>

          )}

        </div>

      </section>

      <Footer />

    </div>

  );

}