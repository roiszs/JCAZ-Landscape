"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Filter, Maximize2 } from "lucide-react";

type Photo = {
  src: string;
  alt: string;
  category?: string;
};

export default function GalleryClient({ photos }: { photos: Photo[] }) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    photos.forEach((p) => p.category && set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [photos]);

  const [activeCat, setActiveCat] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCat === "All") return photos;
    return photos.filter((p) => p.category === activeCat);
  }, [photos, activeCat]);

  const open = (idx: number) => setOpenIndex(idx);
  const close = () => setOpenIndex(null);

  const prev = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % filtered.length);
  };

  return (
    <>
      {/* Filters (premium) */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-xl border border-brand-white/10 bg-brand-black/30 px-3 py-2 text-xs text-brand-white/80 backdrop-blur">
          <Filter className="h-4 w-4 text-brand-green" />
          Filter
        </span>

        {categories.map((c) => {
          const active = c === activeCat;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCat(c)}
              className={
                active
                  ? "rounded-xl bg-brand-green px-3 py-2 text-xs font-extrabold text-brand-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_rgba(15,99,0,0.22)] hover:bg-brand-green/90"
                  : "rounded-xl border border-brand-white/15 bg-brand-black/30 px-3 py-2 text-xs font-semibold text-brand-white/85 backdrop-blur hover:border-brand-white/30"
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Masonry (premium spacing + break control) */}
      <div className="columns-1 gap-5 space-y-5 sm:columns-2 md:columns-3">
        {filtered.map((p, idx) => (
          <button
            key={`${p.src}-${idx}`}
            type="button"
            onClick={() => open(idx)}
            className="group relative w-full break-inside-avoid overflow-hidden rounded-3xl border border-brand-white/10 bg-brand-white/5 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-brand-white/20 hover:shadow-[0_0_0_1px_rgba(15,99,0,0.25),0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="relative">
              <Image
                src={p.src}
                alt={p.alt}
                width={1400}
                height={1400}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Shine */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              {/* Category badge */}
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-white/15 bg-brand-black/45 px-3 py-1 text-[11px] font-semibold text-brand-white/85 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  {p.category ?? "Project"}
                </span>
              </div>

              {/* Expand hint */}
              <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-white/15 bg-brand-black/45 px-3 py-1 text-[11px] font-semibold text-brand-white/85 backdrop-blur">
                  <Maximize2 className="h-3.5 w-3.5 text-brand-green" />
                  View
                </span>
              </div>

              {/* Bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-2xl border border-brand-white/10 bg-black/45 p-3 backdrop-blur">
                  <p className="text-sm font-extrabold text-brand-white line-clamp-1">{p.alt}</p>
                  <p className="mt-1 text-xs text-brand-white/70">Tap to open full size</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox (premium) */}
      {openIndex !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-xl border border-brand-white/15 bg-brand-black/50 px-3 py-2 text-sm text-brand-white/90 backdrop-blur hover:border-brand-white/30"
          >
            <X className="h-4 w-4 text-brand-green" />
            Close
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-2xl border border-brand-white/15 bg-brand-black/50 p-3 backdrop-blur hover:border-brand-white/30"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-brand-green" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl border border-brand-white/15 bg-brand-black/50 p-3 backdrop-blur hover:border-brand-white/30"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-brand-green" />
          </button>

          <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-brand-white/10 bg-brand-black/60 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
            <div className="relative">
              <Image
                src={filtered[openIndex].src}
                alt={filtered[openIndex].alt}
                width={2200}
                height={1400}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="border-t border-brand-white/10 p-4 md:p-5">
              <p className="text-sm font-extrabold text-brand-white">{filtered[openIndex].category ?? "Project"}</p>
              <p className="mt-1 text-sm text-brand-white/70">{filtered[openIndex].alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
