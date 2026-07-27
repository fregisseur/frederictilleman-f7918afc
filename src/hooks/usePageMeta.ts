import { useEffect } from "react";

/**
 * Sets per-route <title> and <meta name="description"> and restores the
 * previous values on unmount so each page has unique metadata.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    if (meta) meta.setAttribute("content", description.slice(0, 158));

    return () => {
      document.title = prevTitle;
      if (meta) meta.setAttribute("content", prevDesc);
    };
  }, [title, description]);
}