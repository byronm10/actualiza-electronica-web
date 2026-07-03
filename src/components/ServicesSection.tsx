
import { motion } from 'framer-motion';
import {
  Cpu, Wifi, Camera, Navigation, Wrench, MonitorPlay,
  Music4, Lightbulb, CreditCard, PlugZap, Radar, ShieldCheck,
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  size?: 'lg' | 'md';
  accent?: 'electric' | 'plasma' | 'signal';
}

const services: Service[] = [
  {
    title: 'Reparación de ECUs y módulos electrónicos',
    description:
      'Motor, transmisión, ABS/EBS, airbag, BCM, tablero. Reparación a nivel de componente y reprogramación con archivos originales.',
    icon: <Cpu className="h-6 w-6" />,
    size: 'lg',
    accent: 'electric',
  },
  {
    title: 'WiFi para buses y camiones',
    description:
      'Redes de alto rendimiento a bordo con portal cautivo, filtrado y monitoreo. Compatible con enlaces 4G/5G y balanceo entre SIMs.',
    icon: <Wifi className="h-6 w-6" />,
    size: 'lg',
    accent: 'plasma',
  },
  {
    title: 'Cámaras 360° y DVR',
    description: 'Videovigilancia HD, grabación multicanal, botón de pánico y transmisión en vivo.',
    icon: <Camera className="h-6 w-6" />,
    accent: 'electric',
  },
  {
    title: 'GPS y telemática',
    description: 'Ubicación en tiempo real, geocercas, control de velocidad y consumo, reportes por conductor.',
    icon: <Navigation className="h-6 w-6" />,
    accent: 'electric',
  },
  {
    title: 'Entretenimiento a bordo',
    description: 'Pantallas para pasajeros, servidor de contenido offline y avisos automáticos de ruta.',
    icon: <MonitorPlay className="h-6 w-6" />,
    accent: 'plasma',
  },
  {
    title: 'Audio y sistemas PA',
    description: 'Amplificación profesional, micrófonos del conductor, música ambiental y anuncios automáticos.',
    icon: <Music4 className="h-6 w-6" />,
    accent: 'signal',
  },
  {
    title: 'Iluminación LED inteligente',
    description: 'Luces internas, exteriores y estroboscópicas con control por circuito y protección de picos.',
    icon: <Lightbulb className="h-6 w-6" />,
    accent: 'signal',
  },
  {
    title: 'Sistemas de recaudo y pago',
    description: 'Terminales con QR, tarjeta y monedero para operadores urbanos e intermunicipales.',
    icon: <CreditCard className="h-6 w-6" />,
    accent: 'electric',
  },
  {
    title: 'Tomacorrientes USB para pasajeros',
    description: 'Cargadores rápidos por asiento con protección eléctrica y aislamiento del sistema del vehículo.',
    icon: <PlugZap className="h-6 w-6" />,
    accent: 'plasma',
  },
  {
    title: 'Diagnóstico avanzado y programación',
    description: 'OBD-II, CAN Bus, J1939, K-Line. Codificación, adaptaciones y borrado de códigos permanentes.',
    icon: <Radar className="h-6 w-6" />,
    accent: 'electric',
  },
  {
    title: 'Antirrobo e inmovilizadores',
    description: 'Cortacorrientes, inmovilizadores, sensores de puerta e integración con central de monitoreo.',
    icon: <ShieldCheck className="h-6 w-6" />,
    accent: 'signal',
  },
  {
    title: 'Instalaciones eléctricas a medida',
    description: 'Diseño de cableado, tableros de control, protecciones eléctricas y armado completo del bus.',
    icon: <Wrench className="h-6 w-6" />,
    accent: 'plasma',
  },
];

const accentBg: Record<string, string> = {
  electric: 'from-ocean-100 to-ocean-50 text-ocean-700',
  plasma: 'from-ocean-200 to-ocean-100 text-ocean-800',
  signal: 'from-ocean-50 to-white text-ocean-600',
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-40" />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Nuestros servicios</span>
          <h2 className="section-heading">
            Un portafolio <span className="gradient-text-cyan">electrónico completo</span> para
            operadores de transporte
          </h2>
          <p className="mt-5 text-paper-700 text-lg leading-relaxed">
            Desde el módulo electrónico más crítico del vehículo hasta la experiencia del pasajero: diseñamos,
            instalamos y mantenemos todos los sistemas eléctricos y digitales de tu flota.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className={`service-card ${service.size === 'lg' ? 'md:col-span-2' : ''}`}
            >
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${accentBg[service.accent ?? 'electric']} ring-1 ring-paper-200`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-paper-900">{service.title}</h3>
              <p className="mt-2 text-sm text-paper-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
