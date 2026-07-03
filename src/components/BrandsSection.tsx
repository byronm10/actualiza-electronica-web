import { motion } from 'framer-motion';
import { Bus, Truck } from 'lucide-react';

const bus = [
  'Mercedes-Benz', 'Volvo', 'Scania', 'Higer', 'Yutong', 'King Long', 'Agrale', 'Zhongtong',
];
const truck = [
  'International', 'Freightliner', 'Kenworth', 'Hino', 'Foton', 'Isuzu', 'Chevrolet', 'JAC',
];

export default function BrandsSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Marcas y plataformas</span>
          <h2 className="section-heading">
            Cubrimos las principales marcas del <span className="gradient-text-cyan">transporte pesado</span>
          </h2>
          <p className="mt-4 text-white/70">
            Trabajamos con buses interurbanos, urbanos, escolares, camiones tractocamiones, volquetas y flotas
            comerciales.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { icon: <Bus className="h-6 w-6" />, title: 'Buses y busetas', list: bus },
            { icon: <Truck className="h-6 w-6" />, title: 'Camiones y flotas', list: truck },
          ].map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500/20 to-plasma-500/20 text-electric-300 ring-1 ring-white/10">
                  {group.icon}
                </span>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.list.map(b => (
                  <span
                    key={b}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/85 hover:border-electric-400/40 hover:bg-electric-500/10 transition-colors"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
