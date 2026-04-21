import logo from "@/assets/logo-cuidado-express.png";

export function Footer() {
  return (
    <footer className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="Cuidado Express SAS"
              className="h-14 w-auto rounded-lg bg-white/95 p-2"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Empresa de transporte asistencial basico y medicalizado. Comprometidos
              con la vida y el cuidado humano.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Navegacion
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#nosotros" className="story-link text-white/80 hover:text-white">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="story-link text-white/80 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#transparencia" className="story-link text-white/80 hover:text-white">
                  Transparencia
                </a>
              </li>
              <li>
                <a href="#contacto" className="story-link text-white/80 hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Contacto
            </h4>
            <div className="mt-5 space-y-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Correo financiero
                </p>
                <a
                  href="mailto:financiero@cuidadoexpress.com"
                  className="story-link break-all text-white/85 hover:text-white"
                >
                  financiero@cuidadoexpress.com
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Correo asistencial
                </p>
                <a
                  href="mailto:asistencial.cali@cuidadoexpress.com"
                  className="story-link break-all text-white/85 hover:text-white"
                >
                  asistencial.cali@cuidadoexpress.com
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Telefono
                </p>
                <p>320 852 3734</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Direccion
                </p>
                <p className="leading-relaxed">Carrera 46 # 9C-85, Cali - Colombia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Cuidado Express SAS. Todos los derechos reservados.</p>
          <p>Pereira - Cali - Colombia</p>
        </div>
      </div>
    </footer>
  );
}
