'use client';

import { motion } from 'framer-motion';

const results = [
  { label: 'Avg. ROAS', value: '4.2x' },
  { label: 'Cost Per Lead', value: '-45%' },
  { label: 'Conversion Rate', value: '+320%' },
  { label: 'Client Retention', value: '94%' },
];

export default function Results() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Results That Speak
          </h2>
          <p className="text-lg text-gray-600">
            Proven metrics from hundreds of successful campaigns
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 text-center hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text mb-2">
                {result.value}
              </p>
              <p className="text-gray-600 font-semibold">{result.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
