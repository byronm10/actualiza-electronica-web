import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import SolutionsSection from '@/components/SolutionsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Función para manejar los efectos de aparición mediante IntersectionObserver
    const handleScrollAnimation = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });
      
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(el => observer.observe(el));
      
      return () => {
        elements.forEach(el => observer.unobserve(el));
      };
    };
    
    handleScrollAnimation();
    
    // Función para manejar el scroll suave a las secciones
    const handleSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
    };
    
    handleSmoothScroll();
  }, []);
  
  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    // Reemplaza este número con el número real de WhatsApp (incluye el código de país)
    const phoneNumber = "+34123456789";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <SolutionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
};

export default Index;
