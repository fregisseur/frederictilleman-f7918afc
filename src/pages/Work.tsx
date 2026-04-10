import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Sparkles, Target, Award, Palette } from "lucide-react";

import logoBrusselsAirport from "@/assets/logos/brussels-airport.webp";
import logoEneco from "@/assets/logos/eneco.png";
import logoAlpro from "@/assets/logos/alpro.png";
import logoTrixie from "@/assets/logos/trixie.png";
import logoUnizo from "@/assets/logos/unizo.png";
import logoWoestijnvis from "@/assets/logos/woestijnvis.jpg";
import logoAesaert from "@/assets/logos/aesaert.avif";

const troeven = [
  {
    icon: Sparkles,
    title: "Ontzorgen",
    description: "Van idee tot afgewerkt product. Ik regel alles zodat jij je op je business kan focussen.",
  },
  {
    icon: Target,
    title: "Op maat",
    description: "Elk project is uniek. Geen templates, maar een aanpak die past bij jouw merk en boodschap.",
  },
  {
    icon: Award,
    title: "10+ jaar ervaring",
    description: "Professionele kwaliteit, afgewerkt tot in de puntjes. Elke keer opnieuw.",
  },
  {
    icon: Palette,
    title: "Unieke stijl",
    description: "Herkenbaar, verfrissend en op maat van jouw merk. Geen standaard animatie.",
  },
];

const clientLogos = [
  { name: "Woestijnvis", src: logoWoestijnvis },
  { name: "Unizo", src: logoUnizo },
  { name: "Trixie", src: logoTrixie },
  { name: "Alpro", src: logoAlpro },
  { name: "Eneco", src: logoEneco },
  { name: "Brussels Airport", src: logoBrusselsAirport },
  { name: "Aesaert", src: logoAesaert },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero intro */}
      <section className="pt-4 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-6 leading-snug fade-up tracking-tight">
            Animaties en illustraties die jouw{" "}
            <span className="text-primary">verhaal scherpstellen</span>
          </h1>

          {/* Client logos */}
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mt-10 fade-up" style={{ animationDelay: "0.15s" }}>
            {clientLogos.map((client) => (
              <img
                key={client.name}
                src={client.src}
                alt={client.name}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Troeven */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">
            Waarom samenwerken<span className="text-primary">?</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
            Wat je krijgt als je met mij werkt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {troeven.map((t) => (
              <div
                key={t.title}
                className="group bg-background rounded-lg p-8 text-center transition-shadow duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <t.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Een project in gedachten?
          </h2>
          <p className="text-background/70 text-lg mb-8">
            Vertel me over je idee en ik denk graag mee.
          </p>
          <a
            href="mailto:hello@frederictilleman.be?subject=Project aanvraag"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Laat ons praten
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Work;
