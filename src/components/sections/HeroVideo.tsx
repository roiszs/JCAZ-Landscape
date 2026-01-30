"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

type Props = {
  mp4Src: string;
  posterSrc: string; // requerido para iOS
  className?: string;
};

export function HeroVideo({ mp4Src, posterSrc, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  // Warm-up para iOS (intenta pintar un frame)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => {
      try {
        v.currentTime = 0.01;
      } catch {}
    };

    v.addEventListener("loadedmetadata", onLoaded);
    return () => v.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  const handlePlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      v.muted = false;
      v.volume = 1;
      await v.play();
      setIsPlaying(true);
      setSoundOn(true);
    } catch {
      v.controls = true;
    }
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setSoundOn(!v.muted);
  };

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-brand-white/10 bg-brand-black/40",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(0,0,0,0.55)]",
        className,
      ].join(" ")}
    >
      {/* VIDEO (sin zoom) */}
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        preload="metadata"
        playsInline
        controls={isPlaying}
      >
        <source src={mp4Src} type="video/mp4" />
      </video>

      {/* POSTER + PLAY OVERLAY */}
      {!isPlaying && (
        <div className="absolute inset-0">
          {/* Poster con zoom */}
          <Image
            src={posterSrc}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Overlay suave */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Botón Play */}
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 grid place-items-center"
            aria-label="Play introduction video"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-white px-5 py-3 text-sm font-extrabold text-brand-black shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:scale-[1.03] active:scale-[0.98]">
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-brand-green">
                <Play className="h-4 w-4 text-brand-green" />
              </span>
              Play Video
            </span>
          </button>

          {/* Hint sonido */}
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-brand-white/15 bg-brand-black/40 px-3 py-1 text-[11px] text-brand-white/80 backdrop-blur">
            Tap to play with sound
          </div>
        </div>
      )}

      {/* Botón sonido (cuando ya está reproduciendo) */}
      {isPlaying && (
        <button
          type="button"
          onClick={toggleSound}
          className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-brand-white/15 bg-brand-black/45 px-3 py-2 text-xs font-semibold text-brand-white/90 backdrop-blur hover:border-brand-white/30"
          aria-label="Toggle sound"
        >
          {soundOn ? (
            <Volume2 className="h-4 w-4 text-brand-green" />
          ) : (
            <VolumeX className="h-4 w-4 text-brand-green" />
          )}
          Sound
        </button>
      )}
    </div>
  );
}
