'use client';

import { motion } from 'framer-motion';

export default function AIHighlight() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 text-purple-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 0 1 8 17v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.461z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 font-semibold">AI-Powered Automation</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              AI at Your Core
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Leverage artificial intelligence to scale your marketing. From AI-generated avatars and product images to automated copy optimization, we use cutting-edge AI to create campaigns that convert.
            </p>

            <div className="space-y-4">
              {[
                'AI-generated images, videos & avatars',
                'Intelligent audience segmentation',
                'Predictive analytics & optimization',
                'Automated copy & landing page testing',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    ✓
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
