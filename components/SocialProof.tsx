'use client';

import { motion } from 'framer-motion';

interface SocialProofProps {
  onContactClick: () => void;
}

export default function SocialProof({ onContactClick }: SocialProofProps) {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Overlapping Video Cards */}
          <div className="relative flex flex-col items-center lg:items-start">
            <div className="relative flex justify-center lg:justify-start h-[400px] md:h-[500px] items-center w-full">
              {/* Left Video - UGC1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="absolute left-0 lg:left-4 top-16 z-10"
              >
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [-5, -5, -5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="rounded-[40px] border-4 border-white shadow-xl overflow-hidden"
                  style={{
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))'
                  }}
                >
                  <video
                    src="/videos/UGC1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
                    className="w-32 md:w-44 h-56 md:h-80 object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Center Video - UGC2 (Larger) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute left-1/2 transform -translate-x-1/2 top-0 z-20"
              >
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="rounded-[40px] border-4 border-white shadow-2xl overflow-hidden"
                  style={{
                    filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.2))'
                  }}
                >
                  <video
                    src="/videos/UGC2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
                    className="w-40 md:w-52 h-72 md:h-96 object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Right Video - UGC3 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute right-0 lg:right-4 top-16 z-10"
              >
                <motion.div
                  animate={{ 
                    y: [0, 12, 0],
                    rotate: [5, 5, 5]
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="rounded-[40px] border-4 border-white shadow-xl overflow-hidden"
                  style={{
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))'
                  }}
                >
                  <video
                    src="/videos/UGC3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
                    className="w-32 md:w-44 h-56 md:h-80 object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <p className="text-orange-600 font-bold text-sm tracking-wider uppercase mb-3">AI-Powered UGC</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 md:mb-6">
                UGC Videos That Convert
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                Generate authentic, high-converting UGC-style videos at scale with AI. 
                Perfect for TikTok, Instagram Reels, and Meta ads. Create dozens of variations 
                in minutes, not weeks. No creators needed.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">AI avatars and voiceovers in any language</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Generate hundreds of video variations</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Optimized for TikTok & Meta platforms</span>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-wrap mt-8">
              <button
                onClick={onContactClick}
                className="relative px-12 py-5 rounded-full font-bold text-white overflow-hidden group text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" />
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Get Started →</span>
              </button>

              {/* Platform Logos */}
              <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center lg:justify-start">
                <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-16 h-16 flex items-center justify-center">
                  <img src="/Images/tiktok.webp" alt="TikTok" className="max-h-7 max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-16 h-16 flex items-center justify-center">
                  <img src="/Images/meta.svg" alt="Meta" className="max-h-7 max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-16 h-16 flex items-center justify-center">
                  <img src="/Images/google.svg.png" alt="Google" className="max-h-7 max-w-full object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
