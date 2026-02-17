import Link from "next/link";
import GalleryClient from "./GalleryClient";
import BrandBackground from "@/components/layout/BrandBackground";
import { ArrowLeft } from "lucide-react";


export const metadata = {
  title: "Gallery | JC Arizona Landscape",
  description: "Recent landscape and hardscape projects by JC Arizona Landscape.",
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
              className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15
                        bg-brand-black/40 px-3 py-2 text-sm font-semibold
                        text-brand-white/90 backdrop-blur
                        transition hover:border-brand-white/30 hover:bg-brand-white/5"
            >
              <ArrowLeft className="h-4 w-4 text-brand-green" />
              Back Home
            </Link>


              <span className="rounded-full border border-brand-white/10 bg-brand-white/5 px-3 py-1 text-xs text-brand-white/70">
                Curated Work • JC Arizona
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">Gallery</h1>
            <p className="mt-2 max-w-2xl text-brand-white/75">
              Recent projects by JC Arizona. Tap any photo to view full size. Use filters to browse by service type.
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
      <footer className="mt-16 border-t border-brand-white/10">
      <div className="mx-auto max-w-6xl px-6 py-7">
        <div className="grid items-start gap-6 md:grid-cols-3">
          {/* LEFT */}
          <div className="space-y-3">
            <p className="text-sm text-brand-white/80">
              © 2015 JC Arizona Landscape LLC
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-green/30 bg-brand-white/5 px-5 py-2 text-sm text-brand-green/90 transition hover:border-brand-green/60 hover:bg-brand-white/10"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-green/30 bg-brand-white/5 px-5 py-2 text-sm text-brand-green/90 transition hover:border-brand-green/60 hover:bg-brand-white/10"
              >
                Facebook
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-green/30 bg-brand-white/5 px-5 py-2 text-sm text-brand-green/90 transition hover:border-brand-green/60 hover:bg-brand-white/10"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div className="text-sm text-brand-white/70 md:text-center">
            Serving Arizona and surrounding areas
          </div>

          {/* RIGHT */}
          <div className="space-y-2 text-sm text-brand-white/70 md:text-right">
            <p>Phoenix, AZ</p>

            <p>
              <a
                href="tel:4802277319"
                className="text-brand-white/80 transition hover:text-brand-green"
              >
                480-227-7319
              </a>
            </p>

            <p>
              <a
                href="mailto:jcazlandscape@yahoo.com"
                className="text-brand-white/80 transition hover:text-brand-green"
              >
                jcazlandscape@yahoo.com
              </a>
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs md:justify-end">
              <Link
                href="/privacy"
                className="text-brand-white/60 transition hover:text-brand-green"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-brand-white/60 transition hover:text-brand-green"
              >
                Terms &amp; Conditions
              </Link>
            </div>

            <p className="pt-2 text-xs text-brand-white/50">
              Licensed &amp; Insured · Free Estimates
            </p>
          </div>
        </div>
      </div>
    </footer>
    </BrandBackground>
  );
}
