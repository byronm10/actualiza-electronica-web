
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Servicios",
      links: [
        { name: "Hardware para Autobuses", href: "#servicios" },
        { name: "Reparación de ECUs", href: "#servicios" },
        { name: "Sistemas WiFi", href: "#servicios" },
        { name: "Cámaras de Seguridad", href: "#servicios" },
        { name: "GPS y Navegación", href: "#servicios" },
      ]
    },
    {
      title: "Compañía",
      links: [
        { name: "Sobre Nosotros", href: "#nosotros" },
        { name: "Casos de Éxito", href: "#" },
        { name: "Nuestro Equipo", href: "#" },
        { name: "Noticias", href: "#" },
        { name: "Contacto", href: "#contacto" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Términos de Servicio", href: "#" },
        { name: "Política de Privacidad", href: "#" },
        { name: "Cookies", href: "#" },
      ]
    }
  ];
  
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="#inicio" className="inline-block text-2xl font-bold">
                Actualidad<span className="text-brand-400">Electrónica</span>
              </a>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Soluciones tecnológicas avanzadas para el sector transporte. Especialistas en hardware, 
              software y electrónica para todo tipo de vehículos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-brand-800 hover:bg-brand-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-brand-800 hover:bg-brand-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-brand-800 hover:bg-brand-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-brand-800 hover:bg-brand-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Actualidad Electrónica. Todos los derechos reservados.
          </p>
          <div className="text-gray-400 text-sm">
            Diseñado con <span className="text-brand-400">♥</span> para brindar la mejor experiencia
          </div>
        </div>
      </div>
    </footer>
  );
}
