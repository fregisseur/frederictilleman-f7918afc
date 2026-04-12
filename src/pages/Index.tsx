import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import TargetAudience from "@/components/TargetAudience";
import WorkshopCard from "@/components/WorkshopCard";
import Testimonial from "@/components/Testimonial";
import SiteFooter from "@/components/SiteFooter";

import workshopStopmotion1 from "@/assets/workshop-stopmotion-1.webp";
import workshopStopmotion2 from "@/assets/workshop-stopmotion-2.webp";
import workshopStopmotion3 from "@/assets/workshop-stopmotion-3.webp";
import workshopFilm1 from "@/assets/workshop-film-1.webp";
import workshopFilm2 from "@/assets/workshop-film-2.webp";
import workshopFilm3 from "@/assets/workshop-film-3.webp";
import workshopTeambuilding from "@/assets/workshop-teambuilding.webp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <USPSection />
      <TargetAudience />

      {/* Workshops */}
      <section id="workshops" className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Workshop 1: Stop-motion */}
          <WorkshopCard
            title="De wereld in stop-motion"
            images={[workshopStopmotion1, workshopStopmotion2, workshopStopmotion3]}
            ctaLabel="Ik wil deze workshop"
            ctaHref="mailto:hello@frederictilleman.be?subject=Workshop stop-motion"
            description={
              <>
                <p>
                  Weet je nog hoe Wallace &amp; Gromit, Shaun the Sheep en Chicken Run je betoverden?
                  <strong> Stop-motion</strong> is de techniek achter deze wonderlijke animatiefilms.
                  En nu is het jouw beurt om de magie te ervaren!
                </p>
                <ul className="space-y-2 list-none">
                  <li>🎨 Laat je <strong>creativiteit</strong> de vrije loop: bouw fantastische decors en creëer kleurrijke figuren.</li>
                  <li>🎬 Leer de <strong>kneepjes van het vak</strong>: breng personages tot leven en maak bewegingen vloeiend.</li>
                  <li>📱 Experimenteer met een <strong>animatie app</strong>: voeg geluidseffecten toe aan je film.</li>
                </ul>
                <p className="text-muted-foreground text-sm italic">
                  Geen ervaring nodig, enkel een flinke dosis fantasie!
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
            ctaHref="mailto:hello@frederictilleman.be?subject=Workshop kortfilm"
            description={
              <>
                <p>
                  Ben je klaar om de <strong>filmwereld te bestormen met je camera</strong>?
                  In deze workshop ontdek je hoe je verbluffende beelden maakt,
                  een pakkend verhaal vertelt en je publiek versteld doet staan.
                </p>
                <ul className="space-y-2 list-none">
                  <li>📝 Ontcijfer de <strong>magie van het filmmaken</strong>: leer een spannend scenario opbouwen en een creatief storyboard tekenen.</li>
                  <li>📷 Til je films naar een <strong>hoger niveau</strong>: experimenteer met camerastandpunten en montagetechnieken.</li>
                  <li>🎥 Word <strong>regisseur</strong>, <strong>cameraman</strong> en <strong>editor</strong>: van storyboard tot montage, jij hebt de controle.</li>
                </ul>
                <p className="text-muted-foreground text-sm italic">
                  Geen ervaring nodig, enkel een mooie portie enthousiasme!
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
            ctaHref="mailto:hello@frederictilleman.be?subject=Teambuilding"
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
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Klaar om iets unieks te maken?
          </h2>
          <p className="text-background/70 text-lg mb-8">
            Neem contact op en we plannen samen de perfecte workshop.
          </p>
          <a
            href="mailto:hello@frederictilleman.be?subject=Workshop aanvraag"
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
