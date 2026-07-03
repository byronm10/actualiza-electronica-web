interface VideoBackgroundProps {
  src?: string;
  webmSrc?: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
}

/**
 * Autoplay muted looping background video with a poster/CSS fallback.
 * Provide the mp4/webm files under public/ (e.g. /hero-bg.mp4) to enable video;
 * if the sources are missing, the poster + mesh gradient still look great.
 */
export default function VideoBackground({
  src = '/hero-bg.mp4',
  webmSrc,
  poster,
  className = '',
  overlay = true,
}: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
      >
        {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        <source src={src} type="video/mp4" />
      </video>
      {overlay ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/60 via-carbon-950/40 to-carbon-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/70 via-transparent to-carbon-950/70" />
        </>
      ) : null}
    </div>
  );
}
