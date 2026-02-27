'use client';

import { motion } from 'framer-motion';

interface CTAProps {
  onContactClick: () => void;
}

export default function CTA({ onContactClick }: CTAProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Scale Your Campaigns?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Let's work together to drive qualified leads and grow your business. Get in touch today for a free consultation.
          </p>

          <div className="pt-8">
            <button
              onClick={onContactClick}
              className="relative px-12 py-4 rounded-lg font-bold text-lg text-white overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg" />
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md" />
              <span className="relative z-10">Contact Us Now</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
