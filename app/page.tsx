'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import GoogleExpert from '@/components/GoogleExpert';
import HowItWorks from '@/components/HowItWorks';
import Results from '@/components/Results';
import AIHighlight from '@/components/AIHighlight';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import StickyMobileButton from '@/components/StickyMobileButton';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-white">
      <Header onContactClick={openModal} />
      <Hero onContactClick={openModal} />
      <Services />
      <SocialProof onContactClick={openModal} />
      <GoogleExpert />
      <HowItWorks />
      <Results />
      <AIHighlight />
      <CTA onContactClick={openModal} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <StickyMobileButton onClick={openModal} />
    </main>
  );
}
