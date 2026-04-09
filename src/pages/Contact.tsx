import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            <span className="text-primary">Contact</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-8">
            Neem gerust contact op voor vragen of samenwerkingen.
          </p>
          <a
            href="mailto:hello@frederictilleman.be"
            className="btn-primary"
          >
            Stuur een e-mail
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Contact;
