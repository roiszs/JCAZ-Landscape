"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

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
      {/* Filters */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-xl border border-brand-white/10 bg-brand-white/5 px-3 py-2 text-xs text-brand-white/80">
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
                  ? "rounded-xl bg-brand-green px-3 py-2 text-xs font-extrabold text-brand-white hover:bg-brand-green/90"
                  : "rounded-xl border border-brand-white/15 bg-brand-black/30 px-3 py-2 text-xs font-semibold text-brand-white/85 hover:border-brand-white/30"
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Masonry columns */}
      <div className="columns-2 gap-4 space-y-4 md:columns-3">
        {filtered.map((p, idx) => (
          <button
            key={p.src}
            type="button"
            onClick={() => open(idx)}
            className="group relative w-full overflow-hidden rounded-2xl border border-brand-white/10 bg-brand-white/5 text-left hover:border-brand-white/20"
          >
            <div className="relative w-full">
              <Image
                src={p.src}
                alt={p.alt}
                width={1200}
                height={1600}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-xs font-semibold text-brand-white/90">{p.category ?? "Project"}</p>
              <p className="mt-0.5 text-[11px] text-brand-white/70 line-clamp-2">{p.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-xl border border-brand-white/15 bg-brand-black/40 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
          >
            <X className="h-4 w-4 text-brand-green" />
            Close
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-2xl border border-brand-white/15 bg-brand-black/40 p-3 text-brand-white/90 hover:border-brand-white/30"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-brand-green" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl border border-brand-white/15 bg-brand-black/40 p-3 text-brand-white/90 hover:border-brand-white/30"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-brand-green" />
          </button>

          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-brand-white/10 bg-brand-black/60">
            <div className="relative">
              <Image
                src={filtered[openIndex].src}
                alt={filtered[openIndex].alt}
                width={1600}
                height={1200}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="border-t border-brand-white/10 p-4">
              <p className="text-sm font-extrabold text-brand-white">
                {filtered[openIndex].category ?? "Project"}
              </p>
              <p className="mt-1 text-sm text-brand-white/70">{filtered[openIndex].alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
