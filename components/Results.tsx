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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 md:mb-6">
            Results That Speak
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Proven metrics from hundreds of successful campaigns
          </p>
        </motion.div>

        {/* Results Grid with Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Stats Grid 2x2 */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-gray-50 border border-gray-200 text-center hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text mb-2 md:mb-3">
                  {result.value}
                </p>
                <p className="text-gray-600 font-semibold text-sm md:text-base lg:text-lg">{result.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Right - Animated Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] md:h-[400px] bg-gradient-to-br from-orange-50 to-white rounded-2xl md:rounded-3xl border border-gray-200 p-4 md:p-8"
          >
            {/* Chart Title */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Cost Per Acquisition</h3>
              <p className="text-xs md:text-sm text-gray-500">Before vs After partnering with us</p>
            </div>

            {/* Legend */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-gray-400 rounded" />
                <span className="text-xs font-semibold text-gray-600">Previous Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded" />
                <span className="text-xs font-semibold text-orange-600">With Carrots Agency</span>
              </div>
            </div>

            {/* Chart Container */}
            <div className="relative h-[240px]">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full border-t border-gray-200" />
                ))}
              </div>

              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 -ml-2">
                <span>$120</span>
                <span>$90</span>
                <span>$60</span>
                <span>$30</span>
                <span>$0</span>
              </div>

              {/* Line Chart */}
              <svg className="absolute inset-0 w-full h-full" style={{ paddingLeft: '20px', paddingRight: '10px' }}>
                {/* Previous Agency Line (stays high) */}
                <motion.polyline
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  points="0,60 90,55 180,65 270,60 360,70 450,65"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ strokeDasharray: 1000, strokeDashoffset: 0 }}
                />
                
                {/* With Carrots Line (starts same, then drops dramatically) */}
                <motion.polyline
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                  points="0,60 90,55 180,120 270,165 360,190 450,210"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ strokeDasharray: 1000, strokeDashoffset: 0 }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>

                {/* Data points for Carrots line */}
                {[
                  { x: 0, y: 60 },
                  { x: 90, y: 55 },
                  { x: 180, y: 120 },
                  { x: 270, y: 165 },
                  { x: 360, y: 190 },
                  { x: 450, y: 210 }
                ].map((point, i) => (
                  <motion.circle
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.15 }}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="#ea580c"
                    className="drop-shadow-lg"
                  />
                ))}
              </svg>

              {/* Month Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 mt-2" style={{ paddingLeft: '20px', paddingRight: '10px', paddingTop: '8px' }}>
                <span>Jan</span>
                <span>Feb</span>
                <span className="font-bold text-orange-600">Mar ↓</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>

              {/* Annotation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute top-[40%] right-[15%] bg-emerald-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              >
                -65% CPA
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
