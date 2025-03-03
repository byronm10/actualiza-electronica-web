import { motion } from 'framer-motion';
import { Cpu, Award, Clock, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      title: "Innovación Tecnológica",
      description: "Nos mantenemos a la vanguardia con las últimas tecnologías del sector.",
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: "Excelencia Técnica",
      description: "Nuestro equipo cuenta con certificaciones y amplia experiencia en el sector.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Servicio Rápido",
      description: "Entendemos la importancia del tiempo en su negocio y respondemos con agilidad.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Confiabilidad",
      description: "Ofrecemos soluciones robustas y duraderas para sus necesidades tecnológicas.",
      icon: <ShieldCheck className="h-6 w-6" />
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="md:w-1/2 animate-fade-in-left">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
              Sobre Nosotros
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expertos en Electrónica para el Sector Transporte
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              En Actualidad Electrónica nos especializamos en proporcionar soluciones tecnológicas 
              avanzadas para el sector transporte, combinando innovación y experiencia técnica.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Nuestro equipo de profesionales altamente cualificados está comprometido 
              con ofrecer el mejor servicio, garantizando la satisfacción de nuestros clientes 
              y contribuyendo a la modernización del transporte.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-lg bg-white/70 border border-border"
                >
                  <div className="mt-1 flex-shrink-0 p-2 rounded-md bg-brand-100 text-brand-700">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in-right">
            <div className="relative aspect-square">
              <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] rounded-2xl overflow-hidden border-8 border-white shadow-xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Nuestro equipo" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute top-0 left-0 w-[60%] h-[60%] rounded-xl overflow-hidden border-8 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Tecnología de transporte" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute bottom-0 right-0 w-[55%] h-[50%] rounded-xl overflow-hidden border-8 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Electrónica de vehículos" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
