import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "WORK", href: "#" },
  { label: "WORKSHOPS", href: "#", active: true },
  { label: "ABOUT", href: "#" },
  { label: "CONTACT", href: "mailto:hello@frederictilleman.be" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-10 flex flex-col items-center">
      <a href="#" className="mb-8">
        <span className="text-2xl font-bold tracking-tight text-foreground">
          Frederic Tilleman
        </span>
      </a>
      
      {/* Mobile menu button */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <nav
        className={`flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0 items-center transition-all ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-sm tracking-widest transition-colors duration-300 hover:text-primary hover:animate-[wiggle_0.3s_ease-in-out] ${
              link.active
                ? "text-accent font-bold"
                : "text-foreground"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
