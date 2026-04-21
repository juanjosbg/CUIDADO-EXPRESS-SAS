import { useEffect, useMemo, useRef, useState } from "react";

const photoModules = import.meta.glob("../../public/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});

const slides = Object.entries(photoModules)
  .map(([path, src]) => ({
    src: src as string,
    name: path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Cuidado Express",
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "es"));

type AmbulanceCarouselProps = {
  cardsToShow?: number;
  intervalMs?: number;
  embedded?: boolean;
};

function getResponsiveCards(width: number, cardsToShow: number) {
  const normalized = Math.max(1, cardsToShow);

  if (normalized === 1) return 1;
  if (width >= 1280) return normalized;
  if (width >= 768) return Math.min(2, normalized);
  return 1;
}

export function AmbulanceCarousel({
  cardsToShow = 4,
  intervalMs = 3500,
  embedded = false,
}: AmbulanceCarouselProps) {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(cardsToShow);
  const [withTransition, setWithTransition] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const syncVisibleCards = () => {
      setVisibleCards(getResponsiveCards(window.innerWidth, cardsToShow));
    };

    syncVisibleCards();
    window.addEventListener("resize", syncVisibleCards);
    return () => window.removeEventListener("resize", syncVisibleCards);
  }, [cardsToShow]);

  useEffect(() => {
    setIndex(0);
    setWithTransition(false);

    const timeout = window.setTimeout(() => {
      setWithTransition(true);
    }, 40);

    return () => window.clearTimeout(timeout);
  }, [visibleCards]);

  useEffect(() => {
    if (slides.length <= visibleCards) return;

    timer.current = setInterval(() => {
      setWithTransition(true);
      setIndex((current) => current + 1);
    }, intervalMs);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [intervalMs, visibleCards]);

  const loopedSlides = useMemo(() => {
    if (slides.length <= visibleCards) return slides;
    return [...slides, ...slides.slice(0, visibleCards)];
  }, [visibleCards]);

  const displayIndex = slides.length > visibleCards ? index : 0;
  const activeDot = slides.length > 0 ? index % slides.length : 0;

  const handleTransitionEnd = () => {
    if (slides.length <= visibleCards) return;
    if (index < slides.length) return;

    setWithTransition(false);
    setIndex(0);
  };

  return (
    <div className={embedded ? "relative" : "relative overflow-hidden bg-background py-20 md:py-28"}>
      <div className={embedded ? "" : "mx-auto max-w-7xl px-6 lg:px-10"}>
        {!embedded ? (
          <div className="mb-12 flex items-end justify-between gap-6 reveal">
            {/* <div>
              <span className="service-number">— Nuestra flota</span>
              <h2 className="mt-3 text-4xl font-light text-foreground md:text-5xl">
                Equipos en movimiento
              </h2>
            </div> */}

            {slides.length > visibleCards ? (
              <div className="hidden items-center gap-2 md:flex">
                {slides.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    type="button"
                    onClick={() => {
                      setWithTransition(true);
                      setIndex(slideIndex);
                    }}
                    className="group relative h-1 w-12 overflow-hidden rounded-full bg-border"
                    aria-label={`Ir al grupo ${slideIndex + 1}`}
                  >
                    <span
                      className={`absolute inset-0 origin-left bg-foreground transition-transform duration-700 ease-out ${
                        slideIndex === activeDot ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className={`overflow-hidden ${embedded ? "rounded-[1.75rem]" : "rounded-4xl"}`}>
          <div
            className={`-ml-3 flex ${withTransition ? "transition-transform duration-1400 ease-out" : ""}`}
            style={{ transform: `translateX(-${displayIndex * (100 / visibleCards)}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedSlides.map((slide, slideIndex) => {
              const isVisible =
                slideIndex >= displayIndex && slideIndex < displayIndex + visibleCards;

              return (
                <article
                  key={`${slide.src}-${slideIndex}`}
                  className="w-full h-[50vh] shrink-0 pl-3"
                  style={{ flexBasis: `${100 / visibleCards}%` }}
                >
                  <div
                    className="group relative overflow-hidden rounded-[1.75rem] transition-all duration-700"
                    style={{
                      opacity: isVisible ? 1 : 0.72,
                      filter: isVisible ? "blur(0px)" : "blur(3px)",
                      transform: isVisible ? "scale(1)" : "scale(0.985)",
                    }}
                  >
                    <div className={embedded ? "aspect-4/5 overflow-hidden" : "aspect-4/5 overflow-hidden xl:aspect-4/3"}>
                      <img
                        src={slide.src}
                        alt={slide.name.replace(/-/g, " ")}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 py-5 text-white md:px-6">
                      <p className="font-display text-lg font-light md:text-xl">
                        {slide.name.replace(/-/g, " ")}
                      </p>
                      <span className="text-xs uppercase tracking-[0.3em] opacity-75">
                        {String((slideIndex % slides.length) + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {embedded && slides.length > 1 ? (
          <div className="mt-5 flex items-center gap-2">
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                type="button"
                onClick={() => {
                  setWithTransition(true);
                  setIndex(slideIndex);
                }}
                className="group relative h-1 w-10 overflow-hidden rounded-full bg-border"
                aria-label={`Ir a la imagen ${slideIndex + 1}`}
              >
                <span
                  className={`absolute inset-0 origin-left bg-foreground transition-transform duration-700 ease-out ${
                    slideIndex === activeDot ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
