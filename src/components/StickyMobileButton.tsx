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
      className="fixed bottom-6 right-6 md:hidden z-30 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow-lg hover:shadow-xl transition-shadow"
    >
      💬 Contactar
    </motion.button>
  );
}
