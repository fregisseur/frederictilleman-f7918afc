import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "WERK", href: "/" },
  { label: "WORKSHOPS", href: "/workshops" },
  { label: "OVER MIJ", href: "/over-mij" },
  { label: "CONTACT", href: "/contact" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="py-10 flex flex-col items-center">
      <Link to="/" className="mb-8">
        <span className="text-2xl font-bold tracking-tight text-foreground">
          Frederic Tilleman
        </span>
      </Link>
      
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
          <Link
            key={link.label}
            to={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-sm tracking-widest transition-colors duration-300 hover:text-primary ${
              location.pathname === link.href
                ? "text-accent font-bold"
                : "text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
