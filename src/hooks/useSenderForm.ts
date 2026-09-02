import { useEffect } from "react";

/**
 * Sender's universal.js rendert ingesloten formulieren enkel bij het laden van
 * de pagina. In een SPA bestaat de container-div op dat moment nog niet, dus
 * vragen we hier expliciet om een (her)render zodra het element gemount is.
 */
export function useSenderForm() {
  useEffect(() => {
    let cancelled = false;

    const render = () => {
      if (cancelled) return;
      const forms = (window as unknown as { senderForms?: { render: (target: string) => void } }).senderForms;
      forms?.render("all");
    };

    if ((window as unknown as { senderFormsLoaded?: boolean }).senderFormsLoaded) {
      render();
    } else {
      window.addEventListener("onSenderFormsLoaded", render);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("onSenderFormsLoaded", render);
    };
  }, []);
}
