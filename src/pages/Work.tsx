import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PortfolioGrid from "@/components/PortfolioGrid";

import illustrationBriefing from "@/assets/illustrations/briefing.png";
import illustrationCare from "@/assets/illustrations/care.png";
import illustrationExperience from "@/assets/illustrations/experience.png";

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
    image: illustrationBriefing,
    title: "Ik luister, jij vertelt",
    description: "In een kort gesprek vat ik de kern van jouw vraag. Geen eindeloze briefings — ik begrijp snel wat je nodig hebt en denk meteen mee.",
  },
  {
    image: illustrationCare,
    title: "Van A tot Z verzorgd",
    description: "Van eerste schets tot finale oplevering: ik neem het volledige traject op mij. Jij focust op je business, ik op het beeld.",
  },
  {
    image: illustrationExperience,
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

      {/* Hero intro */}
      <section className="pt-4 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-foreground mb-2 fade-up tracking-tight">
            <span className="block text-xl md:text-2xl font-bold leading-snug">
              Animaties en illustraties
            </span>
            <span className="block text-lg md:text-xl font-medium text-muted-foreground mt-1">
              die jouw verhaal <span className="text-primary font-bold">glashelder</span> vertellen.
            </span>
          </h1>
          <p className="text-muted-foreground text-sm italic mt-3 fade-up" style={{ animationDelay: "0.1s" }}>
            Zelfs al is dat verhaal een hele boterham...
          </p>
        </div>
      </section>

      {/* Hoe pak ik het aan */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">
            Hoe pak ik het aan<span className="text-primary">?</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base leading-relaxed">
            Ik zet jouw wens of vraag om in een beeld dat helder communiceert en visueel verrast. 
            Ik heb de ervaring en het oog voor detail dat je nodig hebt, precies wanneer je het nodig hebt. 
            Een beeld of video is pas geslaagd als je boodschap meteen duidelijk is.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {aanpak.map((item) => (
              <div
                key={item.title}
                className="group bg-background p-8 text-center border border-border transition-colors duration-300 hover:border-primary/30"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain mx-auto mb-5"
                  loading="lazy"
                  width={512}
                  height={512}
                />
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
          <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-8">
            Samenwerkingen waar ik met trots aan bijdroeg
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {clientLogos.map((client) => (
              <img
                key={client.name}
                src={client.src}
                alt={client.name}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-50 hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">
            Eerder werk<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base leading-relaxed">
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
