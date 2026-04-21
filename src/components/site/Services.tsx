const services = [
  {
    n: "01",
    title: "Transporte asistencial programado",
    desc: "Traslados planificados de pacientes con acompañamiento de personal técnico en atención prehospitalaria.",
  },
  {
    n: "02",
    title: "Pacientes crónicos y con discapacidad",
    desc: "Traslado seguro y humanizado de pacientes con enfermedades crónicas o condiciones de discapacidad.",
  },
  {
    n: "03",
    title: "Traslados interinstitucionales",
    desc: "Movilización entre clínicas, hospitales y centros de salud con monitoreo permanente.",
  },
  {
    n: "04",
    title: "Alta y consulta médica",
    desc: "Acompañamiento en traslados de alta hospitalaria y desplazamiento a citas médicas.",
  },
  {
    n: "05",
    title: "Gestión y cobertura de eventos",
    desc: "Cobertura prehospitalaria para eventos masivos, deportivos, corporativos y rodajes.",
  },
  {
    n: "06",
    title: "Emergencias y apoyo empresarial",
    desc: "Atención de emergencias médicas y apoyo asistencial continuo para empresas e instituciones.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative bg-primary text-primary-foreground py-24 md:py-36 overflow-hidden">
      {/* subtle radial accent */}
      <div
        className="absolute -top-1/2 -right-1/3 w-[60rem] h-[60rem] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--brand-blue) 0%, transparent 60%)" }}
      />
      <div
        className="absolute -bottom-1/2 -left-1/3 w-[50rem] h-[50rem] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--brand-red) 0%, transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            — Servicios
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05] tracking-tight">
            Nuestros servicios
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Servicios diseñados para responder con precisión y cuidado en cada situación.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-14">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`reveal reveal-delay-${(i % 4) + 1} group border-t border-white/15 pt-6 transition-all duration-500 hover:border-white/40`}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-medium tracking-[0.2em] text-white/40">{s.n}</span>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                  {s.title}
                </h3>
              </div>
              <p className="mt-4 ml-12 text-white/65 leading-relaxed max-w-lg">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
