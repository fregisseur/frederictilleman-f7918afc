import { useEffect } from "react";

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
};

/**
 * Injects a JSON-LD <script> tag into <head> for structured data (SEO).
 * Cleans up on unmount so per-page schemas don't leak between routes.
 */
const JsonLd = ({ data, id }: JsonLdProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    if (id) script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [data, id]);

  return null;
};

export default JsonLd;