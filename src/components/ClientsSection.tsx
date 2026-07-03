const logos = [
  { src: '/berlinas.png', alt: 'Berlinas del Fonce' },
  { src: '/brasilia.png', alt: 'Expreso Brasilia' },
  { src: '/copetran.png', alt: 'Copetran' },
  { src: '/sancarlos.jpg', alt: 'San Carlos' },
  { src: '/sodis.jpg', alt: 'Sodis' },
  { src: '/tropivanes.jpg', alt: 'Tropivanes' },
  { src: '/unitransco.png', alt: 'Unitransco' },
  { src: '/byac.jpg', alt: 'Byac' },
];

export default function ClientsSection() {
  const track = [...logos, ...logos];

  return (
    <section id="clientes" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Confían en nuestro laboratorio</span>
          <h2 className="section-heading">
            Empresas que <span className="gradient-text-cyan">mueven a Colombia</span>
          </h2>
          <p className="mt-4 text-paper-600">
            Trabajamos con operadores de transporte intermunicipal y urbano reconocidos a nivel nacional.
          </p>
        </div>
      </div>

      <div className="relative mt-12 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 py-4">
          {track.map((l, i) => (
            <div
              key={`${l.src}-${i}`}
              className="flex h-24 w-40 md:w-48 shrink-0 items-center justify-center rounded-2xl border border-paper-200 bg-white px-6 shadow-sm"
            >
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="max-h-14 max-w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
