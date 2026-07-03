
import { ArrowRight, PlayCircle, ShieldCheck, Cpu, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Fondos suaves */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-ocean-200/50 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-coral-200/45 blur-3xl" />
        <div className="absolute inset-0 hex-grid opacity-70" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="chip chip-dot mb-6">
              Ingeniería electrónica para el transporte
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-paper-900">
              Cuidamos la electrónica que{' '}
              <span className="gradient-text">mueve</span>{' '}
              a tu flota, kilómetro a kilómetro.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-paper-700 max-w-2xl leading-relaxed">
              Somos un equipo de ingenieros dedicado a <strong className="text-paper-900">reparar ECUs,
              integrar WiFi, cámaras, audio y sistemas eléctricos</strong> en autobuses y camiones.
              Diagnóstico serio, banco de pruebas propio y una garantía que sí se cumple.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="btn-glow rounded-full bg-gradient-to-r from-ocean-600 to-coral-500 text-white font-semibold hover:from-ocean-500 hover:to-coral-400"
              >
                <a href="#contacto">
                  Solicitar diagnóstico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-paper-300 bg-white text-paper-900 hover:bg-paper-100 hover:text-paper-900"
              >
                <a href="#ecu">
                  <PlayCircle className="mr-2 h-5 w-5 text-ocean-600" />
                  Cómo reparamos una ECU
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              {[
                { icon: <Cpu className="h-5 w-5" />, k: 'Bosch · Delphi · Siemens', v: 'ECUs que soportamos' },
                { icon: <Radio className="h-5 w-5" />, k: 'CAN · J1939 · OBD-II', v: 'Protocolos de diagnóstico' },
                { icon: <ShieldCheck className="h-5 w-5" />, k: 'Garantía 6 meses', v: 'Trabajo respaldado' },
              ].map(item => (
                <div key={item.v} className="flex items-start gap-3 rounded-2xl bg-white/80 backdrop-blur border border-paper-200 p-3">
                  <span className="mt-0.5 text-ocean-600">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-paper-900 leading-snug">{item.k}</div>
                    <div className="text-xs text-paper-600">{item.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-40px_hsl(220_30%_20%/0.35)] border border-paper-200 bg-white">
              <img src="/device.jpeg" alt="Reparación de módulos electrónicos" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-paper-900/70 via-paper-900/20 to-transparent p-6">
                <div className="text-xs uppercase tracking-widest text-white/80">Nuestro laboratorio</div>
                <div className="mt-1 text-lg font-semibold text-white">Diagnóstico ECU en banco de pruebas</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 rounded-2xl bg-white border border-paper-200 shadow-lg p-4 hidden md:block">
              <div className="text-2xl font-serif italic text-ocean-700 leading-none">98%</div>
              <div className="mt-1 text-xs text-paper-600 leading-snug">
                de las ECUs que recibimos vuelven a funcionar tras la reparación.
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-44 rounded-2xl bg-white border border-paper-200 shadow-lg p-4 hidden md:block">
              <div className="text-xs uppercase tracking-widest text-coral-600">24 h</div>
              <div className="mt-1 text-sm font-semibold text-paper-900 leading-snug">
                Reporte técnico con fotos y mediciones.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
