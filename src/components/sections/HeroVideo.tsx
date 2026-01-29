"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

type Props = {
  mp4Src: string;
};

export function HeroVideo({ mp4Src }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Preview animado (sin sonido)
    v.muted = true;
    v.play()
      .then(() => {
        setTimeout(() => {
          v.pause();
          v.currentTime = 0;
          setReady(true);
        }, 900); // ~1 segundo
      })
      .catch(() => {});
  }, []);

  const handlePlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      v.muted = false;
      setPlaying(true);
      await v.play();
    } catch {
      v.controls = true;
    }
  };

  return (
    <div className="relative h-56 overflow-hidden rounded-3xl border border-brand-white/10 bg-brand-black/40 md:h-64">
      <video
  ref={videoRef}
  src={mp4Src}
  controls
  playsInline
  className="h-full w-full object-contain bg-black rounded-2xl"
/>



      {!playing && ready && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition hover:bg-black/20"
          aria-label="Play introduction video"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-sm font-extrabold text-brand-white shadow-[0_8px_30px_rgba(15,99,0,0.35)]">
          <Play className="h-4 w-4 fill-brand-white" />
            Play Video
          </span>
        </button>
      )}
    </div>
  );
}

