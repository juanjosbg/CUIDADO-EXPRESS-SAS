const offices = [
  {
    city: "Pereira",
    label: "Sede Principal",
    address: "Carrera 7 No. 45 - 62, Local 4",
    region: "Pereira, Risaralda",
    email: "financiero@cuidadoexpress.com",
  },
  {
    city: "Cali",
    label: "Sede Cali",
    address: "Carrera 46 No. 9C - 85, Consultorio 610",
    region: "Cali, Valle del Cauca",
    email: "asistencial.cali@cuidadoexpress.com",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl mb-20">
          <span className="service-number">— Contacto</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05] text-foreground tracking-tight">
            Escríbenos
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Estamos disponibles las 24 horas. Contáctenos para coordinar un servicio
            o resolver cualquier inquietud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((o, i) => (
            <div
              key={o.city}
              className={`reveal reveal-delay-${i + 1} relative p-8 md:p-10 rounded-2xl bg-surface border border-border overflow-hidden group transition-all duration-500 hover:shadow-elevated`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                style={{ background: "var(--gradient-brand)" }}
              />
              <span className="service-number">{o.label}</span>
              <h3 className="mt-3 text-3xl font-light text-foreground tracking-tight">
                {o.city}
              </h3>
              <div className="mt-8 space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 flex-shrink-0 text-foreground">
                    <path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <div>
                    <div className="text-foreground">{o.address}</div>
                    <div className="text-sm">{o.region}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 flex-shrink-0 text-foreground">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <a href={`mailto:${o.email}`} className="story-link text-foreground">
                    {o.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 p-8 md:p-12 rounded-2xl border border-border bg-surface flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="pulse-dot" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Línea de emergencias
              </span>
            </div>
            <p className="font-display text-xl md:text-3xl font-light text-foreground">
              Disponibles 24 horas, todos los días.
            </p>
          </div>
          <a
            href="mailto:financiero@cuidadoexpress.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-foreground text-background text-sm font-semibold tracking-wide transition-all duration-500 hover:opacity-90 hover:-translate-y-0.5"
          >
            Contáctanos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
