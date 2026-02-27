'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Carrots Agency</h3>
            <p className="text-gray-400 text-sm">
              Your partner in digital marketing growth. Data-driven campaigns, proven results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Google Ads</a></li>
              <li><a href="#" className="hover:text-white transition">Meta Ads</a></li>
              <li><a href="#" className="hover:text-white transition">TikTok Ads</a></li>
              <li><a href="/ai-assets" className="hover:text-orange-500 transition font-semibold">AI Assets →</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2026 Carrots Agency. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
