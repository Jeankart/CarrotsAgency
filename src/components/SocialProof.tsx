'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-600 font-semibold mb-4">TRUSTED BY LEADING AGENCIES</p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ duration: 0.6 }}
              className="h-12 w-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-semibold text-sm"
            >
              Brand {item}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '500+', label: 'Active Campaigns' },
            { number: '2M+', label: 'Leads Generated' },
            { number: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white border border-gray-200"
            >
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
