import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function AboutPage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#123d2a,_#000)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.45em] text-green-400 text-xs mb-6"
          >
            About Tech Agro
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Engineering Excellence <br /> For Modern Agriculture
          </motion.h1>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#0f2e20,_#000)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-10">
              Our Journey
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <span className="text-white font-medium">Tech Agro</span> was
              founded in <span className="text-green-400">2013</span> with a
              clear mission — to manufacture agricultural machinery that
              delivers performance, durability, and long-term value.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              In <span className="text-green-400">2026</span>, the company was
              formally incorporated, marking a major milestone in our expansion,
              technological advancement, and commitment to global-quality
              agro-machinery manufacturing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="border border-white/10 rounded-3xl p-12 backdrop-blur-xl bg-white/5"
          >
            <h3 className="text-2xl font-medium mb-6">Leadership</h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                <span className="text-white font-medium">Deepak Dhull</span> —
                Co-Founder & CEO
              </p>
              <p>
                <span className="text-white font-medium">
                  Sunil Kumar Punia
                </span>{" "}
                — Co-Founder & CEO
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-semibold mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Precision Engineering",
              "Heavy-Duty Manufacturing",
              "Farmer-Centric Design",
              "Sustainable Innovation",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-xl text-gray-300"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#123d2a,_#000)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-12">
            Get In Touch
          </h2>

          <div className="border border-white/10 rounded-3xl p-12 backdrop-blur-xl bg-white/5 text-gray-300 space-y-6 text-lg">
            <p>
              Address: VPO MUNDHAL, MANDHAHERI, SISAR LINK ROAD, NEAR NH-9,
              HANSI, HISAR, HARYANA, 125033
            </p>

            <p>Email: info@techagro.co.in</p>
            <p>Phone: +91 99923 32017</p>
          </div>
        </div>
      </section>
      <WhatsAppButton />

      <Footer />
    </div>
  );
}