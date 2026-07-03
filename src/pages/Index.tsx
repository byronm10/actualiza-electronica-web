import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import EcuExpertise from '@/components/EcuExpertise';
import ProcessSection from '@/components/ProcessSection';
import SolutionsSection from '@/components/SolutionsSection';
import BrandsSection from '@/components/BrandsSection';
import AboutSection from '@/components/AboutSection';
import ClientsSection from '@/components/ClientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    const smoothClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' });
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(a => a.addEventListener('click', smoothClick));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      anchors.forEach(a => a.removeEventListener('click', smoothClick));
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <EcuExpertise />
        <ProcessSection />
        <SolutionsSection />
        <BrandsSection />
        <AboutSection />
        <ClientsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />

      <a
        href="https://wa.me/573205272330"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 pl-5 pr-6 py-4 text-white shadow-[0_20px_50px_-12px_rgba(16,185,129,0.55)] transition-transform hover:scale-105 hover:bg-emerald-400"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">Escríbenos</span>
      </a>
    </div>
  );
};

export default Index;
