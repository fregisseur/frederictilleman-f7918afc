const usps = [
  {
    iconClass: "fi fi-rr-magic-wand",
    title: "Een ervaring die bijblijft",
    description:
      "Eens iets anders dan een standaard creatieve workshop: een ervaring die bijblijft, zonder saaie uitleg vooraf. De kinderen gaan meteen aan de slag.",
  },
  {
    iconClass: "fi fi-rr-clapperboard-play",
    title: "Zichtbaar resultaat",
    description: "Iedereen gaat naar huis met een eigen filmpje.",
  },
  {
    iconClass: "fi fi-rr-crown",
    title: "Professionele begeleiding",
    description:
      "Een meester in het vak die zijn groep moeiteloos meekrijgt.",
  },
];

const USPSection = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
          Waarom deze workshops werken
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {usps.map((item) => (
            <div
              key={item.title}
              className="group bg-background p-8 text-center border border-border transition-colors duration-300 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <i className={`${item.iconClass} text-primary text-2xl leading-none flex items-center justify-center`} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
