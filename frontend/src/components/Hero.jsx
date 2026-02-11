import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-40 pb-12 flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#183d2b,_#000)]"></div>

      {/* ATMOSPHERIC GLOWS */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-green-500/20 blur-[220px]"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-600/10 blur-[220px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-15">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <p className="uppercase tracking-[0.45em] text-green-400 text-xs mb-8">
            Advanced Agro Engineering
          </p>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold leading-[1.1]">
            Engineering the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Future
            </span>
            <br /> of Agriculture
          </h1>

          <p className="mt-10 text-gray-300 text-lg max-w-xl leading-relaxed">
            Precision-built agricultural machinery engineered for durability,
            efficiency, and next-generation farming performance.
          </p>

          {/* CTA */}
          <div className="mt-14 flex flex-wrap gap-6">
            {/* Explore Products */}
            <a
              href="#products"
              className="relative px-10 py-3 rounded-full bg-green-500 text-black uppercase tracking-[0.25em] text-xs font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-green-500 transition">
                Explore Products
              </span>
            </a>

            {/* Get a Quote */}
            <a
              href="/contact"
              className="px-10 py-3 rounded-full border border-green-500/70 text-white uppercase tracking-[0.25em] text-xs hover:bg-green-500 hover:text-black transition"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* VIDEO HALO */}
          <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[180px] rounded-full"></div>

          <motion.video
            src="/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 max-w-[620px] w-full rounded-2xl 
               drop-shadow-[0_60px_120px_rgba(0,0,0,0.85)]
               border border-white/10"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
