import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** If set, formats as "X/Y" (e.g. 24/7). When provided, `end` is ignored visually. */
  fraction?: { num: number; den: number };
  className?: string;
}

/**
 * Smoothly counts from 0 to `end` (or to fraction.num) once the element
 * scrolls into view. Uses easeOutExpo for an elegant deceleration.
 */
export function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  fraction,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  const target = fraction ? fraction.num : end;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let raf = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo — soft deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {fraction ? `${value}/${fraction.den}` : value}
      {suffix}
    </span>
  );
}
