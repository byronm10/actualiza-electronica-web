
import { useState, useEffect } from 'react';
import { Menu, X, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric-400 to-plasma-500 shadow-[0_0_24px_-4px_hsl(191_100%_48%/0.7)]">
            <Zap className="h-5 w-5 text-carbon-950" strokeWidth={2.5} />
          </span>
          <span className="text-xl md:text-2xl font-bold text-white">
            Actualidad
            <span className="gradient-text-cyan">Electrónica</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="link-underline text-sm font-medium text-white/80 hover:text-white transition-colors"
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
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-electric-400" />
            WhatsApp
          </a>
          <Button asChild className="btn-glow bg-gradient-to-r from-electric-400 to-plasma-500 text-carbon-950 font-semibold hover:from-electric-300 hover:to-plasma-400">
            <a href="#contacto">Solicitar diagnóstico</a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden md:ml-4 rounded-md border border-white/10 bg-white/[0.03] p-2 text-white"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/5 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/85 py-2.5 px-4 hover:bg-white/[0.05] rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="mt-2 bg-gradient-to-r from-electric-400 to-plasma-500 text-carbon-950 font-semibold">
              <a href="#contacto" onClick={() => setIsOpen(false)}>Solicitar diagnóstico</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
