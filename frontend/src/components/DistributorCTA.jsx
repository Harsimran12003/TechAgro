import { motion } from "framer-motion";

export default function DistributorCTA() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#123d2a,_#000)]"></div>

      {/* Ambient Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/15 blur-[260px]"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-600/10 blur-[220px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-8 text-center"
      >
        {/* Eyebrow */}
        <p className="uppercase tracking-[0.45em] text-green-400 text-xs mb-8">
          Partner With Tech Agro
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Join Us & Become an <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Authorized Distributor
          </span>
        </h2>

        {/* Description */}
        <p className="mt-10 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Be part of a fast-growing agro-machinery brand. Expand your business
          with premium products, strong market demand, and a partnership built
          on trust, growth, and long-term success.
        </p>

        {/* Commission Highlight */}
        <div className="mt-14 flex justify-center">
          <div className="px-10 py-6 rounded-3xl border border-green-500/40 bg-white/5 backdrop-blur-xl">
            <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-2">
              Distributor Benefits
            </p>
            <p className="text-4xl font-semibold text-green-400">
              Up to 50% Commission
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
          <button className="relative px-12 py-4 rounded-full bg-green-500 text-black uppercase tracking-[0.3em] text-xs font-medium overflow-hidden group">
            <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            <span className="relative z-10 group-hover:text-green-500 transition">
              Apply as Distributor
            </span>
          </button>

          <button className="px-12 py-4 rounded-full border border-green-500/70 text-white uppercase tracking-[0.3em] text-xs hover:bg-green-500 hover:text-black transition">
            Contact Sales Team
          </button>
        </div>
      </motion.div>
    </section>
  );
}
