import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import NotFound from "./NotFound";
import { portfolioItems, getPortfolioItem } from "@/data/portfolio";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getPortfolioItem(slug) : undefined;

  const index = useMemo(
    () => (item ? portfolioItems.findIndex((p) => p.slug === item.slug) : -1),
    [item],
  );
  const prev = index > 0 ? portfolioItems[index - 1] : portfolioItems[portfolioItems.length - 1];
  const next = index >= 0 && index < portfolioItems.length - 1 ? portfolioItems[index + 1] : portfolioItems[0];

  const gallery = useMemo(() => {
    if (!item) return [] as string[];
    if (item.images && item.images.length > 0) return item.images;
    return [item.heroImage ?? item.image];
  }, [item]);

  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    setCarouselIndex(0);
  }, [slug]);
  useEffect(() => {
    if (gallery.length <= 1) return;
    const t = setInterval(
      () => setCarouselIndex((i) => (i + 1) % gallery.length),
      4500,
    );
    return () => clearInterval(t);
  }, [gallery.length]);

  // SEO
  useEffect(() => {
    if (!item) return;
    const prevTitle = document.title;
    document.title = `${item.client} – ${item.title} | Frederic Tilleman`;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    if (meta && item.description) {
      meta.setAttribute("content", item.description.slice(0, 158));
    }
    return () => {
      document.title = prevTitle;
      if (meta) meta.setAttribute("content", prevDesc);
    };
  }, [item]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!item) return <NotFound />;

  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://www.frederictilleman.be";
  const imageUrl = `${origin}${item.heroImage ?? item.image}`;
  const detailUrl = `${origin}/werk/${item.slug}`;
  const schema: Record<string, unknown> = item.vimeoId
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: item.detailTitle ?? `${item.client} - ${item.title}`,
        description: item.description ?? `${item.client} - ${item.title}`,
        thumbnailUrl: imageUrl,
        embedUrl: `https://player.vimeo.com/video/${item.vimeoId}`,
        uploadDate: "2024-01-01",
        url: detailUrl,
        creator: { "@type": "Person", name: "Frederic Tilleman" },
        keywords: item.tags?.join(", "),
      }
    : {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: item.detailTitle ?? `${item.client} - ${item.title}`,
        description: item.description ?? `${item.client} - ${item.title}`,
        image: imageUrl,
        url: detailUrl,
        creator: { "@type": "Person", name: "Frederic Tilleman" },
        keywords: item.tags?.join(", "),
      };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <JsonLd id={`ld-work-${item.slug}`} data={schema} />

      {/* Hero: video or carousel */}
      <section className="px-6 pt-4">
        <div className="max-w-5xl mx-auto">
          {item.vimeoId ? (
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://player.vimeo.com/video/${item.vimeoId}?title=0&byline=0&portrait=0`}
                title={`${item.client} – ${item.title}`}
                className="absolute inset-0 w-full h-full"
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full bg-background">
              <img
                key={carouselIndex}
                src={gallery[carouselIndex]}
                alt={`${item.client} – ${item.title} ${carouselIndex + 1}`}
                className="block w-full h-auto"
                loading="eager"
              />
              {gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCarouselIndex(i)}
                      aria-label={`Toon beeld ${i + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        i === carouselIndex ? "bg-background" : "bg-background/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1
              className="text-3xl md:text-5xl font-normal text-foreground mb-8"
              style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}
            >
              {item.detailTitle ?? item.title}
            </h1>
            {item.description && (
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            )}

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs uppercase tracking-widest border border-border px-3 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            {item.credits && item.credits.length > 0 && (
              <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Credits
                </h2>
                <ul className="space-y-3">
                  {item.credits.map((c) => (
                    <li key={c.label + c.value} className="text-foreground">
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                        {c.label}
                      </span>
                      {c.href ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <span className="font-bold">{c.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto border-t border-border pt-8">
          <div className="flex justify-center mb-8">
            <Link
              to="/#eerder-werk"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} /> Terug naar home
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <Link
            to={`/werk/${prev.slug}`}
            className="group flex items-center gap-3 text-left"
          >
            <ArrowLeft
              size={20}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Vorig project
              </p>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                {prev.client} - {prev.title}
              </p>
            </div>
          </Link>
          <Link
            to={`/werk/${next.slug}`}
            className="group flex items-center gap-3 text-right justify-end"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Volgend project
              </p>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                {next.client} - {next.title}
              </p>
            </div>
            <ArrowRight
              size={20}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
          </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default WorkDetail;