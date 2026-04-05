import { Sparkles, Zap, Trophy, UserCheck } from "lucide-react";

const usps = [
  {
    icon: Sparkles,
    title: "Eens iets anders",
    description: "Geen standaard creatieve workshop, maar een ervaring die bijblijft.",
  },
  {
    icon: Zap,
    title: "Meteen actief",
    description: "Geen saaie uitleg vooraf. Kinderen zijn direct aan de slag.",
  },
  {
    icon: Trophy,
    title: "Zichtbaar resultaat",
    description: "Iedereen gaat naar huis met een eigen filmpje.",
  },
  {
    icon: UserCheck,
    title: "Professionele begeleiding",
    description: "Door een meester in het vak die zijn groep meekrijgt.",
  },
];

const USPSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-4">
          Waarom deze workshops <span className="text-primary">werken</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-lg">
          Activiteiten die 'wel oké' zijn, maar waar niemand het een week later nog over heeft? Dit is dat niet.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className="group bg-card rounded-lg p-8 text-center transition-shadow duration-300"
              style={{
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <usp.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">{usp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
