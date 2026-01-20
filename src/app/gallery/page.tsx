import Image from "next/image";
import Link from "next/link";
import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Gallery | JCAZ Landscape",
  description: "Recent landscape and hardscape projects by JCAZ Landscape.",
};

const PHOTOS = [
  {
    src: "/images/gallery/01.png",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/28.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/29.png",
    alt: "Travertine finish patio",
    category: "Travertine",
  },
  {
    src: "/images/gallery/30.png",
    alt: "Travertine finish patio",
    category: "Travertine",
  },
  {
    src: "/images/gallery/31.png",
    alt: "Travertine finish patio",
    category: "Travertine",
  },
  {
    src: "/images/gallery/32.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/02.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/03.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/04.png",
    alt: "Artificial turf installation",
    category: "Turf",
  },
  {
    src: "/images/gallery/05.png",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/06.png",
    alt: "Hardscape walkway",
    category: "Hardscaping",
  },
  {
    src: "/images/gallery/07.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/08.png",
    alt: "Artificial turf installation",
    category: "Turf",
  },
  {
    src: "/images/gallery/09.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/10.png",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/11.png",
    alt: "Artificial turf installation",
    category: "Turf",
  },
  {
    src: "/images/gallery/12.png",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/13.png",
    alt: "Artificial turf installation",
    category: "Turf",
  },
  {
    src: "/images/gallery/14.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/15.png",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/16.png",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/17.png",
    alt: "Artificial turf installation",
    category: "Turf",
  },
  {
    src: "/images/gallery/18.png",
    alt: "Hardscape walkway",
    category: "Hardscaping",
  },
  {
    src: "/images/gallery/19.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery/20.png",
    alt: "Artificial turf installation",
    category: "Turf",
  },
  {
    src: "/images/gallery/21.png",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/22.png",
    alt: "Artificial turf installation",
    category: "Turf",
  },
  {
    src: "/images/gallery/23.png",
    alt: "Hardscape walkway",
    category: "Hardscaping",
  },
  {
    src: "/images/gallery/24.png",
    alt: "Hardscape walkway",
    category: "Hardscaping",
  },
  {
    src: "/images/gallery/25.png",
    alt: "Landscape cleanup / maintenance",
    category: "Maintenance",
  },
  {
    src: "/images/gallery/26.png",
    alt: "Paver patio project in Phoenix",
    category: "Pavers",
  },
  {
    src: "/images/gallery/27.png",
    alt: "Outdoor living / fire pit area",
    category: "Outdoor Living",
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

      </div>
    </main>
  );
}
