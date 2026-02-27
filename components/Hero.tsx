'use client';

import { motion, useMotionValue, animate, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroProps {
  onContactClick: () => void;
}

function Counter({ from, to, suffix = '' }: { from: number; to: number; suffix?: string }) {
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      if (suffix === '%') {
        setDisplayValue(Math.round(latest));
      } else if (suffix === '+' && to >= 1000000) {
        setDisplayValue(parseFloat((latest / 1000000).toFixed(1)));
      } else {
        setDisplayValue(Math.round(latest));
      }
    });

    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    
    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, to, suffix]);

  return (
    <span>
      {displayValue}
      {suffix === '+' && to >= 1000000 && 'M+'}
      {suffix === '+' && to < 1000000 && '+'}
      {suffix === '%' && '%'}
    </span>
  );
}

function BudgetCalculator({ onContactClick }: { onContactClick: () => void }) {
  const [budget, setBudget] = useState(5000);
  
  // Calculate leads based on budget (e.g., $50 per lead)
  const leads = Math.round(budget / 50);

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center w-full max-w-4xl mx-auto">
      {/* Budget Slider */}
      <div className="px-6 md:px-8 py-3 rounded-[10px] font-bold text-gray-900 bg-white/60 backdrop-blur-xl border-2 border-white/80 hover:border-orange-400 transition-all text-base md:text-lg shadow-lg w-full md:w-auto md:min-w-[280px] h-[60px] flex items-center">
        <div className="w-full">
          <div className="text-xs font-semibold mb-1 text-center">Campaign Budget</div>
          <div className="flex items-center gap-3">
            <input 
              type="range" 
              min="1000" 
              max="50000" 
              step="1000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="flex-1 h-1.5 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((budget - 1000) / 49000) * 100}%, #fed7aa ${((budget - 1000) / 49000) * 100}%, #fed7aa 100%)`
              }}
            />
          </div>
          <div className="text-center mt-1 text-lg font-black text-orange-600">
            ${budget.toLocaleString('en-US')}
          </div>
        </div>
      </div>

      {/* Expected Leads */}
      <div className="px-6 md:px-8 py-3 rounded-[10px] font-bold text-gray-900 bg-white/60 backdrop-blur-xl border-2 border-white/80 transition-all text-base md:text-lg shadow-lg w-full md:w-auto md:min-w-[200px] h-[60px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-xs font-semibold mb-0.5">Expected Leads</div>
          <div className="text-2xl font-black text-orange-600">
            {leads}+
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <button
        onClick={onContactClick}
        className="relative px-8 md:px-12 py-5 rounded-full font-bold text-white overflow-hidden group text-base md:text-lg shadow-xl hover:shadow-2xl transition-all whitespace-nowrap w-full md:w-auto h-[60px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" />
        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10">Get Started →</span>
      </button>
    </div>
  );
}

function RotatingText() {
  const words = [
    'Digital Marketing',
    'Performance Ads',
    'Social Media',
    'AI Campaigns',
    'Growth Strategy'
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-block min-w-[150px] sm:min-w-[200px] md:min-w-[280px] lg:min-w-[320px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] w-full max-w-full flex items-center justify-center pt-20 md:pt-24 pb-8 md:pb-12 px-4 bg-gradient-to-br from-orange-50/20 via-transparent to-orange-50/10 overflow-hidden">
      {/* SVG Grid Background */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path 
              d="M 100 0 L 0 0 0 100" 
              fill="none" 
              stroke="rgba(249, 115, 22, 0.35)" 
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating Image 1 - Left - UGC */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-[15%] top-[25%] hidden xl:block z-20"
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [-8, -8, -8]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative rounded-[40px] border-4 border-white shadow-lg overflow-visible"
          style={{
            filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))'
          }}
        >
          <img 
            src="/Images/UGC.jpeg" 
            alt="UGC Content" 
            className="w-36 h-48 object-cover rounded-[36px]"
          />
          
          {/* TikTok Logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-4 -left-4 bg-white/30 backdrop-blur-md rounded-lg p-2 border border-white/30 shadow-lg"
          >
            <img src="/Images/tiktok.webp" alt="TikTok" className="w-7 h-7 object-contain" />
          </motion.div>

          {/* Meta Logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-4 -right-4 bg-white/30 backdrop-blur-md rounded-lg p-2 border border-white/30 shadow-lg"
          >
            <img src="/Images/meta.svg" alt="Meta" className="w-7 h-7 object-contain" />
          </motion.div>

          {/* Floating Emojis around left image */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
            className="absolute -top-8 -right-6 text-4xl"
          >
            😎
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 8, 0],
              rotate: [0, -12, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute top-[60%] -left-8 text-2xl"
          >
            🧡
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Image 2 - Right - Gaming */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute right-[15%] top-[45%] hidden lg:block z-20"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [6, 6, 6]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative rounded-[40px] border-4 border-white shadow-lg overflow-visible"
          style={{
            filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))'
          }}
        >
          <img 
            src="/Images/Gaming.jpeg" 
            alt="Gaming Content" 
            className="w-28 h-40 object-cover rounded-[36px]"
          />
          
          {/* Google Logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-4 -left-4 bg-white/30 backdrop-blur-md rounded-lg p-2 border border-white/30 shadow-lg"
          >
            <img src="/Images/google.svg.png" alt="Google" className="w-7 h-7 object-contain" />
          </motion.div>

          {/* Floating Emojis around right image */}
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
            className="absolute -top-6 -left-8 text-3xl"
          >
            ⭐
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -8, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-[20%] -right-10 text-3xl sm:text-4xl md:text-5xl"
          >
            🚀
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-[95%] md:w-[90%] mx-auto relative z-10">
        {/* Liquid Glass Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[4rem] overflow-hidden shadow-2xl liquid-glass"
          style={{ 
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)'
          }}
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-3 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.2] tracking-tight w-full max-w-full"
            >
              <div className="mb-1">Your All-in-One</div>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <RotatingText />
                <span>Agency</span>
              </div>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium px-2"
            >
              Drive qualified leads with AI-powered campaigns across Google Ads, Meta, TikTok & more. 
              Data-driven strategies. Measurable results.
            </motion.p>

            {/* Budget Calculator & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 w-full"
            >
              <BudgetCalculator onContactClick={onContactClick} />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-10 pt-10 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2 md:mb-3">
                  <Counter from={0} to={500} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Active Campaigns</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2 md:mb-3">
                  <Counter from={0} to={2000000} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Leads Generated</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2 md:mb-3">
                  <Counter from={0} to={98} suffix="%" />
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
