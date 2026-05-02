import { useState } from "react";
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

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
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
    const subject = encodeURIComponent(`Bericht via website van ${result.data.name}`);
    const body = encodeURIComponent(
      `Naam: ${result.data.name}\nE-mail: ${result.data.email}\nTelefoon: ${result.data.phone || "-"}\n\n${result.data.message}`
    );
    window.location.href = `mailto:hello@frederictilleman.be?subject=${subject}&body=${body}`;
    toast({ title: "Bedankt!", description: "Je e-mailprogramma opent met je bericht." });
  };

  const inputBase =
    "w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-[var(--contact-accent)] transition-colors text-base";

  return (
    <div className="min-h-screen bg-background" style={{ ["--contact-accent" as never]: ACCENT }}>
      <SiteHeader />

      <section className="py-12 md:py-20 px-6">
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
                <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold mb-2 text-foreground">
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
                <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold mb-2 text-foreground">
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
                <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-bold mb-2 text-foreground">
                  Telefoon <span className="text-muted-foreground normal-case font-normal tracking-normal">(optioneel)</span>
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
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-bold mb-2 text-foreground">
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
                  className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  Verstuur bericht
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
