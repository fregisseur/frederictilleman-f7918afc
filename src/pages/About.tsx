import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import aboutPhoto from "@/assets/images/fre1.png.webp";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-12">
            Over mij
          </h1>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Foto */}
            <div className="lg:w-2/5 shrink-0">
              <img
                src={aboutPhoto}
                alt="Frederic Tilleman aan het werk"
                className="w-full rounded-lg object-cover"
                width={600}
                height={800}
              />
            </div>

            {/* Tekst */}
            <div className="lg:w-3/5 space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p>
                Ik ben een <strong className="text-foreground">animatie- en illustratiekunstenaar</strong> met een voorliefde voor eenvoud, altijd gecombineerd met een onverwachte twist.
              </p>
              <p>
                Met een uniek perspectief, gevormd door mijn academische achtergrond, benader ik animatie en illustratie op een manier die echt de mijne is. Mijn stijl is onmiskenbaar handgemaakt: papieren knipsels, speelse lijntekeningen en stop-motion. Technieken die een tastbare, menselijke charme geven aan elk verhaal dat ik creëer.
              </p>
              <p>
                Al meer dan tien jaar help ik merken en individuen bij het maken van animaties en illustraties die opvallen. Vertrouwd door bedrijven zoals{" "}
                <strong className="text-foreground">Brussels Airport</strong>,{" "}
                <strong className="text-foreground">Lidl</strong>,{" "}
                <strong className="text-foreground">Greenpeace</strong> en{" "}
                <strong className="text-foreground">Vandemoortele</strong> — ik breng ideeën tot leven met creativiteit en zorg. Of het nu gaat om een kortfilm, een uitlegvideo of iets helemaal nieuws.
              </p>
              <p>
                Benieuwd hoe mijn stijl jouw project kan transformeren? Laten we samenwerken en iets bijzonders creëren!
              </p>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Neem contact op
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
