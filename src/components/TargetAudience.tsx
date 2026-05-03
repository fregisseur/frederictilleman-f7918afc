const paragraphs = [
  "Je werkt in een bibliotheek, cultuurhuis, gemeenschapscentrum of ... en zoekt een workshop voor kinderen of jongeren die vlot in je werking past?",
  "Je wil een activiteit die meer doet dan bezighouden. Deelnemers bedenken, maken en vertellen hun eigen verhaal, en leren spelenderwijs omgaan met beeld, timing en samenwerking.",
  "Je wil kunnen vertrouwen op een vlot verloop. Jij beheert de inschrijvingen, ik breng al het materiaal mee en neem de volledige begeleiding op mij, zodat alles op de dag zelf gestructureerd verloopt.",
];

const TargetAudience = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-6" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
          Voor wie kinderen wil laten creëren
        </h2>
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
          {paragraphs.map((p, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <i className="fi fi-rr-angle-small-down text-primary text-2xl leading-none flex items-center justify-center" />
              </div>
              <p className="text-muted-foreground text-base leading-relaxed pt-2">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
