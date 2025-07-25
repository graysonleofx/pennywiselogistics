'use client';

import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection.jsx';
import TrackingSection from '../components/TrackingSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import TrustedBySection from '../components/TrustedBySection'
import TestimonialsSection from '@/components/TestimonialsSection';
import PaymentMethodsSection from '@/components/PaymentMethodsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <ServicesSection />
      <TrackingSection />
      <TestimonialsSection />
      <PaymentMethodsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}