
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-32 hero-pattern">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in-left">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
              Tecnología de Vanguardia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Soluciones Electrónicas para el <span className="text-brand-600">Transporte Moderno</span>
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl max-w-2xl">
              Especialistas en hardware y software para autobuses y vehículos pesados y livianos.
              Reparación de ECUs y sistemas de comunicación avanzados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 button-shadow">
                Solicitar Servicio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-200 hover:bg-brand-50">
                Nuestros Servicios
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Circuito electrónico" 
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
