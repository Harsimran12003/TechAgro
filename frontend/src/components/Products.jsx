import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Rice Transplanter 2ZG-6D",
    power: "24.2 BHP",
    description:
      "A compact yet powerful harvester engineered for efficiency, reliability, and consistent field performance.",
    image: "./rice-1.png",
  },
  {
    title: "Multi Feeder Chain Harvester 4LZT-7.0ZS",
    power: "102 BHP",
    description:
      "A balanced powerhouse delivering enhanced productivity with advanced engineering and durability.",
    image: "./harvester-102-1.png",
  },
  {
    title: "Multi Feeder Chain Harvester",
    power: "120 HP",
    description:
      "Our flagship high-performance harvester built for large-scale operations and maximum output.",
    image: "./harvester-120-1.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#102e22,_#000)]"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[260px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-28"
        >
          <p className="uppercase tracking-[0.45em] text-green-400 text-xs mb-6">
            Our Products
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Engineered for Every Scale of Farming
          </h2>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((product, index) => {
            const productSlug = product.power
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full flex flex-col transition-all duration-500 group-hover:border-green-500/40">
                  
                  {/* Power Badge */}
                  <div className="absolute -top-6 left-8 px-6 py-2 rounded-full bg-green-500 text-black text-xs tracking-widest font-semibold shadow-lg">
                    {product.power}
                  </div>

                  {/* FIX 1: Same height image container */}
                  <div className="relative mb-10 h-[220px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-green-500/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition"></div>
                    
                    <img
                      src={product.image}
                      alt={product.title}
                      className="relative z-10 max-h-[200px] object-contain transition-transform duration-500 group-hover:-translate-y-3"
                    />
                  </div>

                  {/* FIX 2: Title starts at same height */}
                  <Link
                    to={`/products/${productSlug}`}
                    className="text-xl font-medium mb-4 hover:text-green-400 transition"
                  >
                    {product.title}
                  </Link>

                  <p className="text-gray-300 leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* FIX 3: Same link used here */}
                  <div className="mt-auto">
                    <Link
                      to={`/products/${productSlug}`}
                      className="uppercase tracking-[0.3em] text-xs text-green-400 hover:text-green-300 transition"
                    >
                      View Specifications →
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}