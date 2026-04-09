import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Over <span className="text-primary">mij</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Meer informatie over Frederic Tilleman.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default About;
