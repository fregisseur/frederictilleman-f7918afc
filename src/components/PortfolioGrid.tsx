import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VimeoLoop from "./VimeoLoop";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const PortfolioGrid = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Randomize on each page load. Enforce strict alternation:
  // odd-numbered cells (1,3,5,...) show a still, even-numbered cells (2,4,6,...) show a Vimeo loop.
  const randomizedItems = useMemo(() => {
    const stillsPool = shuffle(portfolioItems.filter((i) => !i.vimeoId));
    const videosPool = shuffle(portfolioItems.filter((i) => !!i.vimeoId));
    const result: { item: PortfolioItem; showVideo: boolean }[] = [];
    let s = 0;
    let v = 0;
    for (let i = 0; i < portfolioItems.length; i++) {
      const wantVideo = i % 2 === 1; // 0-indexed: slots 2,4,6,... → video
      if (wantVideo) {
        if (v < videosPool.length) {
          result.push({ item: videosPool[v++], showVideo: true });
        } else if (s < stillsPool.length) {
          result.push({ item: stillsPool[s++], showVideo: false });
        }
      } else {
        if (s < stillsPool.length) {
          result.push({ item: stillsPool[s++], showVideo: false });
        } else if (v < videosPool.length) {
          // Overflow video item, but render as still to keep the pattern.
          result.push({ item: videosPool[v++], showVideo: false });
        }
      }
    }
    return result;
  }, []);

  const visibleItems = randomizedItems.slice(0, visibleCount);
  const hasMore = visibleCount < randomizedItems.length;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map(({ item, showVideo }, index) => (
          <Link
            key={index}
            to={`/werk/${item.slug}`}
            aria-label={`Bekijk project ${item.client} – ${item.title}`}
            className="portfolio-cell group relative block w-full pb-[100%] overflow-hidden cursor-pointer"
          >
            {/* Thumbnail image */}
            <img
              src={item.image}
              alt={`${item.client} - ${item.title}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
              loading="lazy"
            />

            {/* Vimeo background video – loops first 5 seconds */}
            {showVideo && item.vimeoId && (
              <VimeoLoop
                vimeoId={item.vimeoId}
                title={`${item.client} - ${item.title}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] pointer-events-none z-[1] transition-transform duration-[600ms] ease-out group-hover:scale-110"
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
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, randomizedItems.length))}
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
