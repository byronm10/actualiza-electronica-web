import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Jefe de mantenimiento',
    company: 'Empresa de transporte intermunicipal',
    text: 'Recuperaron dos ECUs de nuestros Volvo que ya nos habían dado por perdidas. En una semana los buses estaban de vuelta operando y con garantía. Servicio muy serio.',
  },
  {
    name: 'Andrea Torres',
    role: 'Gerente de operaciones',
    company: 'Flota de carga urbana',
    text: 'Instalaron el sistema de cámaras 360° y GPS en toda la flota. La plataforma es clara, los reportes llegan a tiempo y nos ayudaron a bajar los siniestros más del 30 %.',
  },
  {
    name: 'Miguel Vargas',
    role: 'Propietario',
    company: 'Buses interurbanos',
    text: 'Llevo años trabajando con ellos porque diagnostican de verdad. No cambian módulos “por probar”. Explican, cotizan y cumplen los tiempos. Ese es el diferencial.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Testimonios</span>
          <h2 className="section-heading">
            Lo que dicen los <span className="gradient-text-cyan">operadores de flota</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col"
            >
              <Quote className="h-8 w-8 text-ocean-400/70" />
              <div className="mt-2 flex gap-1 text-coral-400">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-coral-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-paper-700 text-sm leading-relaxed flex-1">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-paper-200 pt-4">
                <div className="text-sm font-semibold text-paper-900">{t.name}</div>
                <div className="text-xs text-paper-500">{t.role} · {t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
