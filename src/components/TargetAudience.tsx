const paragraphs = [
  "Werk je in een bibliotheek, cultuurhuis of gemeenschapscentrum en zoek je een workshop die gewoon vlot loopt binnen je werking? Met een standaardlokaal en een projectiescherm ben je vertrokken, zonder gedoe of voorbereiding.",
  "Je wil geen extra werk op je bord. Jij regelt de inschrijvingen, ik breng al het materiaal mee en neem de volledige begeleiding en uitvoering op mij.",
  "Op de dag zelf wil je dat alles vanzelf loopt. Ik zorg voor structuur en een rustig verloop, zodat jij er geen omkijken naar hebt.",
];

const TargetAudience = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-10" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
          Perfect voor jouw organisatie
        </h2>
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
