import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
const logoGif = "/images/site/frederic_tilleman2.gif";

const BLUE = "var(--header-contact-accent)";
const YELLOW = "hsl(var(--accent))";

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
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const accent = getAccent(location.pathname);

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    headerRef.current?.style.setProperty("--header-scroll", "0px");
  }, [location.pathname]);

  useEffect(() => {
    const updateScroll = () => {
      headerRef.current?.style.setProperty("--header-scroll", `${Math.max(0, window.scrollY)}px`);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="site-header-space" aria-hidden="true" />
      <header ref={headerRef} className="site-header fixed inset-x-0 top-0 z-50">
        <div className="relative h-full w-full">
          <Link to="/" className="site-header-logo">
            <img
              src={logoGif}
              alt="Frederic Tilleman"
              className="h-8 sm:h-11 w-auto max-w-none"
            />
          </Link>

          {/* Horizontal nav */}
          <nav aria-label="Hoofdnavigatie" className="site-header-nav hidden md:flex items-center gap-8">
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

          {/* Hamburger (mobiel) */}
          <Button
            variant="ghost"
            className="site-header-menu md:hidden h-auto rounded-none p-0 text-sm font-normal tracking-widest text-foreground hover:bg-transparent hover:text-primary"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu openen"
            aria-expanded={menuOpen}
            aria-controls="fullscreen-menu"
          >
            menu
          </Button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <div
        id="fullscreen-menu"
        ref={(element) => {
          if (element) element.inert = !menuOpen;
        }}
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-8 right-6 md:top-10 md:right-10 text-foreground hover:text-primary transition-colors [&_svg]:size-8"
          onClick={() => setMenuOpen(false)}
          aria-label="Menu sluiten"
        >
          <X size={32} strokeWidth={2} />
        </Button>

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
