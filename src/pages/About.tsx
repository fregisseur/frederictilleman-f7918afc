import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { usePageMeta } from "@/hooks/usePageMeta";
const aboutPhoto1 = "/images/about/frederic-tilleman-illustraties-papieren-knipsels-animatie-stopmotion.webp";
const aboutPhoto2 = "/images/about/frederic-tilleman-illustrator-atelier-animaties-stopmotion.webp";
const aboutPhoto3 = "/images/about/frederic-tilleman-motion-designer-natuur-inspiratie.webp";
const aboutPhoto4 = "/images/about/frederic-tilleman-studio-cutout-stopmotion-animatie.webp";
const aboutPhoto5 = "/images/about/frederic-tilleman-stopmotion-animatie-papier-cut-out.webp";
const aboutPhoto6 = "/images/about/frederic-tilleman-papieren-knipsels-cut-out-stop-motion-animatie.webp";
const aboutPhoto7 = "/images/about/frederic-tilleman-stopmotion-animatie-food-photography-hamburger.webp";

const aboutImages = [
  { src: aboutPhoto1, alt: "Frederic Tilleman, animatie- en illustratiekunstenaar uit België" },
  { src: aboutPhoto2, alt: "Frederic Tilleman, illustrator en motion designer in zijn atelier" },
  { src: aboutPhoto3, alt: "Frederic Tilleman, motion designer op zoek naar inspiratie in de natuur" },
  { src: aboutPhoto4, alt: "Frederic Tilleman aan het werk met papieren knipsels en stop-motion illustraties" },
  { src: aboutPhoto5, alt: "Frederic Tilleman maakt stop-motion animatie met peperkoekmannetjes in een winterscène" },
  { src: aboutPhoto6, alt: "Frederic Tilleman filmt een papieren knipsel kustlandschap met vuurtoren" },
  { src: aboutPhoto7, alt: "Frederic Tilleman creëert stop-motion food photography met zwevende hamburger" },
];

const About = () => {
  usePageMeta(
    "Over Frederic Tilleman | Animator & Illustrator",
    "Maak kennis met Frederic Tilleman, Belgische animator en illustrator gespecialiseerd in stop-motion, cut-out en handgetekende beelden.",
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (dx > threshold) {
      setCurrentIndex((i) => (i - 1 + aboutImages.length) % aboutImages.length);
    } else if (dx < -threshold) {
      setCurrentIndex((i) => (i + 1) % aboutImages.length);
    }
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-6 md:pt-10 pb-16 px-6 fade-up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-normal text-black text-center mb-12" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
            Achter de schermen
          </h1>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Foto */}
            <div
              className="lg:w-2/5 shrink-0 relative overflow-hidden touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {aboutImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-opacity duration-700 ${
                    index === 0 ? "" : "absolute inset-0 h-full"
                  } ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                  width={600}
                  height={800}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
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

              <div className="pt-4 flex justify-center lg:justify-start">
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
