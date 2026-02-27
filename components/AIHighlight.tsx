'use client';

import { motion } from 'framer-motion';

export default function AIHighlight() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-64 md:h-96 bg-gradient-to-br from-orange-500 to-orange-400 rounded-3xl md:rounded-[3rem] overflow-hidden order-2 lg:order-1 flex items-center justify-center"
          >
            <svg className="w-20 md:w-32 h-20 md:h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              Performance Specialists
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We specialize in driving qualified leads and sales for digital products. Whether you're launching an app, scaling a SaaS, or generating leads for your service, we build high-performance campaigns that deliver measurable ROI.
            </p>

            <div className="space-y-4">
              {[
                'Mobile Apps & SaaS growth campaigns',
                'E-commerce & digital product launches',
                'Lead generation for B2B & B2C services',
                'Landing pages optimized for conversion',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
