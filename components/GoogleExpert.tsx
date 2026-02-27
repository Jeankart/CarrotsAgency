'use client';

import { motion } from 'framer-motion';

export default function GoogleExpert() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <p className="text-orange-600 font-bold text-sm tracking-wider uppercase mb-3">Google Certified</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 md:mb-6">
                Google Ads Experts
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                With over 15 years of experience managing high-performance Google Ads campaigns for international airlines, SaaS platforms, and digital services, we deliver data-driven results that scale.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our expertise spans the entire Google ecosystem: Performance Max, Shopping Ads, Display & Video 360, Demand Gen campaigns, and advanced conversion tracking. We optimize for purchases, qualified leads, and ROAS through strategic audience segmentation, IP-level targeting, server-side integrations, and continuous A/B testing.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Performance Max & Smart Bidding optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Advanced conversion tracking & GA4 integration</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Display, Video, and Demand Gen campaigns</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Server-side tagging & enhanced conversions</span>
              </div>
            </div>

            {/* Google Product Logos */}
            <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 flex-wrap">
              <span className="text-sm font-semibold text-gray-500">Certified in:</span>
              <div className="flex items-center gap-3 flex-wrap">
                {/* Google Main Logo */}
                <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 border border-gray-200 shadow-sm w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img src="/Images/google.svg.png" alt="Google" className="max-h-6 md:max-h-10 max-w-full object-contain" />
                </div>
                {/* Google Ads */}
                <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 border border-gray-200 shadow-sm w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img src="/Images/ads.png" alt="Google Ads" className="max-h-6 md:max-h-10 max-w-full object-contain" />
                </div>
                {/* Google Analytics */}
                <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 border border-gray-200 shadow-sm w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img src="/Images/google-analytics-icon.webp" alt="Google Analytics" className="max-h-6 md:max-h-10 max-w-full object-contain" />
                </div>
                {/* Tag Manager */}
                <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 border border-gray-200 shadow-sm w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img src="/Images/tagmanager.webp" alt="Tag Manager" className="max-h-6 md:max-h-10 max-w-full object-contain" />
                </div>
                {/* Display & Video 360 */}
                <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 border border-gray-200 shadow-sm w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img src="/Images/google-display-and-video-ads_800.png" alt="Display & Video 360" className="max-h-6 md:max-h-10 max-w-full object-contain" />
                </div>
                {/* Search */}
                <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 border border-gray-200 shadow-sm w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img src="/Images/search.png" alt="Google Search" className="max-h-6 md:max-h-10 max-w-full object-contain" />
                </div>
                {/* YouTube */}
                <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 border border-gray-200 shadow-sm w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img src="/Images/Youtube_logo.png" alt="YouTube" className="max-h-6 md:max-h-10 max-w-full object-contain" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Google Ads Platform Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
              <img 
                src="/Images/adwords.png" 
                alt="Google Ads Platform" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
