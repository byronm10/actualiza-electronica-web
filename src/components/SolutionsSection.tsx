
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MapPinned, ShieldCheck, ScanLine, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const solutions = [
  {
    id: 'flota',
    title: 'Gestión de Flotas',
    tagline: 'Toda tu operación en un solo dashboard',
    icon: <MapPinned className="h-5 w-5" />,
    description:
      'Plataforma web y móvil para controlar ubicación, consumo, mantenimiento y conducta de tu flota en tiempo real. Integrada con nuestro hardware GPS/CAN.',
    features: [
      'Seguimiento GPS en tiempo real con historial',
      'Geocercas, alertas de velocidad y frenado brusco',
      'Control de combustible y kilometraje',
      'Reportes por conductor, ruta y vehículo',
      'Integración con nómina y programación de mantenimientos',
    ],
    image: '/tracking.jpeg',
  },
  {
    id: 'seguridad',
    title: 'Seguridad Avanzada',
    tagline: 'Video, evidencia y respuesta rápida',
    icon: <ShieldCheck className="h-5 w-5" />,
    description:
      'Ecosistema de cámaras 360°, DVR inteligente, botón de pánico y monitoreo remoto. Ideal para operadores urbanos, intermunicipales y carga sensible.',
    features: [
      'Cámaras HD interior, exterior y punto ciego',
      'DVR con almacenamiento local + respaldo en la nube',
      'Botón de pánico integrado con central',
      'Detección de fatiga y distracción del conductor',
      'Video en vivo desde el celular o computador',
    ],
    image: '/cobert.jpg',
  },
  {
    id: 'diagnostico',
    title: 'Diagnóstico Inteligente',
    tagline: 'Del código de falla a la solución en horas',
    icon: <ScanLine className="h-5 w-5" />,
    description:
      'Servicio especializado para talleres y aseguradoras. Diagnóstico de sistemas electrónicos complejos con equipos originales y reporte técnico auditable.',
    features: [
      'Diagnóstico OBD-II, CAN Bus y J1939',
      'Prueba en banco para módulos extraídos',
      'Reporte técnico con fotos y mediciones',
      'Recomendaciones de reparación vs reemplazo',
      'Soporte en sitio para talleres aliados',
    ],
    image: '/scheme.jpeg',
  },
];

export default function SolutionsSection() {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find(s => s.id === active) ?? solutions[0];

  return (
    <section id="soluciones" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Soluciones integradas</span>
          <h2 className="section-heading">
            Tecnología que <span className="gradient-text-cyan">transforma la operación</span>
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Combinamos hardware propio y plataformas de gestión para que puedas monitorear, proteger y
            diagnosticar tu flota desde cualquier lugar.
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-3 lg:gap-2 mb-8">
          {solutions.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={cn(
                'group relative flex items-start gap-3 rounded-xl border p-4 text-left transition-all flex-1',
                active === s.id
                  ? 'border-electric-400/50 bg-gradient-to-br from-electric-500/10 to-plasma-500/10 shadow-[0_20px_60px_-30px_hsl(191_100%_48%/0.6)]'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]',
              )}
            >
              <span
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-white/10 shrink-0',
                  active === s.id
                    ? 'bg-electric-400 text-carbon-950'
                    : 'bg-white/[0.05] text-electric-300',
                )}
              >
                {s.icon}
              </span>
              <div>
                <div className="text-sm font-semibold text-white">{s.title}</div>
                <div className="text-xs text-white/55">{s.tagline}</div>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-electric-300 text-xs font-semibold uppercase tracking-widest">
                  <Zap className="h-4 w-4" /> Solución integrada
                </div>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">{current.title}</h3>
                <p className="mt-3 text-white/70">{current.description}</p>
                <ul className="mt-6 space-y-3">
                  {current.features.map((f, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-electric-400 shrink-0" />
                      <span className="text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[280px] md:min-h-[420px] hidden md:block">
                <img src={current.image} alt={current.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-carbon-900 via-carbon-900/40 to-transparent md:from-carbon-900/95 md:via-carbon-900/50" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
