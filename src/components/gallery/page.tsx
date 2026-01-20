import Image from "next/image";
import Link from "next/link";
import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Gallery | JCAZ Landscape",
  description: "Recent landscape and hardscape projects by JCAZ Landscape.",
};

const PHOTOS = [
  {
    src: "/images/gallery/01.jpg",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/02.jpg",
    alt: "Artificial turf installation",
    category: "Turf",
  },
  {
    src: "/images/gallery/03.jpg",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/04.jpg",
    alt: "Hardscape walkway",
    category: "Hardscaping",
  },
  {
    src: "/images/gallery/05.jpg",
    alt: "Travertine finish patio",
    category: "Travertine",
  },
  {
    src: "/images/gallery/06.jpg",
    alt: "Landscape cleanup / maintenance",
    category: "Maintenance",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold md:text-4xl">Gallery</h1>
            <p className="mt-2 text-brand-white/75">
              Recent projects by JCAZ. Tap any photo to view full size.
            </p>
          </div>

          <Link
            href="/#contact"
            className="rounded-xl bg-brand-green px-4 py-2 text-sm font-extrabold text-brand-white hover:bg-brand-green/90"
          >
            Free Estimate
          </Link>
        </div>

        <div className="mt-8">
          <GalleryClient photos={PHOTOS} />
        </div>

        <p className="mt-10 text-xs text-brand-white/60">
          Tip: keep image filenames simple (01.jpg, 02.jpg, etc.) and upload optimized photos for faster loading.
        </p>
      </div>
    </main>
  );
}
