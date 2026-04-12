import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

interface VimeoLoopProps {
  vimeoId: string;
  title: string;
  className?: string;
}

const VimeoLoop = ({ vimeoId, title, className }: VimeoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create iframe manually to preserve exact sizing/positioning
    const iframe = document.createElement("iframe");
    iframe.src = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&muted=1&loop=0&dnt=1`;
    iframe.allow = "autoplay; fullscreen";
    iframe.title = title;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.loading = "lazy";
    containerRef.current.appendChild(iframe);

    const player = new Player(iframe);

    player.on("timeupdate", (data) => {
      if (data.seconds >= 5) {
        player.setCurrentTime(0);
      }
    });

    return () => {
      player.destroy();
    };
  }, [vimeoId, title]);

  return (
    <div
      ref={containerRef}
      className={className}
    />
  );
};

export default VimeoLoop;
