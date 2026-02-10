import { motion } from "framer-motion";

export default function DistributorForm() {
  return (
    <section
      id="distributor-form"
      className="relative py-40 bg-black overflow-hidden"
    >
      {/* Background */}
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
            Distributor Registration
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Apply to Become an Authorized Distributor
          </h2>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 space-y-8"
        >
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Full Name"
              className="input"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="input"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="input"
            />
            <input
              type="text"
              placeholder="City"
              className="input"
            />
            <input
              type="text"
              placeholder="State"
              className="input"
            />
          </div>

          {/* Experience */}
          <textarea
            rows="4"
            placeholder="Briefly describe your experience in agricultural machinery or related business"
            className="input resize-none"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-6 px-10 py-4 rounded-full bg-green-500 text-black uppercase tracking-[0.3em] text-xs font-medium hover:bg-green-400 transition"
          >
            Submit Application
          </button>
        </motion.form>
      </div>
    </section>
  );
}
