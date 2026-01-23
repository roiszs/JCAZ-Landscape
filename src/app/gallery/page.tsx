import Link from "next/link";
import GalleryClient from "./GalleryClient";
import BrandBackground from "@/components/layout/BrandBackground";

export const metadata = {
  title: "Gallery | JCAZ Landscape",
  description: "Recent landscape and hardscape projects by JCAZ Landscape.",
};

const LOCATION = "Phoenix, AZ";
const PHONE_DISPLAY = "480-227-7319";
const EMAIL = "jcazlandscape@yahoo.com";
const INSTAGRAM = "https://www.instagram.com/jcarizonalandscape/";
const FACEBOOK = "https://www.facebook.com/100083666319172/";

const PHOTOS = [
  { src: "/images/gallery/01.png", alt: "Paver patio project in Phoenix", category: "Pavers" },
  { src: "/images/gallery/28.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
  { src: "/images/gallery/29.png", alt: "Travertine finish patio", category: "Travertine" },
  { src: "/images/gallery/30.png", alt: "Travertine finish patio", category: "Travertine" },
  { src: "/images/gallery/31.png", alt: "Travertine finish patio", category: "Travertine" },
  { src: "/images/gallery/32.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
  { src: "/images/gallery/02.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
  { src: "/images/gallery/03.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
  { src: "/images/gallery/04.png", alt: "Artificial turf installation", category: "Turf" },
  { src: "/images/gallery/05.png", alt: "Paver patio project in Phoenix", category: "Pavers" },
  { src: "/images/gallery/06.png", alt: "Hardscape walkway", category: "Hardscaping" },
  { src: "/images/gallery/07.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
  { src: "/images/gallery/08.png", alt: "Artificial turf installation", category: "Turf" },
  { src: "/images/gallery/09.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
  { src: "/images/gallery/10.png", alt: "Paver patio project in Phoenix", category: "Pavers" },
  { src: "/images/gallery/11.png", alt: "Artificial turf installation", category: "Turf" },
  { src: "/images/gallery/12.png", alt: "Paver patio project in Phoenix", category: "Pavers" },
  { src: "/images/gallery/13.png", alt: "Artificial turf installation", category: "Turf" },
  { src: "/images/gallery/14.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
  { src: "/images/gallery/15.png", alt: "Paver patio project in Phoenix", category: "Pavers" },
  { src: "/images/gallery/16.png", alt: "Paver patio project in Phoenix", category: "Pavers" },
  { src: "/images/gallery/17.png", alt: "Artificial turf installation", category: "Turf" },
  { src: "/images/gallery/18.png", alt: "Hardscape walkway", category: "Hardscaping" },
  { src: "/images/gallery/19.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
  { src: "/images/gallery/20.png", alt: "Artificial turf installation", category: "Turf" },
  { src: "/images/gallery/21.png", alt: "Paver patio project in Phoenix", category: "Pavers" },
  { src: "/images/gallery/22.png", alt: "Artificial turf installation", category: "Turf" },
  { src: "/images/gallery/23.png", alt: "Hardscape walkway", category: "Hardscaping" },
  { src: "/images/gallery/24.png", alt: "Hardscape walkway", category: "Hardscaping" },
  { src: "/images/gallery/25.png", alt: "Landscape cleanup / maintenance", category: "Maintenance" },
  { src: "/images/gallery/26.png", alt: "Paver patio project in Phoenix", category: "Pavers" },
  { src: "/images/gallery/27.png", alt: "Outdoor living / fire pit area", category: "Outdoor Living" },
];

export default function GalleryPage() {
  return (
    <BrandBackground>
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top row (premium) */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-xl border border-brand-white/15 bg-brand-black/30 px-3 py-2 text-sm font-semibold text-brand-white/90 backdrop-blur hover:border-brand-white/30"
              >
                ← Back Home
              </Link>

              <span className="rounded-full border border-brand-white/10 bg-brand-white/5 px-3 py-1 text-xs text-brand-white/70">
                Curated Work • JCAZ
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">Gallery</h1>
            <p className="mt-2 max-w-2xl text-brand-white/75">
              Recent projects by JCAZ. Tap any photo to view full size. Use filters to browse by service type.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-extrabold text-brand-white hover:bg-brand-green/90"
          >
            Free Estimate
          </Link>
        </div>

        <div className="mt-8">
          <GalleryClient photos={PHOTOS} />
        </div>

        {/* CTA strip (premium touch) */}
        <div className="mt-12 rounded-3xl border border-brand-white/10 bg-brand-white/5 p-6 backdrop-blur md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-extrabold">Like what you see?</p>
              <p className="mt-1 text-sm text-brand-white/70">
                Send us your city + the service you need and we’ll schedule quickly.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-extrabold text-brand-white hover:bg-brand-green/90"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Footer (copiado, sin componente) */}
      <footer className="border-t border-brand-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-brand-white/75">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} JCAZ Landscape LLC</p>
            <p className="text-brand-white/60">
              {LOCATION} • {PHONE_DISPLAY} • {EMAIL}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
            >
              Instagram
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </BrandBackground>
  );
}
