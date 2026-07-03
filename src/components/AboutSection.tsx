import { motion } from 'framer-motion';
import { Cpu, Award, Clock, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';

const values = [
  {
    title: 'Ingeniería propia',
    description: 'Diseñamos, reparamos y programamos electrónica. No revendemos: entendemos el circuito.',
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: 'Equipo certificado',
    description: 'Ingenieros electrónicos con formación continua en Bosch, Continental y protocolos automotrices.',
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: 'Respuesta rápida',
    description: 'Diagnóstico en 24 horas y logística nacional para reducir el tiempo fuera de servicio.',
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: 'Trabajo garantizado',
    description: '6 meses de garantía escrita sobre cada intervención. Trazabilidad completa.',
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Nosotros</span>
            <h2 className="section-heading">
              Un laboratorio electrónico dedicado al{' '}
              <span className="gradient-text-cyan">transporte pesado</span>
            </h2>
            <p className="mt-5 text-paper-700 text-lg leading-relaxed">
              Somos <strong className="text-paper-900">Actualidad Electrónica</strong>, una empresa colombiana con
              más de dos décadas resolviendo la electrónica que otros talleres declaran irreparable.
              Trabajamos con operadores de transporte intermunicipal, urbano, escolar y de carga en todo el país.
            </p>
            <p className="mt-4 text-paper-700 leading-relaxed">
              Nuestro diferencial es simple: <span className="text-paper-900">diagnosticamos con datos, reparamos a nivel de componente y respondemos con velocidad</span>.
              Contamos con banco de pruebas, programadores originales y un equipo que combina ingeniería,
              experiencia de campo y logística nacional.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip">
                <MapPin className="h-3.5 w-3.5" />
                Soledad, Atlántico
              </span>
              <span className="chip">
                <Award className="h-3.5 w-3.5" />
                20+ años de operación
              </span>
              <span className="chip">
                <ShieldCheck className="h-3.5 w-3.5" />
                Cobertura nacional
              </span>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card rounded-xl p-4"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ocean-50 text-ocean-600 ring-1 ring-ocean-100">
                    {v.icon}
                  </div>
                  <div className="text-sm font-semibold text-paper-900">{v.title}</div>
                  <p className="mt-1 text-xs text-paper-600 leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ocean-200/50 via-ocean-100/40 to-ocean-50/40 blur-2xl" />
            <div className="absolute top-[8%] left-[8%] right-[8%] bottom-[8%] rounded-3xl overflow-hidden border border-paper-200 shadow-2xl z-10 bg-white">
              <img src="/device.jpeg" alt="Reparación de módulos electrónicos" className="object-cover w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden border border-paper-200 shadow-xl z-20 rotate-[-3deg] bg-white">
              <img src="/scheme.jpeg" alt="Esquemas y diagnóstico" className="object-cover w-full h-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-[50%] h-[45%] rounded-2xl overflow-hidden border border-paper-200 shadow-xl z-20 rotate-[4deg] bg-white">
              <img src="/tv.jpeg" alt="Sistemas de entretenimiento" className="object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
