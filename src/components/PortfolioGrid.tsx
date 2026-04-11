import { useState } from "react";

interface PortfolioItem {
  client: string;
  title: string;
  image: string;
  vimeoId?: string;
}

const portfolioItems: PortfolioItem[] = [
  { client: "Birth Card", title: "Jack", image: "https://frederictilleman.be/images/jack_SQ.jpg" },
  { client: "Unizo", title: "Doenizo met Unizo", image: "https://frederictilleman.be/images/doenizo_met_unizo.png", vimeoId: "691830931" },
  { client: "Ars Musica", title: "Urban Nature", image: "https://frederictilleman.be/images/urban_nature.png" },
  { client: "Woestijnvis", title: "De Slimste Mens ter Wereld", image: "https://frederictilleman.be/images/de_slimste_mens_ter_wereld.png", vimeoId: "235688904" },
  { client: "Blink", title: "Behoeften van Kinderen", image: "https://frederictilleman.be/images/behoeften_SQ.jpg" },
  { client: "Trixie", title: "Mealtime Mr. Shark", image: "https://frederictilleman.be/images/mealtime.png", vimeoId: "1095973996" },
  { client: "Ket & Doc", title: "Hannah & de Krokodil", image: "https://frederictilleman.be/images/hannah_en_de_krokodil.png" },
  { client: "Danette", title: "Fruit Ninja", image: "https://frederictilleman.be/images/fruit_ninja.png", vimeoId: "1031126969" },
  { client: "Vandemoortele", title: "Mother's Day", image: "https://frederictilleman.be/images/mothers_day.png" },
  { client: "Greenpeace", title: "Save The Arctic", image: "https://frederictilleman.be/images/save_the_arctic.png", vimeoId: "65507308" },
  { client: "Willux", title: "Monniken", image: "https://frederictilleman.be/images/monniken_SQ.jpg" },
  { client: "Trixie", title: "Mr. Lion", image: "https://frederictilleman.be/images/mr_lion.png", vimeoId: "872509738" },
  { client: "Eneco", title: "Comfort Bonus", image: "https://frederictilleman.be/images/comfort_bonus.png" },
  { client: "Stoffels Tomaten", title: "Toma'Shake", image: "https://frederictilleman.be/images/tomashake.png", vimeoId: "857826863" },
  { client: "Aesaert", title: "Lederworkshop", image: "https://frederictilleman.be/images/lederworkshop.png" },
  { client: "Joris Sweets", title: "Freestyle", image: "https://frederictilleman.be/images/freestyle.png", vimeoId: "886071911" },
  { client: "Libelle", title: "Winterfair", image: "https://frederictilleman.be/images/winterfair.png" },
  { client: "Stad Antwerpen", title: "Ronde van Vlaanderen", image: "https://frederictilleman.be/images/ronde_van_vlaanderen.png", vimeoId: "211161422" },
  { client: "Brussels Airport", title: "Routes World 2018", image: "https://frederictilleman.be/images/routes_world_2018.png" },
  { client: "JBC", title: "Ooit was ik een fles", image: "https://frederictilleman.be/images/ooit_was_ik_een_fles.png", vimeoId: "679035077" },
  { client: "Quarantekening", title: "Raamtekening", image: "https://frederictilleman.be/images/raamtekening.png" },
  { client: "Rode Kruis Vlaanderen", title: "Hulptips", image: "https://frederictilleman.be/images/hulptips.png", vimeoId: "314500806" },
  { client: "Zonen09", title: "Stoffen en Patronen", image: "https://frederictilleman.be/images/stoffen_en_patronen.png" },
  { client: "VVSG", title: "Wat is Blink", image: "https://frederictilleman.be/images/wat_is_blink.png", vimeoId: "1053053841" },
];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const PortfolioGrid = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleItems = portfolioItems.slice(0, visibleCount);
  const hasMore = visibleCount < portfolioItems.length;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="portfolio-cell group relative w-full pb-[100%] overflow-hidden cursor-pointer"
          >
            {/* Thumbnail image */}
            <img
              src={item.image}
              alt={`${item.client} - ${item.title}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
              loading="lazy"
            />

            {/* Vimeo background video */}
            {item.vimeoId && (
              <iframe
                src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&autoplay=1&muted=1&loop=1&dnt=1#t=0s`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] pointer-events-none z-[1] transition-transform duration-[600ms] ease-out group-hover:scale-110"
                allow="autoplay; fullscreen"
                loading="lazy"
                title={`${item.client} - ${item.title}`}
              />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]" />

            {/* Title on hover */}
            <div className="absolute inset-0 flex items-center justify-center z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="text-center text-foreground text-lg leading-tight max-w-[70%]">
                <strong>{item.client}</strong>
                <br />
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, portfolioItems.length))}
            className="bg-accent text-accent-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            Toon meer
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
