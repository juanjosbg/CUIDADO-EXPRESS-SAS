import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AmbulanceCarousel } from "@/components/site/AmbulanceCarousel";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Transparency } from "@/components/site/Transparency";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cuidado Express SAS — Transporte Asistencial 24/7 en Pereira y Cali" },
      {
        name: "description",
        content:
          "Ambulancias Cuidado Express SAS: transporte asistencial básico y medicalizado con personal calificado en Pereira y Cali. Servicio 24/7.",
      },
      { property: "og:title", content: "Cuidado Express SAS — Transporte Asistencial 24/7" },
      {
        property: "og:description",
        content:
          "Atención pre-hospitalaria oportuna, segura y humana. Pereira y Cali, Colombia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AmbulanceCarousel />
        <About />
        <Services />
        <Transparency />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
