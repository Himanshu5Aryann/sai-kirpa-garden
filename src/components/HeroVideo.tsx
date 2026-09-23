import { useMemo } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
}

function getYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&/]+)/i);
  return match?.[1] ?? "";
}

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoId = useMemo(() => getYouTubeId(src), [src]);
  const embed = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1`
    : "";

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-ink">
      <img src={poster} alt="Sai Kirpa & Garden" className="absolute inset-0 h-full w-full object-cover" />
      {embed && (
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.03]"
          src={embed}
          title="Sai Kirpa & Garden background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
