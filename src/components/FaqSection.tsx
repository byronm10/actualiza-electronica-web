import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: '¿Cuánto se demora la reparación de una ECU?',
    a: 'La mayoría de módulos se entrega entre 3 y 7 días hábiles desde la aprobación de la cotización. Los casos más complejos (daño por agua, reprogramación con archivos originales) pueden tomar hasta 15 días. Siempre te damos un tiempo estimado en el reporte inicial.',
  },
  {
    q: '¿Cuál es la garantía?',
    a: 'Ofrecemos 6 meses de garantía escrita sobre la reparación electrónica realizada. Cubre la falla intervenida y componentes reemplazados. No cubre daños por causa externa (agua, cortos por instalación, sobrevoltajes fuera del vehículo).',
  },
  {
    q: '¿Atienden a nivel nacional?',
    a: 'Sí. Recibimos módulos desde toda Colombia por transportadora asegurada. Para instalación en sitio de sistemas de flota (cámaras, GPS, WiFi) también hacemos desplazamientos a las principales ciudades. Coordinamos logística y devolución.',
  },
  {
    q: '¿Cómo cotizan una reparación?',
    a: 'Primero hacemos un diagnóstico técnico del módulo (sin costo en la mayoría de casos). Con los hallazgos enviamos una cotización detallada con alcance, tiempos y precio cerrado. Solo intervenimos con tu aprobación.',
  },
  {
    q: '¿Trabajan con talleres y aseguradoras?',
    a: 'Sí. Somos aliados técnicos de talleres, concesionarios y aseguradoras que necesitan un laboratorio serio para casos electrónicos complejos. Facturamos a nombre de empresa y manejamos órdenes de compra.',
  },
  {
    q: '¿Instalan sistemas de flota en buses nuevos y viejos?',
    a: 'Sí. Nuestros sistemas de WiFi, cámaras, GPS y entretenimiento se adaptan tanto a buses nuevos como a vehículos con varios años de servicio. Diseñamos el cableado, protecciones y la integración a la red eléctrica original.',
  },
  {
    q: '¿Manejan datos de la flota de forma segura?',
    a: 'Las plataformas de telemetría y video se alojan en servidores dedicados con acceso por usuario y contraseña. Los datos son propiedad del cliente y firmamos acuerdos de confidencialidad cuando la operación lo requiere.',
  },
];

export default function FaqSection() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <span className="section-eyebrow">Preguntas frecuentes</span>
            <h2 className="section-heading">
              Lo que suelen preguntarnos las <span className="gradient-text-cyan">flotas</span>
            </h2>
            <p className="mt-4 text-paper-600">
              ¿No encuentras tu respuesta? Escríbenos por WhatsApp o llena el formulario y te
              respondemos en menos de 24 horas.
            </p>
          </div>

          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass-card rounded-2xl px-5"
                >
                  <AccordionTrigger className="text-left text-paper-900 hover:no-underline hover:text-ocean-700">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-paper-600 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
