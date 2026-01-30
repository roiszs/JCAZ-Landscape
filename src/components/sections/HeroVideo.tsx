"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

type Props = {
  mp4Src: string;
  posterSrc: string; // <-- hazlo REQUIRED para evitar negro en iOS
  className?: string; // para controlar tamaño desde afuera
};

export function HeroVideo({ mp4Src, posterSrc, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  // “Warm up” para intentar pintar un frame (fallback extra)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => {
      // OJO: iOS a veces ignora esto, pero ayuda en varios casos
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
      // Para que arranque con sonido: requiere gesto del usuario (este click cuenta)
      v.muted = false;
      v.volume = 1;
      await v.play();
      setIsPlaying(true);
      setSoundOn(true);
    } catch {
      // Si algún navegador bloquea, mostramos controles nativos
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
        // Contenedor “premium” y centrado
        "relative overflow-hidden rounded-3xl border border-brand-white/10 bg-brand-black/40",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(0,0,0,0.55)]",
        className,
      ].join(" ")}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        preload="metadata"
        poster={posterSrc}
        playsInline
        controls={isPlaying} // cuando ya está play, deja los controles
      >
        <source src={mp4Src} type="video/mp4" />
      </video>

      {/* Overlay (antes de play) */}
      {!isPlaying && (
        <div className="absolute inset-0">
          {/* oscurecido suave (NO negro pesado) */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Botón play (más chico, premium) */}
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 grid place-items-center"
            aria-label="Play introduction video"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-white px-5 py-3 text-sm font-extrabold text-brand-black shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-[1.02] active:scale-[0.99] transition">
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-brand-green">
                <Play className="h-4 w-4 text-brand-green" />
              </span>
              Play Video
            </span>
          </button>

          {/* hint de sonido */}
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-brand-white/15 bg-brand-black/40 px-3 py-1 text-[11px] text-brand-white/80 backdrop-blur">
            Tap to play with sound
          </div>
        </div>
      )}

      {/* Botón sonido (cuando ya está reproduciéndose) */}
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
