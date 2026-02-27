'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
  {
    title: 'Google Ads',
    description: 'Lead Gen, Performance, PMax, Display campaigns optimized for conversion',
    details: {
      intro: 'Maximize your ROI with optimized, results-driven Google Ads campaigns.',
      services: [
        'Campaign setup and launch',
        'Ongoing management and optimization',
        'Search and Display campaigns',
        'Performance Max (PMax)',
        'Shopping Ads',
        'Strategic remarketing',
        'Detailed analytics and reporting'
      ]
    },
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Meta Ads',
    description: 'Facebook & Instagram campaigns with pixel tracking and lookalike audiences',
    details: {
      intro: 'Reach your target audience on Facebook and Instagram with highly segmented campaigns.',
      services: [
        'Facebook & Instagram campaign setup',
        'Pixel and event implementation',
        'Custom audience creation',
        'Lookalike audiences',
        'A/B testing of creatives',
        'Conversion optimization',
        'Advanced retargeting'
      ]
    },
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'TikTok Ads',
    description: 'Viral campaigns reaching Gen Z & younger demographics at scale',
    details: {
      intro: 'Connect with young audiences through viral and creative campaigns on TikTok.',
      services: [
        'TikTok campaign launch',
        'Viral content creation',
        'Gen Z & Millennial optimization',
        'Spark Ads',
        'In-Feed Ads',
        'TopView & Brand Takeover',
        'Performance analysis'
      ]
    },
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'AI Assets',
    description: 'AI-generated images, videos, avatars & copy at scale',
    details: {
      intro: 'Harness the power of AI to create high-quality advertising assets at scale.',
      services: [
        'AI-powered image generation',
        'Automated video creation',
        'AI avatars & voiceovers',
        'AI-assisted copywriting',
        'Ad variations at scale',
        'Creative optimization',
        'Mass asset testing'
      ]
    },
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Landings',
    description: 'High-converting landing pages optimized for ad campaigns',
    details: {
      intro: 'High-converting landing pages designed specifically for your ad campaigns.',
      services: [
        'Landing page design & development',
        'Conversion rate optimization (CRO)',
        'A/B testing',
        'Tracking tool integration',
        'Responsive design',
        'Speed & performance optimization',
        'Strategic forms & CTAs'
      ]
    },
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Banners & Design',
    description: 'Professional banners, videos & design assets for campaigns',
    details: {
      intro: 'Professional, eye-catching designs that maximize the impact of your campaigns.',
      services: [
        'Ad banner design',
        'Video ad creation',
        'Social media graphics',
        'Multi-format adaptation',
        'Animations & motion graphics',
        'Branding & corporate design',
        'Assets for all platforms'
      ]
    },
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [activeSnake, setActiveSnake] = useState(0);

  // Change active snake every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSnake((prev) => (prev + 1) % services.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 md:mb-6">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Complete digital marketing solutions for CPL, CPC, and performance campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedService(index)}
              >
                {/* Animated Border Snake - Only on active card */}
                <AnimatePresence>
                  {activeSnake === index && (
                    <motion.svg 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute pointer-events-none"
                      style={{ 
                        left: '-12px',
                        top: '-12px',
                        width: 'calc(100% + 24px)',
                        height: 'calc(100% + 24px)',
                      }}
                    >
                      <rect
                        x="12"
                        y="12"
                        width="calc(100% - 24px)"
                        height="calc(100% - 24px)"
                        rx="24"
                        ry="24"
                        fill="none"
                        stroke="url(#snakeGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="200 1000"
                        strokeDashoffset="0"
                        filter="url(#glow)"
                        style={{
                          animation: `borderSnake 10s linear infinite`
                        }}
                      />
                      <defs>
                        <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ea580c" stopOpacity="0" />
                          <stop offset="30%" stopColor="#fb923c" stopOpacity="0.5" />
                          <stop offset="60%" stopColor="#fb923c" stopOpacity="0.9" />
                          <stop offset="80%" stopColor="#ea580c" stopOpacity="1" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="1" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                    </motion.svg>
                  )}
                </AnimatePresence>

                <div className="text-orange-500 mb-6 relative z-10">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm relative z-10">{service.description}</p>
                
                <div className="mt-6 flex items-center text-orange-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          <style jsx>{`
            @keyframes borderSnake {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: -1250;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Icon and Title */}
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 pr-8">
                <div className="text-orange-500 flex-shrink-0">
                  {services[selectedService].icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                  {services[selectedService].title}
                </h3>
              </div>

              {/* Intro */}
              <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
                {services[selectedService].details.intro}
              </p>

              {/* Services List */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {services[selectedService].details.services.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="mt-6 md:mt-8 w-full px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:shadow-xl transition-all"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
