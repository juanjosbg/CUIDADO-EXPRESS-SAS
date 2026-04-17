import logo from "@/assets/logo-cuidado-express.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <img src={logo} alt="Cuidado Express SAS" className="h-14 w-auto bg-white/95 p-2 rounded-lg" />
            <p className="mt-6 text-sm text-white/65 max-w-sm leading-relaxed">
              Empresa de transporte asistencial básico y medicalizado. Comprometidos
              con la vida y el cuidado humano.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Navegación
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#nosotros" className="story-link text-white/80 hover:text-white">Nosotros</a></li>
              <li><a href="#servicios" className="story-link text-white/80 hover:text-white">Servicios</a></li>
              <li><a href="#transparencia" className="story-link text-white/80 hover:text-white">Transparencia</a></li>
              <li><a href="#contacto" className="story-link text-white/80 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><a href="mailto:financiero@cuidadoexpress.com" className="story-link">financiero@cuidadoexpress.com</a></li>
              <li><a href="mailto:asistencial.cali@cuidadoexpress.com" className="story-link">asistencial.cali@cuidadoexpress.com</a></li>
              <li className="pt-2 text-white/60">NIT: 901.643.217-9</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Cuidado Express SAS. Todos los derechos reservados.</p>
          <p>Pereira · Cali · Colombia</p>
        </div>
      </div>
    </footer>
  );
}
