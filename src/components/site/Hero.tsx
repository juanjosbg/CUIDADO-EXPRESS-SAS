import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/ambulance-hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll-driven transforms
  const textTranslate = Math.min(scrollY * 0.35, 200);
  const textOpacity = Math.max(1 - scrollY / 500, 0);
  const imgTranslate = scrollY * 0.18;
  const imgScale = 1 + Math.min(scrollY / 4000, 0.06);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-primary"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${imgTranslate}px, 0) scale(${imgScale})`,
        }}
      >
        <img
          src={heroImg}
          alt="Ambulancia Cuidado Express en servicio"
          className="absolute inset-0 h-full w-full object-cover animate-blur-in"
          width={1920}
          height={1280}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 min-h-screen flex flex-col justify-end pb-24 pt-40">
        <div
          className="hero-text max-w-4xl"
          style={{
            transform: `translate3d(0, ${-textTranslate}px, 0)`,
            opacity: textOpacity,
          }}
        >
          <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="pulse-dot" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Atención Pre-hospitalaria · 24/7
            </span>
          </div>

          <h1
            className="text-white font-semibold uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Cuidamos cada
            <br />
            <span className="italic text-gradient-brand bg-clip-text">
              segundo
            </span>{" "}
            de su vida.
          </h1>

          <p
            className="mt-8 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            Ambulancias Cuidado Express SAS — Transporte asistencial básico y medicalizado
            con personal calificado, equipamiento certificado y respuesta inmediata en
            Pereira y Cali.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-primary text-sm font-semibold tracking-wide transition-all duration-500 hover:bg-white/90 hover:shadow-elevated hover:-translate-y-0.5"
            >
              Solicitar servicio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 text-white text-sm font-semibold tracking-wide transition-all duration-500 hover:bg-white/10 hover:border-white/60"
            >
              Conocer servicios
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
