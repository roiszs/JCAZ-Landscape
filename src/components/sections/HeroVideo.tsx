"use client";

import { useRef, useState } from "react";

type Props = {
  mp4Src: string;
  posterSrc?: string;
};

export function HeroVideo({ mp4Src, posterSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      v.muted = false; // queremos sonido
      await v.play();
      setIsPlaying(true);
    } catch {
      // Si el navegador bloquea por alguna razón, mostramos controles para que el usuario lo inicie manualmente
      v.controls = true;
    }
  };

  return (
    <div className="relative mt-3 h-40 overflow-hidden rounded-xl border border-brand-white/10 bg-brand-black/40 md:h-48">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        preload="metadata"
        poster={posterSrc}
        controls={isPlaying}
        playsInline
      >
        <source src={mp4Src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-brand-black/30 hover:bg-brand-black/20"
          aria-label="Play introduction video"
        >
          <span className="rounded-full bg-brand-gold px-6 py-3 font-extrabold text-brand-black">
            ▶ Play Video
          </span>
        </button>
      )}
    </div>
  );
}
