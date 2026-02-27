'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Google Ads',
    description: 'Lead Gen, Performance, PMax, Display campaigns optimized for conversion',
    icon: '📊',
  },
  {
    title: 'Meta Ads',
    description: 'Facebook & Instagram campaigns with pixel tracking and lookalike audiences',
    icon: '📱',
  },
  {
    title: 'TikTok Ads',
    description: 'Viral campaigns reaching Gen Z & younger demographics at scale',
    icon: '🎬',
  },
  {
    title: 'AI Assets',
    description: 'AI-generated images, videos, avatars & copy at scale',
    icon: '🤖',
  },
  {
    title: 'Landings & Ecommerce',
    description: 'High-converting landing pages and ecommerce optimization',
    icon: '🛍️',
  },
  {
    title: 'Banners & Design',
    description: 'Professional banners, videos & design assets for campaigns',
    icon: '🎨',
  },
];

export default function Services() {
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
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Complete digital marketing solutions for CPL, CPC, and performance campaigns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl overflow-hidden"
            >
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl group-hover:border-blue-300/60 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Hover Button */}
                <button className="mt-6 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
