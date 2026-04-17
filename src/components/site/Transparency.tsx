const documents = [
  {
    title: "Estados Financieros 2024",
    desc: "Estado de situación financiera, resultados y flujos de efectivo.",
    type: "PDF",
    href: "#",
  },
  {
    title: "Notas a los Estados Financieros 2024",
    desc: "Notas explicativas y revelaciones contables.",
    type: "PDF",
    href: "#",
  },
  {
    title: "Estados Financieros 2023",
    desc: "Información financiera comparativa del periodo anterior.",
    type: "PDF",
    href: "#",
  },
  {
    title: "Notas a los Estados Financieros 2023",
    desc: "Documento complementario del periodo 2023.",
    type: "PDF",
    href: "#",
  },
];

export function Transparency() {
  return (
    <section id="transparencia" className="relative bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 reveal">
            <span className="service-number">— Transparencia</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05] text-foreground">
              Información
              <br />
              <em className="font-display italic text-gradient-brand">pública</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-10 reveal reveal-delay-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              En cumplimiento de nuestro compromiso con la transparencia y la rendición
              de cuentas, ponemos a disposición del público los estados financieros y
              notas contables de la entidad.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background border border-border text-sm">
              <span className="font-semibold text-foreground">NIT:</span>
              <span className="text-muted-foreground">901.643.217-9</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {documents.map((d, i) => (
            <a
              key={d.title}
              href={d.href}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-background border border-border transition-all duration-500 hover:border-foreground/20 hover:shadow-elevated hover:-translate-y-1`}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-xs font-bold tracking-wider text-white transition-transform duration-500 group-hover:scale-110"
                style={{ background: "var(--gradient-brand)" }}
              >
                {d.type}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-foreground">{d.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {d.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Descargar
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1 group-hover:translate-y-0.5">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="reveal mt-10 text-sm text-muted-foreground">
          ¿No encuentra el documento que busca? Escríbanos a{" "}
          <a href="mailto:financiero@cuidadoexpress.com" className="story-link font-medium text-foreground">
            financiero@cuidadoexpress.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
