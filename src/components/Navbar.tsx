
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'ECU', href: '#ecu' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Soluciones', href: '#soluciones' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contacto', href: '#contacto' },
];

const WHATSAPP_URL = 'https://wa.me/573205272330';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <Logo height={76} />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="link-underline text-sm font-medium text-paper-700 hover:text-paper-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-paper-700 hover:text-paper-900 transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-ocean-600" />
            WhatsApp
          </a>
          <Button
            asChild
            className="btn-glow rounded-full bg-gradient-to-r from-ocean-700 to-ocean-500 text-white font-semibold hover:from-ocean-600 hover:to-ocean-400"
          >
            <a href="#contacto">Solicitar diagnóstico</a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden md:ml-4 rounded-lg border border-paper-200 bg-white p-2 text-paper-800"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-nav border-t border-paper-200/70 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-paper-800 py-2.5 px-4 hover:bg-paper-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full bg-gradient-to-r from-ocean-700 to-ocean-500 text-white font-semibold"
            >
              <a href="#contacto" onClick={() => setIsOpen(false)}>Solicitar diagnóstico</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
