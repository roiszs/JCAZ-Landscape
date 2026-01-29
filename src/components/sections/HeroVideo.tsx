"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

type Props = { mp4Src: string };

export function HeroVideo({ mp4Src }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Congelar el primer frame (sin depender de ready para mostrar el botón)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const freezeFirstFrame = () => {
      try {
        v.pause();
        v.currentTime = 0;
      } catch {}
    };

    // Algunos navegadores disparan uno y otros disparan otro
    v.addEventListener("loadeddata", freezeFirstFrame);
    v.addEventListener("loadedmetadata", freezeFirstFrame);

    return () => {
      v.removeEventListener("loadeddata", freezeFirstFrame);
      v.removeEventListener("loadedmetadata", freezeFirstFrame);
    };
  }, []);

  const handlePlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      v.controls = true;     // ✅ botones nativos
      v.muted = false;
      setPlaying(true);
      await v.play();
    } catch {
      v.controls = true;
    }
  };

  return (
    <div className="relative h-56 overflow-hidden rounded-3xl border border-brand-white/10 bg-brand-black md:h-64">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        preload="auto"
        playsInline
      >
        <source src={mp4Src} type="video/mp4" />
      </video>

      {/* Botón Play pequeño (siempre visible antes de reproducir) */}
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-white/90 shadow-lg backdrop-blur-md transition hover:scale-105 active:scale-95">
            <Play className="ml-0.5 h-5 w-5 fill-brand-green text-brand-green" />
          </span>
        </button>
      )}
    </div>
  );
}

