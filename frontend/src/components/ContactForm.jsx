import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#123d2a,_#000)]"></div>

      {/* Ambient Glows */}
      <div className="absolute -top-40 left-[-200px] w-[500px] h-[500px] bg-green-500/15 blur-[220px]"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-600/10 blur-[220px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="uppercase tracking-[0.45em] text-green-400 text-xs mb-8">
            Contact Tech Agro
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Let’s Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Future of Agriculture
            </span>
          </h2>

          <p className="mt-10 text-gray-300 text-lg leading-relaxed max-w-xl">
            Whether you’re interested in our machinery, distribution
            partnership, or business collaboration — our team is ready to
            connect with you.
          </p>

          <p className="mt-6 text-gray-400 text-sm max-w-xl">
            Fill out the form and our representatives will contact you shortly.
          </p>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
        >
          <form className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
              />
            </div>

            

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="relative w-full py-4 rounded-full bg-green-500 text-black uppercase tracking-[0.3em] text-xs font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-green-500 transition">
                Submit Inquiry
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
