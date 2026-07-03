
import { ArrowRight, PlayCircle, ShieldCheck, Cpu, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import CircuitBg from './CircuitBg';
import VideoBackground from './VideoBackground';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <VideoBackground poster="/device.jpeg" />
      <CircuitBg intensity="high" />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="chip chip-dot mb-6">
            Ingeniería electrónica automotriz — 2026
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Reparamos, integramos y modernizamos la{' '}
            <span className="gradient-text">electrónica</span>{' '}
            del transporte pesado.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
            Somos un laboratorio especializado en <strong className="text-white">ECUs, telemática, WiFi, cámaras
            y sistemas eléctricos</strong> para autobuses interurbanos, flotas de carga y vehículos comerciales
            en Colombia. Diagnóstico avanzado, banco de pruebas y garantía real.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="btn-glow bg-gradient-to-r from-electric-400 to-plasma-500 text-carbon-950 font-semibold hover:from-electric-300 hover:to-plasma-400"
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
              className="border-white/20 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:text-white"
            >
              <a href="#ecu">
                <PlayCircle className="mr-2 h-5 w-5 text-electric-300" />
                Ver capacidades ECU
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { icon: <Cpu className="h-5 w-5" />, k: 'Bosch · Delphi · Siemens · Continental', v: 'ECUs soportadas' },
              { icon: <Radio className="h-5 w-5" />, k: 'CAN Bus · J1939 · OBD-II · K-Line', v: 'Protocolos de diagnóstico' },
              { icon: <ShieldCheck className="h-5 w-5" />, k: 'Garantía de 6 meses', v: 'Servicio técnico certificado' },
            ].map(item => (
              <div key={item.v} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-3">
                <span className="mt-0.5 text-electric-300">{item.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-white">{item.k}</div>
                  <div className="text-xs text-white/60">{item.v}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
