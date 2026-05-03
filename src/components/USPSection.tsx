const usps = [
  "Eens iets anders dan een standaard creatieve workshop: een ervaring die bijblijft, zonder saaie uitleg vooraf — kinderen zijn meteen aan de slag.",
  "Zichtbaar resultaat: iedereen gaat naar huis met een eigen filmpje.",
  "Professionele begeleiding door een meester in het vak die zijn groep meekrijgt.",
];

const USPSection = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
          Waarom deze workshops werken
        </h2>
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
          {usps.map((text, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <i className="fi fi-rr-angle-small-down text-primary text-2xl leading-none flex items-center justify-center" />
              </div>
              <p className="text-muted-foreground text-base leading-relaxed pt-2">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
