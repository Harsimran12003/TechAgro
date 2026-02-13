import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DistributorForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  /* Handle Input Change */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* Handle Submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const url = isLogin
        ? "https://tech-agro-backend.vercel.app//api/distributors/login"
        : "https://tech-agro-backend.vercel.app//api/distributors/register";

      const payload = isLogin
        ? {
            email: formData.email,
            password: formData.password,
          }
        : formData;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("distributor", JSON.stringify(data.distributor));

      navigate("/distributor/dashboard");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="distributor-form"
      className="relative py-40 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#102e22,_#000)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.45em] text-green-400 text-xs mb-6">
            Distributor Portal
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            {isLogin ? "Login to Your Account" : "Create Distributor Account"}
          </h2>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 space-y-8"
        >
          <div className="space-y-6">
            {/* REGISTER FIELDS */}
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition"
                />
              </>
            )}

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition"
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition"
            />
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-sm text-green-400">{message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 px-10 py-4 rounded-full bg-green-500 text-black uppercase tracking-[0.3em] text-xs font-medium hover:bg-green-400 transition disabled:opacity-60"
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
          </button>

          {/* Toggle */}
          <div className="text-center text-gray-400 text-sm mt-6">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-green-400 cursor-pointer hover:underline"
                >
                  Create Account
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-green-400 cursor-pointer hover:underline"
                >
                  Login
                </span>
              </>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
