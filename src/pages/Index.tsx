import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import TargetAudience from "@/components/TargetAudience";
import WorkshopCard from "@/components/WorkshopCard";
import Testimonial from "@/components/Testimonial";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";

const workshopStopmotion1 = "/images/workshops/workshop-stopmotion-1.webp";
const workshopStopmotion2 = "/images/workshops/workshop-stopmotion-2.webp";
const workshopStopmotion3 = "/images/workshops/workshop-stopmotion-3.webp";
const workshopFilm1 = "/images/workshops/workshop-film-1.webp";
const workshopFilm2 = "/images/workshops/workshop-film-2.webp";
const workshopFilm3 = "/images/workshops/workshop-film-3.webp";
const workshopTeambuilding = "/images/workshops/workshop-teambuilding.webp";

const Index = () => {
  const workshopServices = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Stop-motion workshop",
      serviceType: "Creatieve workshop",
      description:
        "Stop-motion workshop voor kinderen en jongeren van 7 tot 12 jaar. Geen ervaring nodig, enkel een flinke dosis fantasie.",
      areaServed: "BE",
      provider: {
        "@type": "Person",
        name: "Frederic Tilleman",
        url: "https://www.frederictilleman.be/",
      },
      url: "https://www.frederictilleman.be/workshops#workshops",
      audience: { "@type": "Audience", audienceType: "Kinderen en jongeren 7-12" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Film workshop",
      serviceType: "Creatieve workshop",
      description:
        "Film- en videoworkshop voor kinderen en jongeren van 7 tot 14 jaar. Verhalen vertellen, filmen en monteren.",
      areaServed: "BE",
      provider: {
        "@type": "Person",
        name: "Frederic Tilleman",
        url: "https://www.frederictilleman.be/",
      },
      url: "https://www.frederictilleman.be/workshops#workshops",
      audience: { "@type": "Audience", audienceType: "Kinderen en jongeren 7-14" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Teambuilding workshop",
      serviceType: "Teambuilding",
      description:
        "Teambuilding rond stop-motion of kortfilm: samen een film maken en het resultaat mee naar huis nemen.",
      areaServed: "BE",
      provider: {
        "@type": "Person",
        name: "Frederic Tilleman",
        url: "https://www.frederictilleman.be/",
      },
      url: "https://www.frederictilleman.be/workshops#workshops",
      audience: { "@type": "Audience", audienceType: "Bedrijven en teams" },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <JsonLd id="ld-workshops" data={workshopServices} />
      <HeroSection />
      <TargetAudience />
      <USPSection />

      {/* Workshops */}
      <section id="workshops" className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Workshop 1: Stop-motion */}
          <WorkshopCard
            title="De wereld in stop-motion"
            images={[workshopStopmotion1, workshopStopmotion2, workshopStopmotion3]}
            ctaLabel="Ik wil deze workshop"
            ctaHref="/contact"
            description={
              <>
                <p>
                  Weet je nog hoe Wallace &amp; Gromit, Shaun the Sheep en Chicken Run je betoverden? Stop-motion is de techniek achter deze wonderlijke animatiefilms. En nu is het jouw beurt om de magie te ervaren!
                </p>
                <p>Tijdens deze workshop:</p>
                <ul className="space-y-2 list-none">
                  <li><strong>Laat je je creativiteit de vrije loop:</strong> bouw fantastische decors, creëer kleurrijke figuren en vertel een uniek verhaal.</li>
                  <li><strong>Leer je de kneepjes van het vak:</strong> ontdek hoe je personages tot leven brengt, bewegingen vloeiend maakt en je film een professionele uitstraling geeft.</li>
                  <li><strong>Experimenteer je met een animatie app:</strong> maak gebruik van handige tools en voeg extra geluidseffecten toe aan je film.</li>
                </ul>
                <p>
                  Deze workshop is perfect voor <strong>kinderen en jongeren van 7 tot 12 jaar</strong> die houden van creativiteit en knutselen en voor iedereen die meer wil leren over stop-motion animatie. Geen ervaring nodig, enkel een flinke dosis fantasie!
                </p>
              </>
            }
          />

          {/* Testimonial 1 */}
          <Testimonial
            text="Ik wou je graag laten weten dat Oskar & Klara de stop-motion workshop superleuk vonden! Zeker voor herhaling vatbaar! Je hebt dit ook op een heel kindvriendelijke manier gebracht en nam heel rustig de tijd om alle kindjes te helpen."
            author="Mama van Oskar & Klara"
          />

          {/* Workshop 2: Film */}
          <WorkshopCard
            title="De magie van film"
            images={[workshopFilm1, workshopFilm2, workshopFilm3]}
            reversed
            ctaLabel="Ik wil deze workshop"
            ctaHref="/contact"
            description={
              <>
                <p>
                  Ben je klaar om de filmwereld te bestormen met je camera? In deze workshop ontdek je hoe je verbluffende beelden maakt, een pakkend verhaal vertelt en je publiek versteld doet staan van je talent.
                </p>
                <p>Stap voor stap:</p>
                <ul className="space-y-2 list-none">
                  <li><strong>Ontcijfer je de magie van het filmmaken:</strong> leer hoe je een spannend scenario opbouwt, een creatief storyboard tekent en een smartphone of tablet als professionele camera gebruikt.</li>
                  <li><strong>Til je je films naar een hoger niveau:</strong> experimenteer met verschillende camerastandpunten, perspectieven en montagetechnieken.</li>
                  <li><strong>Word je regisseur, cameraman of -vrouw en editor:</strong> van storyboard tot montage, jij hebt de controle over je eigen meesterwerk.</li>
                </ul>
                <p>
                  Deze workshop is perfect voor <strong>kinderen en jongeren van 7 tot 14 jaar</strong> die houden van verhalen vertellen, creativiteit en voor iedereen die gewoon straffe video's wil maken. Geen ervaring nodig, enkel een mooie portie enthousiasme!
                </p>
              </>
            }
          />

          {/* Testimonial 2 */}
          <Testimonial
            text="De kinderen waren gek van de workshops! Weer eens een andere manier om hun creativiteit de vrije loop te laten gaan!"
            author="Reno, deskundige jeugd"
          />

          {/* Workshop 3: Teambuilding */}
          <WorkshopCard
            title="Workshop als teambuilding"
            images={[workshopTeambuilding]}
            ctaLabel="Ik wil een teambuilding"
            ctaHref="/contact"
            description={
              <>
                <p>
                  Op zoek naar een teambuilding die zowel <strong>creatief</strong> als{" "}
                  <strong>uniek</strong> is? Dan is je eigen kortfilm maken of
                  zelf stop-motion video's opnemen misschien wel wat je zoekt.
                </p>
                <p>
                  In de <strong>kortfilm workshop</strong> maken jullie samen een film,
                  van idee tot uitvoering. Het is een geweldige manier om creatief samen te werken
                  en verschillende talenten te ontdekken.
                </p>
                <p>
                  In de <strong>stop-motion workshop</strong> leren jullie objecten
                  laten bewegen zonder ze aan te raken! De video's zijn perfect om
                  online te delen en zorgen voor extra zichtbaarheid.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-background mb-4" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Klaar om iets unieks te organiseren?
          </h2>
          <p className="text-background/70 text-lg mb-8">
            Neem contact op en we plannen samen de perfecte workshop.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Contacteer mij
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
