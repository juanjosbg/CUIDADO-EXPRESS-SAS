import { CountUp } from "./CountUp";

export function About() {
  return (
    <section id="nosotros" className="relative bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 reveal">
          <span className="service-number">— Quiénes somos</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05] text-foreground">
            Una entidad <em className="font-display italic text-gradient-brand">comprometida</em> con la vida.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-10">
          <p className="reveal reveal-delay-1 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Cuidado Express SAS</span> es una
            empresa colombiana dedicada al transporte asistencial de pacientes,
            ofreciendo servicios pre-hospitalarios con los más altos estándares de
            calidad, seguridad y humanización.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 pt-6">
            <div className="reveal reveal-delay-2 border-t border-border pt-6">
              <span className="service-number">01</span>
              <h3 className="mt-3 text-xl font-medium text-foreground">Misión</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Brindar atención pre-hospitalaria oportuna, segura y humana,
                preservando la vida y dignidad de cada paciente que confía en
                nosotros.
              </p>
            </div>
            <div className="reveal reveal-delay-3 border-t border-border pt-6">
              <span className="service-number">02</span>
              <h3 className="mt-3 text-xl font-medium text-foreground">Visión</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Ser referente nacional en transporte asistencial, reconocidos por
                la excelencia operativa, la innovación tecnológica y un compromiso
                inquebrantable con el cuidado de las personas.
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-4 grid grid-cols-3 gap-6 pt-10 border-t border-border">
            <div>
              <div className="font-display text-3xl md:text-4xl font-light text-foreground tabular-nums">
                <CountUp fraction={{ num: 24, den: 7 }} duration={2200} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Disponibilidad
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-light text-foreground tabular-nums">
                <CountUp end={100} prefix="+" duration={2400} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Servicios mensuales
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-light text-foreground tabular-nums">
                <CountUp end={2} duration={1800} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Sedes principales
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
