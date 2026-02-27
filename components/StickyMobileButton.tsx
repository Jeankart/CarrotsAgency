'use client';

import { motion } from 'framer-motion';

interface StickyMobileButtonProps {
  onClick: () => void;
}

export default function StickyMobileButton({ onClick }: StickyMobileButtonProps) {
  return (
    <motion.button
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 md:hidden z-30 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold shadow-2xl hover:shadow-xl transition-all flex items-center gap-2 text-base"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      Contact
    </motion.button>
  );
}
