import { useEffect, useRef, useState } from "react";
import a1 from "@/assets/ambulance-1.jpg";
import a2 from "@/assets/ambulance-2.jpg";
import a3 from "@/assets/ambulance-3.jpg";
import a4 from "@/assets/ambulance-4.jpg";
import a5 from "@/assets/ambulance-5.jpg";

const slides = [
  { src: a1, caption: "Respuesta inmediata" },
  { src: a2, caption: "Equipamiento certificado" },
  { src: a3, caption: "Personal calificado" },
  { src: a4, caption: "Flota disponible 24/7" },
  { src: a5, caption: "Cobertura regional" },
];

export function AmbulanceCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <span className="service-number">— Nuestra flota</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-light text-foreground">
              Equipos en movimiento
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative h-1 w-12 bg-border overflow-hidden rounded-full"
                aria-label={`Ir a slide ${i + 1}`}
              >
                <span
                  className={`absolute inset-0 origin-left transition-transform duration-700 ease-out ${
                    i === index ? "scale-x-100 bg-foreground" : "scale-x-0 bg-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl bg-muted shadow-elevated">
            {slides.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-[1400ms] ease-out"
                style={{
                  opacity: i === index ? 1 : 0,
                  filter: i === index ? "blur(0px)" : "blur(24px)",
                  transform: i === index ? "scale(1)" : "scale(1.06)",
                }}
              >
                <img
                  src={s.src}
                  alt={s.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                  <p className="font-display text-2xl md:text-3xl font-light max-w-md">
                    {s.caption}
                  </p>
                  <span className="text-xs uppercase tracking-[0.3em] opacity-70">
                    {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
