'use client';

import { motion } from 'framer-motion';

interface CTAProps {
  onContactClick: () => void;
}

export default function CTA({ onContactClick }: CTAProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 md:space-y-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
            Ready to Scale Your Campaigns?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Let's work together to drive qualified leads and grow your business. Get in touch today for a free consultation.
          </p>

          <div className="pt-2 md:pt-4">
            <button
              onClick={onContactClick}
              className="relative px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg text-white overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" />
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Contact Us Now →</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
