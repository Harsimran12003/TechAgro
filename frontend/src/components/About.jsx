import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-black overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#0f2e20,_#000)]"></div>

      {/* Soft Glows */}
      <div className="absolute top-0 right-[-200px] w-[500px] h-[500px] bg-green-500/10 blur-[200px]"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-600/10 blur-[220px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* LEFT — STORY */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="uppercase tracking-[0.45em] text-green-400 text-xs mb-8">
            About TechAgro
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Built on Engineering. <br />
            Driven by Agriculture.
          </h2>

          <p className="mt-10 text-gray-300 text-lg leading-relaxed max-w-xl">
            <span className="text-white font-medium">Tech Agro</span> was
            founded in <span className="text-green-400">2013</span> with a clear
            vision — to engineer agricultural machinery that enhances
            productivity, reliability, and long-term value for farmers and
            agribusinesses.
          </p>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            The company was formally incorporated in{" "}
            <span className="text-green-400">2026</span>, marking a new chapter
            of expansion, technological advancement, and global ambition in the
            agro-manufacturing sector.
          </p>
        </motion.div>

        {/* RIGHT — HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className="space-y-12"
        >
          {/* FOUNDERS */}
          <div className="border border-white/10 rounded-3xl p-10 backdrop-blur-xl bg-white/5">
            <p className="uppercase tracking-[0.35em] text-xs text-green-400 mb-4">
              Leadership
            </p>

            <h3 className="text-2xl font-medium mb-6">Co-Founders & CEOs</h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                <span className="text-white font-medium">Deepak Dhull</span> —
                Co-Founder & CEO
              </p>
              <p>
                <span className="text-white font-medium">Sunil Dhull</span> —
                Co-Founder & CEO
              </p>
            </div>
          </div>

          {/* VALUES */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "Precision Engineering",
              "Heavy-Duty Manufacturing",
              "Farmer-Centric Design",
              "Sustainable Innovation",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl text-gray-300 text-sm tracking-wide"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
