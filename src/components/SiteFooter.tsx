import { Instagram, Mail, Video } from "lucide-react";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        <p
          className="text-2xl md:text-3xl text-foreground"
          style={{ fontFamily: "'Inria Serif', serif", fontStyle: "italic" }}
        >
          Einde! ;)
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:hello@frederictilleman.be"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="E-mail"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/frederictilleman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://vimeo.com/user81607434"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Vimeo"
          >
            <Video className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {year} Frederic Tilleman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
