import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      navigate("/admin/dashboard");
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {

    e.preventDefault();
    setLoading(true);
    setError("");

    try {

      const response = await fetch(
        "https://tech-agro-backend.vercel.app/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("adminToken", data.token);

      navigate("/admin/dashboard");

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl space-y-6 w-[400px]"
      >

        <h2 className="text-2xl text-white font-semibold text-center">
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          onChange={handleChange}
          required
          className="input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="input"
        />

        {error && (
          <p className="text-red-400 text-sm text-center">
            {error}
          </p>
        )}

        <button
          disabled={loading}
          className="w-full py-3 bg-green-500 text-black rounded-full uppercase tracking-widest disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Back to Website Link */}
        <Link
          to="/"
          className="block text-center text-gray-400 hover:text-green-400 text-sm transition"
        >
          ← Back to Website
        </Link>

      </motion.form>

    </div>

  );

}