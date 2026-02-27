'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your business, goals, and target audience to create a winning strategy',
    timeline: 'Week 1',
    details: [
      'Competitive analysis & market research',
      'Audience persona development',
      'Goal setting & KPI definition',
      'Platform selection strategy'
    ]
  },
  {
    number: '02',
    title: 'Strategy & Setup',
    description: 'Campaign architecture, audience targeting, and creative development',
    timeline: 'Week 2-3',
    details: [
      'Campaign structure & budget allocation',
      'Audience targeting setup',
      'Ad creative production',
      'Landing page optimization',
      'Tracking & analytics implementation'
    ]
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description: 'Deploy campaigns with real-time monitoring and daily optimizations',
    timeline: 'Week 4+',
    details: [
      'Campaign launch across platforms',
      'Real-time performance monitoring',
      'A/B testing implementation',
      'Daily bid & budget adjustments',
      'Creative rotation & testing'
    ]
  },
  {
    number: '04',
    title: 'Reporting & Growth',
    description: 'Weekly reports with actionable insights and continuous scaling',
    timeline: 'Ongoing',
    details: [
      'Weekly performance reports',
      'ROI & conversion analysis',
      'Scaling successful campaigns',
      'New opportunity identification',
      'Strategy refinement'
    ]
  },
];

export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 px-6 bg-gray-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 md:mb-6">
            How We Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven process delivers results from day one
          </p>
        </motion.div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Background line */}
          <div className="absolute left-10 top-10 bottom-10 w-1 bg-gray-200 rounded-full hidden md:block" />
          
          {/* Animated progress line */}
          <motion.div 
            className="absolute left-10 top-10 w-1 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 rounded-full hidden md:block origin-top"
            style={{ height: lineProgress }}
          />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div 
                  className="flex gap-4 md:gap-8 p-6 md:p-10 rounded-2xl md:rounded-3xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group cursor-pointer"
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 text-white font-bold text-lg md:text-2xl relative z-10 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">{step.description}</p>
                    
                    {/* Expandable details */}
                    <motion.div
                      initial={false}
                      animate={{ height: expandedStep === index ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm font-semibold text-gray-700 mb-3">What's included:</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm mt-4">
                      {expandedStep === index ? 'Show less' : 'Show more'}
                      <svg 
                        className={`w-4 h-4 transition-transform ${expandedStep === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
