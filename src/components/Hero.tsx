'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 -z-10" />

      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Your Digital Marketing{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Growth Engine
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We drive qualified leads through data-driven campaigns across Google Ads, Meta, TikTok & more. 
              AI-powered assets. Measurable results. Zero fluff.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onContactClick}
              className="relative px-8 py-3 rounded-lg font-semibold text-white overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg" />
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md" />
              <span className="relative z-10">Get Started</span>
            </button>

            <button className="px-8 py-3 rounded-lg font-semibold text-gray-900 border-2 border-gray-900 hover:bg-gray-50 transition-colors">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Campaigns</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">2M+</p>
              <p className="text-sm text-gray-600">Leads Generated</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 lg:h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl" />
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 text-blue-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <p className="text-gray-700 font-semibold">Trusted by agencies worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
