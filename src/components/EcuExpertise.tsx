import { motion } from 'framer-motion';
import {
  Cpu, Wrench, Radar, ShieldCheck, CircuitBoard, Microchip,
  Zap, GitBranch, Cog,
} from 'lucide-react';

const brands = ['Bosch', 'Delphi', 'Siemens', 'Continental', 'Denso', 'Motorola', 'Magneti Marelli', 'Visteon'];

const capabilities = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'ECUs de motor y transmisión',
    text: 'Diagnóstico y reparación de ECMs, TCMs, PCMs. Reprogramación con archivos originales y clonación cuando el módulo está bloqueado.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Módulos de seguridad',
    text: 'ABS/EBS, airbag SRS, inmovilizadores, BSI y BCM. Borrado de crash data y limpieza de códigos permanentes.',
  },
  {
    icon: <CircuitBoard className="h-6 w-6" />,
    title: 'Reparación a nivel de componente',
    text: 'Soldadura BGA, cambio de EEPROM/MCU, restauración de pistas quemadas y drivers de potencia (H-Bridges, drivers CAN).',
  },
  {
    icon: <Radar className="h-6 w-6" />,
    title: 'Redes CAN, LIN y J1939',
    text: 'Análisis con osciloscopio y sniffer. Trazabilidad de errores en el bus, corto de terminaciones y aislamiento de nodos defectuosos.',
  },
];

const protocols = [
  { name: 'OBD-II', color: 'from-electric-400 to-electric-600' },
  { name: 'CAN 2.0 / CAN-FD', color: 'from-plasma-400 to-plasma-600' },
  { name: 'J1939 / J1708', color: 'from-signal-400 to-signal-600' },
  { name: 'K-Line / ISO 9141', color: 'from-electric-300 to-plasma-500' },
  { name: 'UDS (ISO 14229)', color: 'from-plasma-300 to-electric-500' },
  { name: 'KWP2000', color: 'from-signal-300 to-plasma-500' },
];

const types = [
  'ECM — Módulo de control del motor',
  'TCM — Transmisión automática',
  'ABS / EBS — Frenos electrónicos',
  'SRS — Airbag y pretensores',
  'BCM — Carrocería (luces, cierres)',
  'BSI — Multiplexado central',
  'IPC — Panel de instrumentos',
  'Immo / Keyless — Antirrobo',
  'HVAC — Climatización',
];

export default function EcuExpertise() {
  return (
    <section id="ecu" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-40" />
      <div className="absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-plasma-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-40 h-[30rem] w-[30rem] rounded-full bg-electric-500/15 blur-3xl" />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Especialidad de la casa</span>
          <h2 className="section-heading">
            Laboratorio de <span className="gradient-text-cyan">reparación de ECUs</span> para
            vehículos comerciales
          </h2>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            Recuperamos módulos electrónicos que otros dan por perdidos. Trabajamos con equipos de banco,
            programadores originales y firmware verificado para devolverle a tu flota disponibilidad, ahorro
            de combustible y cumplimiento de emisiones.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card glass-card-hover rounded-2xl p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500/20 to-plasma-500/20 text-electric-300 ring-1 ring-white/10">
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 text-electric-300">
              <Microchip className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">Fabricantes soportados</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {brands.map(b => (
                <span key={b} className="chip">{b}</span>
              ))}
            </div>
            <div className="my-6 divider-glow" />
            <div className="flex items-center gap-2 text-electric-300">
              <GitBranch className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">Protocolos que dominamos</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {protocols.map(p => (
                <span
                  key={p.name}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-carbon-950 bg-gradient-to-r ${p.color}`}
                >
                  {p.name}
                </span>
              ))}
            </div>
            <div className="my-6 divider-glow" />
            <div className="flex items-center gap-2 text-electric-300">
              <Cog className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">Módulos habituales</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {types.map(t => (
                <li key={t} className="flex items-start gap-2">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-electric-400/20 bg-gradient-to-r from-electric-500/10 via-plasma-500/10 to-signal-500/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
        >
          <Wrench className="h-10 w-10 text-electric-300 shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              ¿Un módulo bloqueado o con daño por agua?
            </h3>
            <p className="mt-1 text-white/70">
              Recibimos ECUs desde toda Colombia. Diagnóstico gratis en 24 horas y cotización sin compromiso.
            </p>
          </div>
          <a
            href="#contacto"
            className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-electric-400 to-plasma-500 px-5 py-3 text-sm font-semibold text-carbon-950 hover:from-electric-300 hover:to-plasma-400 transition-colors"
          >
            Enviar mi ECU
          </a>
        </motion.div>
      </div>
    </section>
  );
}
