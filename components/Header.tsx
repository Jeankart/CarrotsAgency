'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        isScrolled 
          ? 'text-black' 
          : 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
      }`}
      style={isScrolled ? {
        background: 'rgba(211, 211, 211, 0.3)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        padding: '0.4rem 0'
      } : {
        padding: '0.5rem 0'
      }}
    >
      <div className="w-full max-w-[95%] md:w-[90%] mx-auto flex items-center justify-between px-2 sm:px-0">
        {/* Logo */}
        <motion.div
          layout
          className="flex items-center gap-3"
        >
          <div className="relative bg-white/35 backdrop-blur-md rounded-xl p-2 border border-white/30 shadow-sm overflow-hidden">
            <img src="/logoC.png" alt="Carrots Agency" className="w-7 h-7 object-contain relative z-10" />
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
          </div>
          <span className="font-black text-lg md:text-xl lg:text-2xl tracking-tight hidden sm:block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            CarrotsAgency AI
          </span>
        </motion.div>

        {/* Start Now Button */}
        <motion.button
          layout
          onClick={onContactClick}
          className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${
            isScrolled
              ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white border border-orange-600'
              : 'bg-white/20 hover:bg-white/30 border border-white/40'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Start Now</span>
          {/* Arrow Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
}
