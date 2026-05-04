import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import aboutPhoto from "@/assets/images/fre1.png.webp";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="py-16 px-6 fade-up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-normal text-black text-center mb-12" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Achter de schermen
          </h1>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Foto */}
            <div className="lg:w-2/5 shrink-0">
              <img
                src={aboutPhoto}
                alt="Frederic Tilleman aan het werk"
                className="w-full object-cover"
                width={600}
                height={800}
              />
            </div>

            {/* Tekst */}
            <div className="lg:w-3/5 space-y-5 text-foreground/80 leading-relaxed text-base">
              <p>
                Hallo, ik ben Frederic. <strong className="text-foreground">Animatie- en illustratiekunstenaar</strong> met een voorliefde voor eenvoud.
              </p>
              <p>
                Dankzij mijn academische achtergrond kijk ik op een unieke manier naar animaties en illustraties. Ik ben in staat complexe ideeën op een heel heldere manier te vertalen. Mijn werk begint vaak eenvoudig, maar blijft daar zelden. Er sluipt bijna altijd iets in dat verrast. Met een hoek af. Iets dat net dat beetje anders loopt dan je verwacht.
              </p>
              <p>
                Ik werk graag met mijn handen. <strong className="text-foreground">Papieren knipsels</strong>, <strong className="text-foreground">lijntekeningen</strong> en <strong className="text-foreground">stop-motion</strong> keren vaak terug. Geen gladde perfectie, maar beelden waarin je het maakproces nog voelt. Dat tastbare, die menselijke charme, is voor mij geen stijlkeuze, maar de kern.
              </p>
              <p>
                Al meer dan tien jaar werk ik voor merken en organisaties zoals{" "}
                <strong className="text-foreground">Brussels Airport</strong>,{" "}
                <strong className="text-foreground">Lidl</strong>,{" "}
                <strong className="text-foreground">Greenpeace</strong> en{" "}
                <strong className="text-foreground">Vandemoortele</strong>. Van korte films tot uitlegvideo's en projecten die nog geen naam hebben.
              </p>
              <p>
                Heb je ook een idee dat nood heeft aan een verfrissende stijl? Dan zit je waarschijnlijk goed.
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
