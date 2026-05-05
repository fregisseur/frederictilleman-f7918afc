import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoGif from "@/assets/images/frederic_tilleman2.gif";

const BLUE = "#1b45da";
const YELLOW = "hsl(47 87% 64%)";

const getAccent = (pathname: string) => {
  if (pathname === "/contact") return BLUE;
  if (pathname === "/") return YELLOW;
  return undefined; // default red (primary)
};

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WORKSHOPS", href: "/workshops" },
  { label: "OVER MIJ", href: "/over-mij" },
  { label: "CONTACT", href: "/contact" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const accent = getAccent(location.pathname);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative py-10 flex flex-col items-center">
        <Link to="/" className="mb-2">
          <img
            src={logoGif}
            alt="Frederic Tilleman"
            className="h-8 md:h-11 w-auto"
          />
        </Link>

        {/* Horizontal nav */}
        <nav className="mt-4 hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                style={accent ? (active ? { color: accent, ["--nav-hover" as never]: accent } : { ["--nav-hover" as never]: accent }) : undefined}
                className={`nav-wiggle text-sm tracking-widest transition-colors duration-300 ${
                  active
                    ? accent
                      ? "font-bold [&:hover]:!text-[var(--nav-hover)]"
                      : "text-primary font-bold"
                    : `text-foreground ${accent ? "[&:hover]:!text-[var(--nav-hover)]" : "hover:text-primary"}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger top-right */}
        <button
          className="fixed top-6 right-6 md:absolute md:top-10 md:right-10 z-[60] text-foreground hover:text-primary transition-colors"
          onClick={() => setMenuOpen(true)}
          aria-label="Menu openen"
        >
          <Menu size={32} strokeWidth={2} />
        </button>
      </header>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-8 right-6 md:top-10 md:right-10 text-foreground hover:text-primary transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Menu sluiten"
        >
          <X size={32} strokeWidth={2} />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={accent ? (active ? { color: accent, ["--nav-hover" as never]: accent } : { ["--nav-hover" as never]: accent }) : undefined}
                className={`text-2xl md:text-3xl tracking-widest transition-colors duration-300 ${
                  active
                    ? accent
                      ? "font-bold [&:hover]:!text-[var(--nav-hover)]"
                      : "text-primary font-bold"
                    : `text-foreground ${accent ? "[&:hover]:!text-[var(--nav-hover)]" : "hover:text-primary"}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default SiteHeader;
