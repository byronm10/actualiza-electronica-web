import { motion } from 'framer-motion';
import { PackageCheck, Search, FileCheck2, Cpu, ClipboardCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: <PackageCheck className="h-6 w-6" />,
    title: 'Recepción y trazabilidad',
    text: 'Registramos el módulo o vehículo con foto, número de parte y datos de la flota. Cadena de custodia clara.',
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Diagnóstico avanzado',
    text: 'Escáner OEM, osciloscopio y banco de pruebas para reproducir fallas reales. Reporte técnico en 24h.',
  },
  {
    icon: <FileCheck2 className="h-6 w-6" />,
    title: 'Cotización sin compromiso',
    text: 'Detallamos hallazgos, alcance y tiempos. Aprobás antes de intervenir. Sin costos ocultos.',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Reparación y programación',
    text: 'Reparación electrónica, cambio de componentes, flash de firmware original y codificación al vehículo.',
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: 'Pruebas y validación',
    text: 'Testeo en banco simulando cargas reales + prueba en vehículo. Solo se entrega lo que funciona 100 %.',
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'Entrega con garantía',
    text: 'Instalación y verificación en sitio o envío asegurado. 6 meses de garantía sobre la reparación.',
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Cómo trabajamos</span>
          <h2 className="section-heading">
            Un proceso serio para <span className="gradient-text-cyan">flotas serias</span>
          </h2>
          <p className="mt-5 text-lg text-paper-700 leading-relaxed">
            Cada intervención sigue un procedimiento auditable: diagnóstico, reparación, banco de pruebas y
            garantía. Así reducimos el tiempo fuera de servicio de tus buses y camiones.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-ocean-300/60 via-coral-300/40 to-transparent md:hidden" />
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-300/50 to-transparent" />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-20 md:pl-0 md:pt-16"
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-600 to-coral-500 text-white shadow-[0_12px_30px_-10px_hsl(220_72%_52%/0.55)] ring-4 ring-paper-100">
                  {s.icon}
                </div>
                <div className="glass-card rounded-2xl p-5 md:text-center h-full">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-ocean-600">
                    Paso {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="mt-1 text-base font-semibold text-paper-900">{s.title}</div>
                  <p className="mt-2 text-xs text-paper-600 leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
