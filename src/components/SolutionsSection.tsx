
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export default function SolutionsSection() {
  const solutions = [
    {
      id: "flota",
      title: "Gestión de Flotas",
      description: "Sistemas integrados para monitoreo y administración eficiente de flotas de transporte.",
      features: [
        "Seguimiento GPS en tiempo real",
        "Control de combustible y mantenimiento",
        "Análisis de rutas y comportamiento de conducción",
        "Alertas y notificaciones automáticas"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "seguridad",
      title: "Seguridad Avanzada",
      description: "Soluciones de seguridad electrónica para proteger vehículos, pasajeros y carga.",
      features: [
        "Sistemas de videovigilancia HD",
        "Control de acceso biométrico",
        "Alarmas con notificación remota",
        "Protección contra manipulación de equipos"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "diagnostico",
      title: "Diagnóstico Inteligente",
      description: "Herramientas avanzadas para diagnóstico preciso de sistemas electrónicos.",
      features: [
        "Lectura y análisis de códigos de falla",
        "Diagnóstico remoto en tiempo real",
        "Histórico detallado de rendimiento",
        "Reparación preventiva de componentes"
      ],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="soluciones" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
            Nuestras Soluciones
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnología que Transforma el Transporte
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubra nuestras soluciones integradas diseñadas específicamente para el sector transporte.
          </p>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="flota" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-transparent">
              {solutions.map(solution => (
                <TabsTrigger 
                  key={solution.id} 
                  value={solution.id}
                  className="data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700 data-[state=active]:shadow py-3"
                >
                  {solution.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {solutions.map(solution => (
              <TabsContent key={solution.id} value={solution.id}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                        <p className="text-muted-foreground mb-6">{solution.description}</p>
                        <ul className="space-y-3">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-brand-50 flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hidden md:block">
                        <div className="relative h-full w-full min-h-[300px]">
                          <img 
                            src={solution.image} 
                            alt={solution.title} 
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
