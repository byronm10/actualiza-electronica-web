
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const columns = [
  {
    title: 'Servicios',
    links: [
      { name: 'Reparación de ECUs', href: '#ecu' },
      { name: 'WiFi para buses', href: '#servicios' },
      { name: 'Cámaras 360°', href: '#servicios' },
      { name: 'GPS y telemática', href: '#servicios' },
      { name: 'Sistemas de audio', href: '#servicios' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { name: 'Nosotros', href: '#nosotros' },
      { name: 'Proceso', href: '#proceso' },
      { name: 'Soluciones', href: '#soluciones' },
      { name: 'Clientes', href: '#clientes' },
      { name: 'Contacto', href: '#contacto' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-paper-200 bg-paper-50 text-paper-700 mt-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 max-w-md">
            <a href="#inicio" aria-label="Actualidad Electrónica" className="inline-flex">
              <Logo height={44} />
            </a>
            <p className="mt-5 text-sm leading-relaxed">
              Laboratorio de reparación de módulos electrónicos e integrador de sistemas de flota para el
              transporte pesado en Colombia. Ingeniería propia, banco de pruebas y garantía real.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+573205272330" className="flex items-center gap-2 hover:text-paper-900 transition-colors">
                <Phone className="h-4 w-4 text-ocean-600" /> +57 320 527 2330
              </a>
              <a href="mailto:contabilidad@actualidadelectronica.com.co" className="flex items-center gap-2 hover:text-paper-900 transition-colors">
                <Mail className="h-4 w-4 text-ocean-600" /> contabilidad@actualidadelectronica.com.co
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-ocean-600 shrink-0" />
                <span>Cr15 54-186, Soledad · Atlántico, Colombia 08001</span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/actualidadelectronica"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-200 bg-white hover:border-ocean-300 hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/actualidadelectronica"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-200 bg-white hover:border-ocean-300 hover:bg-ocean-50 hover:text-ocean-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/573205272330"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-paper-200 bg-white px-4 text-xs font-semibold hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {columns.map(col => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-paper-900 uppercase tracking-widest">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm hover:text-ocean-700 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-paper-200 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper-500">
          <p>© {currentYear} Actualidad Electrónica S.A.S. Todos los derechos reservados.</p>
          <p className="font-mono">Ingeniería electrónica · Transporte · Colombia</p>
        </div>
      </div>
    </footer>
  );
}
