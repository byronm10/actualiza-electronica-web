
import { Bus, Car, Cpu, Wifi, Camera, Navigation, Wrench } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  return (
    <div className="service-card animate-fade-in" style={{ animationDelay: `${delay * 0.1}s` }}>
      <div className="mb-4 p-3 inline-flex items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Hardware para Autobuses",
      description: "Instalación y mantenimiento de hardware especializado para todo tipo de autobuses y flotas.",
      icon: <Bus size={24} />,
    },
    {
      title: "Vehículos Pesados y Livianos",
      description: "Soluciones tecnológicas adaptadas para diferentes tipos de vehículos comerciales e industriales.",
      icon: <Car size={24} />,
    },
    {
      title: "Reparación de ECUs",
      description: "Diagnóstico preciso y reparación profesional de unidades de control electrónico (ECUs).",
      icon: <Cpu size={24} />,
    },
    {
      title: "Sistemas WiFi",
      description: "Implementación de redes WiFi robustas para flotas y vehículos de transporte.",
      icon: <Wifi size={24} />,
    },
    {
      title: "Cámaras de Seguridad",
      description: "Sistemas de videovigilancia de alta definición para mejorar la seguridad en todo tipo de vehículos.",
      icon: <Camera size={24} />,
    },
    {
      title: "GPS y Navegación",
      description: "Tecnología de geolocalización y seguimiento para gestión eficiente de flotas.",
      icon: <Navigation size={24} />,
    },
    {
      title: "Accesorios Especializados",
      description: "Amplia gama de accesorios electrónicos diseñados específicamente para el sector transporte.",
      icon: <Wrench size={24} />,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones Electrónicas Integrales
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos servicios especializados que combinan innovación tecnológica con experiencia en el sector automotriz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
