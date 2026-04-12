import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PortfolioGrid from "@/components/PortfolioGrid";

import { Headphones, Heart, Trophy } from "lucide-react";
import heroWorkImage from "@/assets/hero-work.png";

import logoBrusselsAirport from "@/assets/logos/brussels-airport.webp";
import logoEneco from "@/assets/logos/eneco.png";
import logoAlpro from "@/assets/logos/alpro.png";
import logoTrixie from "@/assets/logos/trixie.png";
import logoUnizo from "@/assets/logos/unizo.png";
import logoWoestijnvis from "@/assets/logos/woestijnvis.jpg";
import logoAesaert from "@/assets/logos/aesaert.avif";
import logoCoteDor from "@/assets/logos/cote-dor.png";
import logoBlink from "@/assets/logos/blink.jpg";
import logoVandemoortele from "@/assets/logos/vandemoortele.png";
import logoWillux from "@/assets/logos/willux.png";
import logoStoffels from "@/assets/logos/stoffels.jpg";
import logoUGent from "@/assets/logos/ugent.png";
import logoVlaamseOverheid from "@/assets/logos/vlaamse-overheid.jpg";

const aanpak = [
  {
    icon: Headphones,
    title: "Ik luister, jij vertelt",
    description: "In een kort gesprek vat ik de kern van jouw vraag. Geen eindeloze briefings — ik begrijp snel wat je nodig hebt en denk meteen mee.",
  },
  {
    icon: Heart,
    title: "Van A tot Z verzorgd",
    description: "Van eerste schets tot finale oplevering: ik neem het volledige traject op mij. Jij focust op je business, ik op het beeld.",
  },
  {
    icon: Trophy,
    title: "10+ jaar ervaring",
    description: "Professionele kwaliteit, afgewerkt tot in de puntjes. De referenties hieronder spreken voor zich.",
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
  { name: "Côte d'Or", src: logoCoteDor },
  { name: "Blink", src: logoBlink },
  { name: "Vandemoortele", src: logoVandemoortele },
  { name: "Willux", src: logoWillux },
  { name: "Stoffels", src: logoStoffels },
  { name: "UGent", src: logoUGent },
  { name: "Vlaamse Overheid", src: logoVlaamseOverheid },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroWorkImage}
          alt="Illustratie Hannah en de Krokodil"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight max-w-4xl fade-up">
            Animaties en illustraties
            <br />
            <span className="text-primary">die jouw verhaal glashelder vertellen.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-10 font-light fade-up" style={{ animationDelay: "0.15s" }}>
            Zelfs al is dat verhaal een hele boterham...
          </p>
        </div>
      </section>

      {/* Hoe pak ik het aan */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Hoe pak ik het aan?
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-base leading-relaxed">
            Ik zet jouw wens of vraag om in een beeld dat helder communiceert en visueel verrast. Ik heb de ervaring en het oog voor detail dat je nodig hebt, precies wanneer je het nodig hebt. Een beeld of video is pas geslaagd als je boodschap meteen duidelijk is.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {aanpak.map((item) => (
              <div
                key={item.title}
                className="group bg-background p-8 text-center border border-border transition-colors duration-300 hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            In goed gezelschap
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-base leading-relaxed">
            Van snelle opdrachten tot langdurige samenwerkingen.<br />
            Voor klanten die hun verhaal visueel willen laten spreken.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {clientLogos.map((client) => {
              const isLargeLogo = ["Woestijnvis", "Côte d'Or", "Stoffels", "UGent", "Vlaamse Overheid"].includes(client.name);
              const isBigLogo = client.name === "Willux";
              return (
                <img
                  key={client.name}
                  src={client.src}
                  alt={client.name}
                  className={`w-auto object-contain grayscale hover:opacity-90 transition-opacity duration-300 ${
                    isLargeLogo ? "h-14 md:h-16 opacity-60" : isBigLogo ? "h-6 md:h-7 opacity-50" : "h-8 md:h-10 opacity-50"
                  }`}
                  loading="lazy"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Eerder werk
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-base leading-relaxed">
            Een beeld zegt meer dan duizend woorden. Bekijk een greep uit mijn projecten en ontdek wat er mogelijk is.
          </p>
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
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary/80"
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
