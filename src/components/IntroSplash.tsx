import { CSSProperties, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

type Phase = 'scan' | 'logo' | 'fly';

const CHIPS = [
  { label: 'ECU: Bosch ME17.9.7',   delay: 0.5, pos: { top: '10%',    left: '4%'  } as CSSProperties },
  { label: 'Tensión: 12.4 V',       delay: 1.0, pos: { top: '10%',    right: '4%' } as CSSProperties },
  { label: 'CAN Bus 2.0 — OK',      delay: 1.5, pos: { bottom: '14%', left: '4%'  } as CSSProperties },
  { label: 'Diagnóstico: Ready', delay: 2.0, pos: { bottom: '14%', right: '4%' } as CSSProperties },
];

// Foto de una ECU real (Unsplash). Si falla, cae en /device.jpeg local.
const ECU_IMAGE_REMOTE = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80';
const ECU_IMAGE_LOCAL  = '/device.jpeg';

const SCAN_TO_LOGO  = 2900;
const LOGO_DURATION = 1300;

function CircuitTraces() {
  const p = (delay: number) => ({
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1, transition: { duration: 0.52, delay, ease: 'easeInOut' as const } },
  });
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 170" fill="none" aria-hidden>
      <motion.path d="M 60 85 L 60 28 L 138 28"     stroke="#2757C7" strokeWidth="1.5" variants={p(0.00)} initial="hidden" animate="show" />
      <motion.path d="M 440 85 L 440 28 L 362 28"    stroke="#2757C7" strokeWidth="1.5" variants={p(0.08)} initial="hidden" animate="show" />
      <motion.path d="M 60 85 L 60 142 L 138 142"    stroke="#2757C7" strokeWidth="1.5" variants={p(0.16)} initial="hidden" animate="show" />
      <motion.path d="M 440 85 L 440 142 L 362 142"  stroke="#2757C7" strokeWidth="1.5" variants={p(0.24)} initial="hidden" animate="show" />
      <motion.path d="M 0 85 L 58 85"                stroke="#3A6EDF" strokeWidth="1"   variants={p(0.32)} initial="hidden" animate="show" />
      <motion.path d="M 500 85 L 442 85"             stroke="#3A6EDF" strokeWidth="1"   variants={p(0.32)} initial="hidden" animate="show" />
      <motion.path d="M 138 28 L 362 28"             stroke="#2757C7" strokeWidth="1"   strokeDasharray="4 6" variants={p(0.44)} initial="hidden" animate="show" />
      <motion.path d="M 138 142 L 362 142"           stroke="#2757C7" strokeWidth="1"   strokeDasharray="4 6" variants={p(0.44)} initial="hidden" animate="show" />
      {([[60,28],[440,28],[60,142],[440,142]] as [number,number][]).map(([cx,cy],i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={3} fill="#2757C7"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.52 + i * 0.05, duration: 0.22 }} />
      ))}
    </svg>
  );
}

export default function IntroSplash({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>('scan');
  const imgCtrl = useAnimation();
  const bgCtrl  = useAnimation();
  const flyImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), SCAN_TO_LOGO);
    const t2 = setTimeout(() => setPhase('fly'),  SCAN_TO_LOGO + LOGO_DURATION);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (phase === 'logo') {
      imgCtrl.start({ opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } });
    }
  }, [phase, imgCtrl]);

  useEffect(() => {
    if (phase !== 'fly') return;
    (async () => {
      const src = flyImgRef.current;
      // Buscar el logo real del navbar por id, y elegir el <img> si existe
      const targetSlot = document.getElementById('navbar-logo-target');
      const targetImg = targetSlot?.querySelector('img') as HTMLElement | null;
      const target = targetImg ?? targetSlot;

      let tx = 0, ty = 0, scale = 0.7;
      if (src && target) {
        const s = src.getBoundingClientRect();
        const d = target.getBoundingClientRect();
        const srcCX = s.left + s.width  / 2;
        const srcCY = s.top  + s.height / 2;
        const dstCX = d.left + d.width  / 2;
        const dstCY = d.top  + d.height / 2;
        scale = d.height / s.height;
        tx = dstCX - srcCX;
        ty = dstCY - srcCY;
      }

      await imgCtrl.start({
        x: tx, y: ty, scale,
        transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
      });
      await bgCtrl.start({ opacity: 0, transition: { duration: 0.22 } });
      onDone();
    })();
  }, [phase, imgCtrl, bgCtrl, onDone]);

  return (
    <motion.div
      animate={bgCtrl}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-paper-100 overflow-hidden"
    >
      <div className="absolute inset-0 hex-grid opacity-40 pointer-events-none" />

      {/* SCAN */}
      <AnimatePresence>
        {phase === 'scan' && (
          <motion.div
            key="scan"
            className="relative w-full max-w-2xl mx-4"
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.38 } }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-ocean-200 shadow-[0_32px_80px_-24px_hsl(220_72%_52%/0.22)] aspect-video bg-paper-200">
              <motion.img
                src={ECU_IMAGE_REMOTE}
                alt="ECU en reparación"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.07 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: 'easeOut' }}
                onError={(e) => {
                  const el = e.currentTarget;
                  if (el.src !== window.location.origin + ECU_IMAGE_LOCAL) {
                    el.src = ECU_IMAGE_LOCAL;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#060C18]/60 via-transparent to-[#060C18]/40" />

              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ocean-400 to-transparent pointer-events-none"
                style={{ top: 0 }}
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 2.2, ease: 'linear', repeat: 1 }}
              />

              {([
                'top-3 left-3 border-t-2 border-l-2 rounded-tl-sm',
                'top-3 right-3 border-t-2 border-r-2 rounded-tr-sm',
                'bottom-3 left-3 border-b-2 border-l-2 rounded-bl-sm',
                'bottom-3 right-3 border-b-2 border-r-2 rounded-br-sm',
              ]).map((cls, i) => (
                <div key={i} className={`absolute h-5 w-5 border-ocean-400/90 ${cls}`} />
              ))}

              {CHIPS.map((c, i) => (
                <motion.div
                  key={i}
                  className="absolute font-mono text-[10px] md:text-[11px] bg-[#050B16]/85 text-emerald-400 border border-emerald-500/25 px-2.5 py-1.5 rounded-md backdrop-blur-sm whitespace-nowrap"
                  style={c.pos}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: c.delay, duration: 0.3 }}
                >
                  <span className="text-ocean-400 mr-1">›</span>{c.label}
                </motion.div>
              ))}

              <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none">
                <span className="font-mono text-[9px] text-ocean-300/70 tracking-[0.25em] uppercase">
                  Diagnóstico activo
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOGO + circuito */}
      {phase !== 'scan' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="absolute"
            style={{ width: 500, height: 170 }}
            animate={{ opacity: phase === 'fly' ? 0 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <CircuitTraces />
          </motion.div>
          <motion.img
            ref={flyImgRef}
            src="/logo.png"
            alt="Actualidad Electrónica"
            className="relative z-10 w-auto"
            style={{ height: 90, transformOrigin: 'center center' }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={imgCtrl}
          />
        </div>
      )}
    </motion.div>
  );
}
