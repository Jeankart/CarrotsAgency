'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Send email (mock - replace with actual API)
      console.log('Form submitted:', data);
      
      setSubmitSuccess(true);
      reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors z-10"
            >
              ✕
            </button>

            {submitSuccess ? (
              // Success Message
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 text-center min-h-96 flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                >
                  <span className="text-3xl">✓</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias!</h3>
                <p className="text-gray-600">
                  Hemos recibido tu solicitud. Nos pondremos en contacto pronto.
                </p>
              </motion.div>
            ) : (
              // Form
              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Contáctanos!
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Cuéntanos sobre tu proyecto y nos pondremos en contacto pronto.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre
                  </label>
                  <input
                    {...register('name', { required: 'El nombre es requerido' })}
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    {...register('email', {
                      required: 'El email es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido',
                      },
                    })}
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Teléfono
                  </label>
                  <input
                    {...register('phone', { required: 'El teléfono es requerido' })}
                    type="tel"
                    placeholder="Tu teléfono"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Empresa
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Tu empresa"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Recibirás una respuesta en 24 horas. Email:{' '}
                  <span className="font-semibold">carrotagency.info@gmail.com</span>
                </p>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
