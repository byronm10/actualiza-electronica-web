import { useState } from 'react';

interface LogoProps {
  /** Ruta del logotipo. Por defecto /logo.png (colocá el archivo en public/). */
  src?: string;
  /** Alto en px. */
  height?: number;
  className?: string;
  /** Fuerza el fallback textual (útil para lugares con fondo oscuro). */
  forceFallback?: boolean;
}

/**
 * Logo de Actualidad Electronica.
 * Intenta cargar /logo.png; si falla, muestra un fallback tipografico
 * fiel al logo oficial (Actualidad + ELECTRONICA + tagline).
 */
export default function Logo({ src = '/logo.png', height = 44, className = '', forceFallback = false }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (!forceFallback && !failed) {
    return (
      <img
        src={src}
        alt="Actualidad Electronica - Audio y Video en Autobuses"
        style={{ height }}
        className={`w-auto object-contain ${className}`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 leading-none ${className}`}>
      <span
        className="relative inline-flex items-center justify-center rounded-md bg-ocean-600 text-white font-semibold"
        style={{ height, width: height, fontSize: height * 0.5 }}
        aria-hidden
      >
        AE
      </span>
      <span className="flex flex-col">
        <span className="text-lg md:text-xl font-semibold text-paper-900 leading-none">
          Actualidad
        </span>
        <span className="text-lg md:text-xl font-semibold text-ocean-600 leading-none tracking-wide -mt-0.5">
          Electrónica
        </span>
      </span>
    </span>
  );
}
