import { useState, useEffect } from "react";
import { z } from "zod";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useToast } from "@/hooks/use-toast";
import postduif from "@/assets/postduif.gif";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "Naam is verplicht" }).max(100),
  email: z.string().trim().email({ message: "Geen geldig e-mailadres" }).max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().nonempty({ message: "Bericht is verplicht" }).max(2000),
});

const ACCENT = "#1b45da";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdwlqnd";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone || "",
          message: result.data.message,
          _subject: `Bericht via website van ${result.data.name}`,
        }),
      });
      if (!response.ok) throw new Error("Verzenden mislukt");
      setForm({ name: "", email: "", phone: "", message: "" });
      toast({ title: "Bedankt voor je bericht!", description: "Je hoort snel van mij." });
    } catch {
      toast({
        title: "Oeps, er ging iets mis",
        description: "Probeer het opnieuw of mail rechtstreeks naar hello@frederictilleman.be",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-[var(--contact-accent)] transition-colors text-base";

  return (
    <div className="min-h-screen bg-background" style={{ ["--contact-accent" as never]: ACCENT }}>
      <SiteHeader />

      <section className="pt-6 md:pt-10 pb-12 md:pb-20 px-6 fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className="text-3xl md:text-4xl font-normal text-black mb-4"
              style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}
            >
              Let's get <span style={{ color: ACCENT }}>started</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Vertel me over je idee, vraag of project.
              <br />Ik denk graag met je mee en ben altijd bereikbaar.
            </p>
          </div>

          <div className="max-w-xl mx-auto flex flex-col items-center">
            {/* Postduif */}
            <div className="flex justify-center mb-8">
              <img
                src={postduif}
                alt="Postduif met envelop"
                className="w-48 md:w-64 h-auto"
              />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 w-full" noValidate>
              <div>
                <label htmlFor="name" className="block text-base mb-2 text-muted-foreground leading-relaxed">
                  Naam
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputBase}
                  maxLength={100}
                  required
                />
                {errors.name && <p className="text-xs mt-1" style={{ color: ACCENT }}>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-base mb-2 text-muted-foreground leading-relaxed">
                  E-mailadres
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputBase}
                  maxLength={255}
                  required
                />
                {errors.email && <p className="text-xs mt-1" style={{ color: ACCENT }}>{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-base mb-2 text-muted-foreground leading-relaxed">
                  Telefoon <span className="text-muted-foreground">(optioneel)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputBase}
                  maxLength={30}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base mb-2 text-muted-foreground leading-relaxed">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputBase} resize-none`}
                  maxLength={2000}
                  required
                />
                {errors.message && <p className="text-xs mt-1" style={{ color: ACCENT }}>{errors.message}</p>}
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: ACCENT }}
                >
                  {submitting ? "Versturen..." : "Verstuur bericht"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;
