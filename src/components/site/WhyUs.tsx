const reasons = [
  {
    n: "01",
    title: "Atención segura y confiable",
    desc: "Protocolos clínicos estrictos y equipamiento certificado en cada traslado.",
  },
  {
    n: "02",
    title: "Respuesta oportuna",
    desc: "Disponibilidad 24/7 con tiempos de respuesta optimizados en Cali, Pereira y municipios aledaños.",
  },
  {
    n: "03",
    title: "Personal calificado",
    desc: "Médicos, enfermeros y técnicos en atención prehospitalaria con amplia experiencia.",
  },
  {
    n: "04",
    title: "Flota moderna y equipada",
    desc: "Ambulancias básicas y medicalizadas con equipos biomédicos de última tecnología.",
  },
  {
    n: "05",
    title: "Servicio humanizado",
    desc: "Enfoque en la dignidad del paciente y trato cercano con familiares y acompañantes.",
  },
  {
    n: "06",
    title: "Cobertura continua",
    desc: "Servicio de emergencia y transporte asistencial sin interrupciones, todos los días del año.",
  },
];

export function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 reveal">
            <span className="service-number">— ¿Por qué elegirnos?</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05] text-foreground tracking-tight">
              Razones para <span className="font-medium text-gradient-brand">confiar</span> en nosotros.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10 reveal reveal-delay-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combinamos experiencia clínica, tecnología y vocación de servicio para
              ofrecer una atención prehospitalaria que prioriza la vida y la dignidad
              de cada paciente.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {reasons.map((r, i) => (
            <div
              key={r.n}
              className={`reveal reveal-delay-${(i % 4) + 1} group border-t border-border pt-6 transition-all duration-500 hover:border-foreground/40`}
            >
              <span className="service-number">{r.n}</span>
              <h3 className="mt-3 text-xl font-medium text-foreground tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                {r.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
