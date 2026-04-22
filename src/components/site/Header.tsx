import { useEffect, useState } from "react";
import logo from "@/assets/Logo2.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#transparencia", label: "Transparencia" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#fdfeff] backdrop-blur-xl border-b border-border/60 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
        }`}

    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Cuidado Express SAS"
            className="h-11 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`story-link text-sm font-medium tracking-wide transition-colors ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
                }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <span className="pulse-dot" aria-hidden />
          <a
            href="tel:+573000000000"
            className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? "text-foreground" : "text-white"
              }`}
          >
            Emergencias 24/7
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-flex flex-col gap-1.5 p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menú"
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
