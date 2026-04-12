import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

interface VimeoLoopProps {
  vimeoId: string;
  title: string;
  className?: string;
}

const VimeoLoop = ({ vimeoId, title, className }: VimeoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new Player(containerRef.current, {
      id: parseInt(vimeoId),
      background: true,
      muted: true,
      autoplay: true,
      loop: false,
      dnt: true,
    });

    playerRef.current = player;

    player.on("timeupdate", (data) => {
      if (data.seconds >= 5) {
        player.setCurrentTime(0);
      }
    });

    return () => {
      player.destroy();
    };
  }, [vimeoId]);

  return (
    <div
      ref={containerRef}
      title={title}
      className={className}
    />
  );
};

export default VimeoLoop;
