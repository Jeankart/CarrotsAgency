'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  monthlyBudget: string;
  services: string[];
}

const videos = ['/videos/UGC1.mp4', '/videos/UGC2.mp4', '/videos/UGC3.mp4'];

export default function AIAssetsLanding() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('AI Assets Lead:', data);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Back to Home */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold text-sm">Back</span>
          </motion.button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-sm rounded-full shadow-lg">
              🚀 AI-Powered Marketing Assets
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Scale Your Ads with
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              AI-Generated Content
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Generate unlimited UGC videos, product images, and AI avatars in minutes. 
            Perfect for small-to-medium businesses and agencies looking to scale ad performance without hiring creators.
          </p>

          {/* Platform Logos */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-sm font-semibold text-gray-500">Works on:</span>
            <div className="flex gap-3">
              <div className="bg-white rounded-xl p-2 border border-gray-200 shadow-sm">
                <img src="/Images/tiktok.webp" alt="TikTok" className="w-8 h-8 object-contain" />
              </div>
              <div className="bg-white rounded-xl p-2 border border-gray-200 shadow-sm">
                <img src="/Images/meta.svg" alt="Meta" className="w-8 h-8 object-contain" />
              </div>
              <div className="bg-white rounded-xl p-2 border border-gray-200 shadow-sm">
                <img src="/Images/google.svg.png" alt="Google" className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits & Social Proof */}
          <div className="space-y-8">
            {/* Video Proof */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See AI UGC in Action</h3>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <video
                  ref={videoRef}
                  key={currentVideoIndex}
                  src={videos[currentVideoIndex]}
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                  className="w-full aspect-[9/16] max-h-[500px] object-cover"
                />
                {/* Video indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {videos.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentVideoIndex ? 'bg-orange-500 w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
              <div className="space-y-4">
                {[
                  'Unlimited AI-generated UGC videos',
                  'AI avatars in 40+ languages',
                  'Product photography & lifestyle images',
                  'Ad copy variations with AI writing',
                  'A/B testing creative assets',
                  '10x faster than traditional production',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: '95%', label: 'Faster Production' },
                { value: '-80%', label: 'Lower Costs' },
                { value: '10x', label: 'More Variations' },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl p-6 text-center text-white shadow-lg">
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sticky top-24"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-10">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">We're On It! 🥕</h3>
                  <p className="text-gray-600">Our team will contact you within 24 hours with AI asset samples.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Start Creating Today</h3>
                    <p className="text-gray-600">Get AI-generated assets for your next campaign</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
                        })}
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Phone *</label>
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Company</label>
                      <input
                        {...register('company')}
                        type="text"
                        placeholder="Your company name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Monthly Budget */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Monthly Ad Budget</label>
                      <select
                        {...register('monthlyBudget')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                      </select>
                    </div>

                    {/* Services Interest */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Interested in:</label>
                      <div className="space-y-2">
                        {['UGC Videos', 'AI Avatars', 'Product Images', 'Ad Copy'].map((service) => (
                          <label key={service} className="flex items-center gap-2 cursor-pointer">
                            <input
                              {...register('services')}
                              type="checkbox"
                              value={service}
                              className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                            />
                            <span className="text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Get AI Assets Now →'}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Response within 24h • Free samples included
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
