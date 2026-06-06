import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Link, useLocation } from "react-router-dom";

import { Star } from "lucide-react";
const heroWorkImage = "/images/hero/hero-work.png";

const logoBrusselsAirport = "/images/logos/brussels-airport.webp";
const logoEneco = "/images/logos/eneco.webp";
const logoAlpro = "/images/logos/alpro.webp";
const logoTrixie = "/images/logos/trixie.webp";
const logoUnizo = "/images/logos/unizo.webp";
const logoWoestijnvis = "/images/logos/woestijnvis.webp";
const logoAesaert = "/images/logos/aesaert.webp";
const logoCoteDor = "/images/logos/cote-dor.webp";
const logoBlink = "/images/logos/blink.webp";
const logoVandemoortele = "/images/logos/vandemoortele.webp";
const logoWillux = "/images/logos/willux.webp";
const logoStoffels = "/images/logos/stoffels.webp";
const logoUGent = "/images/logos/ugent.webp";
const logoVlaamseOverheid = "/images/logos/vlaamse-overheid.webp";

const aanpak = [
  {
    iconClass: "fi fi-rr-comment",
    title: "Ik luister, jij vertelt",
    description: "In een kort gesprek vat ik de kern van jouw vraag. Geen eindeloze briefings — ik begrijp snel wat je nodig hebt en denk meteen mee.",
  },
  {
    iconClass: "fi fi-rr-sofa",
    title: "Van A tot Z verzorgd",
    description: "Van eerste schets tot finale oplevering: ik neem het volledige traject op mij. Jij focust op je business, ik op het beeld.",
  },
  {
    iconClass: "fi fi-rr-crown",
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

const reviews = [
  {
    name: "Nina Moens — Amsab-ISG",
    text: "Heel fijne samenwerking. Frederic slaagde erin om iets te creëren naar onze wensen, zonder inhoudelijk in te boeten, maar wel met heel veel creatieve input van zijn kant wat een zeer mooi eindresultaat opleverde! Absoluut de moeite.",
  },
  {
    name: "Bram Blondeel — MediaMixer",
    text: "Altijd fijn samenwerken met Frederic! Vakman met een creatieve geest. Met al heel wat mooie projecten samen. Mijn favoriet? Julien de Flandrien, een kleien wielrenner die doorheen de stad rijdt op weg naar de start van de Ronde in stad Antwerpen.",
  },
  {
    name: "Seppe Thys — Foodphoto",
    text: "Samenwerken met Frederic is altijd een plezier. Zijn ervaring en oog voor detail zorgen ervoor dat elk project er prachtig uitziet.",
  },
  {
    name: "Nele Ostyn — Meerkat",
    text: "Ik werk al jaren samen met Frederic Tilleman, en elke samenwerking bevestigt opnieuw waarom ik steeds bij hem terugkom. Frederic is een zeldzaam talent: hij weet als geen ander complexe scenario's en ideeën te vertalen naar luchtige, originele en visueel aantrekkelijke animaties. Een vaste waarde geworden in onze projecten.",
  },
  {
    name: "Hilde Hautekees — VVSG",
    text: "Ik heb in mijn functie al met heel wat illustratoren samengewerkt, maar Frederic springt er echt met kop en schouders bovenuit. Wat ik als boodschap wil meegeven, weet hij moeiteloos om te zetten in beelden die raken, blijven hangen én spreken. Een unieke combinatie van talent, inzicht en menselijkheid.",
  },
  {
    name: "Ariane Vanderlinden — Visualising Value",
    text: "Als onafhankelijk strategische communicatie-adviseur heb ik meerdere keren beroep gedaan op de illustratiekunsten van Frederic om een verhaal te vertellen op een toegankelijke en originele manier. Ik apprecieer zijn snelle inzichten en zeer flexibele manier van werken.",
  },
  {
    name: "Liesbeth Fauconnier — Het Peloton",
    text: "Bij Het Peloton zijn we altijd op zoek naar creatieve partners die onze verhalen naar een hoger niveau tillen, en Frederic Tilleman is daar een schitterend voorbeeld van. Als specialist in stop-motion animatie brengt Frederic een unieke vorm van storytelling tot leven. Bedankt voor je consistentie, professionaliteit en het brengen van magie in elk frame.",
  },
  {
    name: "Liesbeth De Muynck",
    text: "Frederic heeft een geboortekaartje gemaakt waar we heel veel complimentjes op gekregen hebben. Hij is een creatieve duizendpoot waar ik stiekem een beetje naar opkijk.",
  },
];

const herkenSteps = [
  "Je hebt een idee. Of een half. Of iets dat nog niet helemaal juist zit, maar waarvan je voelt: hier zit meer in.",
  "Je wil iets maken dat opvalt zonder te schreeuwen. Iets dat mensen meteen snappen én onthouden.",
  "Je zoekt iemand die met je meedenkt, je idee scherper maakt en uitpuurt tot de essentie, en er daarna ook echt mee aan de slag gaat. Van eerste schets tot eindresultaat, zonder gedoe.",
];

const Work = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#eerder-werk") {
      const el = document.getElementById("eerder-werk");
      if (el) {
        // small delay so layout/images settle
        setTimeout(() => el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" }), 0);
      }
    }
  }, [location]);
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

      {/* Herken je jezelf hierin? */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Herken je jezelf hierin?
          </h2>
          <div className="max-w-3xl mx-auto mt-10 space-y-6">
            {herkenSteps.map((text, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <i className="fi fi-rr-angle-small-down text-primary text-2xl leading-none flex items-center justify-center" />
                </div>
                <p className="text-muted-foreground text-base leading-relaxed pt-2">
                  {text}
                </p>
              </div>
            ))}
          </div>
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
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <i className={`${item.iconClass} text-primary text-2xl leading-none flex items-center justify-center`} />
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
            Van eenmalige opdrachten tot samenwerkingen op lange termijn,<br />
            met klanten die af en toe langskomen of regelmatig blijven terugkeren.
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
      <section id="eerder-werk" className="py-20 px-6 bg-secondary scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Eerder werk
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-base leading-relaxed">
            Soms zegt een beeld gewoon meer dan woorden.<br />
            Neem gerust een kijkje tussen een aantal projecten en ontdek wat er allemaal mogelijk is.
          </p>
          <PortfolioGrid />
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Wat klanten zeggen
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-base leading-relaxed">
            Een greep uit de Google reviews van mensen waarmee ik samenwerkte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-background border border-border p-6 md:p-8 flex flex-col gap-4 transition-colors duration-300 hover:border-primary/30"
              >
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  "{r.text}"
                </p>
                <p className="text-sm text-muted-foreground not-italic mt-auto">
                  — {r.name} · via Google
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-background mb-4" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Een project in gedachten?
          </h2>
          <p className="text-background/70 text-lg mb-8">
            Vertel me over je idee en ik denk graag mee.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary/80"
          >
            Let's talk
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Work;
