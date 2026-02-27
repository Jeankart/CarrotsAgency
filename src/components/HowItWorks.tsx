'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your business, goals, and target audience to create a winning strategy',
  },
  {
    number: '02',
    title: 'Strategy & Setup',
    description: 'Campaign architecture, audience targeting, and creative development',
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description: 'Deploy campaigns with real-time monitoring and daily optimizations',
  },
  {
    number: '04',
    title: 'Reporting & Growth',
    description: 'Weekly reports with actionable insights and continuous scaling',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600">
            Our proven process delivers results from day one
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
