import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Mijn <span className="text-primary">werk</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Een overzicht van mijn projecten en realisaties.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Work;
