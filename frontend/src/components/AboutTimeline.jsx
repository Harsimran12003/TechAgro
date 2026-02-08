import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2013",
    title: "Foundation",
    description:
      "Tech Agro was founded with a vision to engineer reliable, high-performance agricultural machinery.",
  },
  {
    year: "2016–2020",
    title: "Growth & Trust",
    description:
      "Expanded manufacturing capacity and built long-term trust with farmers and dealer networks.",
  },
  {
    year: "2021–2025",
    title: "Innovation Phase",
    description:
      "Focused on precision engineering, heavy-duty machinery, and future-ready designs.",
  },
  {
    year: "2026",
    title: "Incorporation & Expansion",
    description:
      "Formally incorporated to scale operations and prepare for national and global expansion.",
  },
];

export default function AboutTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-40 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f2e20,_#000)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.45em] text-green-400 text-xs mb-6">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            From Vision to Industry Presence
          </h2>
        </div>

        {/* TIMELINE */}
        <div ref={containerRef} className="relative pl-14">
          {/* Static Line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-white/10"></div>

          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3 top-0 w-[2px] bg-gradient-to-b from-green-500 to-green-300 origin-top"
          />

          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <span className="absolute left-[-2px] top-2 w-5 h-5 rounded-full bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.7)]"></span>

                {/* Card */}
                <div className="ml-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <p className="text-green-400 text-sm tracking-widest mb-2">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
