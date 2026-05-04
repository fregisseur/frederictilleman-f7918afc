import heroImage from "@/assets/hero-workshop.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={heroImage}
        alt="Workshop stop-motion animatie met kinderen"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight max-w-4xl fade-up">
          Workshops waar kinderen
          <br />
          <span className="text-primary">weken over praten</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-10 font-light fade-up" style={{ animationDelay: "0.15s" }}>
          In een paar uur maken deelnemers hun eigen animatie- of kortfilm. Van nul. Met hun eigen handen.
        </p>
        <a
          href="#workshops"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-accent hover:text-accent-foreground fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Bekijk de workshops
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
