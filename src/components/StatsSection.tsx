import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Cpu, Truck, Users, Award } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { icon: <Cpu className="h-5 w-5" />, value: 12000, suffix: '+', label: 'ECUs reparadas', sub: 'Motor, ABS, transmisión, BCM' },
  { icon: <Truck className="h-5 w-5" />, value: 3500, suffix: '+', label: 'Vehículos intervenidos', sub: 'Buses, camiones y flotas' },
  { icon: <Users className="h-5 w-5" />, value: 40, suffix: '+', label: 'Empresas de transporte', sub: 'En toda Colombia' },
  { icon: <Award className="h-5 w-5" />, value: 20, suffix: '+', label: 'Años de experiencia', sub: 'Ingeniería electrónica' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on('change', latest => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toLocaleString('es-CO');
    });
    return () => unsub();
  }, [spring]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="stat-card group"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300 ring-1 ring-electric-400/20">
                {s.icon}
              </div>
              <div className="stat-number">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-semibold text-white">{s.label}</div>
              <div className="text-xs text-white/55">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
