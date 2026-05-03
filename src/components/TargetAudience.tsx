const audiences = [
  {
    age: "7–12 jaar",
    label: "Kinderen",
    description: "Die niet stil kunnen zitten",
  },
  {
    age: "12–17 jaar",
    label: "Jongeren",
    description: "Die denken dat ze niet creatief zijn (spoiler: wel dus)",
  },
];

const TargetAudience = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-black text-center mb-10" style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}>
          Voor wie werkt dit?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <div
              key={a.age}
              className="bg-background rounded-lg p-8 border border-border"
            >
              <span className="text-primary font-extrabold text-2xl">{a.age}</span>
              <h3 className="font-bold text-lg mt-2 text-foreground">{a.label}</h3>
              <p className="text-muted-foreground mt-2">{a.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground italic">
          Geen voorkennis nodig. Enkel goesting om iets te maken.
        </p>
      </div>
    </section>
  );
};

export default TargetAudience;
