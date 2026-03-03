import Link from "next/link";
import GalleryClient from "./GalleryClient";
import BrandBackground from "@/components/layout/BrandBackground";
import { ArrowLeft, MessageCircle, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Gallery | JC Arizona Landscape",
  description: "Recent landscape and hardscape projects by JC Arizona Landscape.",
};

const LOCATION = "Phoenix, AZ";
const PHONE_DISPLAY = "480-227-7319";

// ✅ WhatsApp phone (NO +, NO spaces)
const WHATSAPP_PHONE = "14802277319";

const INSTAGRAM = "https://www.instagram.com/jcarizonalandscape/";
const FACEBOOK = "https://www.facebook.com/100083666319172/";
const TIKTOK = "https://www.tiktok.com/@jcarizonalandscape";

/**
 * ✅ WhatsApp link generator
 * - estimate: incluye "Me interesa una cotización para: X"
 * - general: NO menciona cotización (evita "cotización para: Información general")
 */
function buildWhatsAppLink({
  lang,
  type,
  service,
}: {
  lang: "en" | "es";
  type: "estimate" | "general";
  service?: string;
}) {
  let text = "";

  if (lang === "es") {
    if (type === "estimate") {
      const svc = service ?? "mi proyecto";
      text = [
        "Hola JC Arizona Landscape.",
        `Me interesa una cotización para: ${svc}.`,
        "¿Me puedes compartir disponibilidad y un estimado?",
        "Avísame si necesitas más información sobre mi proyecto.",
      ].join("\n");
    } else {
      text = [
        "Hola JC Arizona Landscape.",
        "Tengo una pregunta sobre sus servicios.",
        "¿Me pueden compartir más información?",
      ].join("\n");
    }
  } else {
    if (type === "estimate") {
      const svc = service ?? "my project";
      text = [
        "Hello JC Arizona Landscape.",
        `I’m interested in a quote for: ${svc}.`,
        "Can you share availability and an estimate?",
        "Let me know if you need any additional information about my project.",
      ].join("\n");
    } else {
      text = [
        "Hello JC Arizona Landscape.",
        "I have a question about your services.",
        "Could you share more information?",
      ].join("\n");
    }
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

const WA_ESTIMATE_EN = buildWhatsAppLink({
  lang: "en",
  type: "estimate",
  service: "Project from Gallery photos",
});

const WA_ESTIMATE_ES = buildWhatsAppLink({
  lang: "es",
  type: "estimate",
  service: "Proyecto basado en fotos de la galería",
});

const WA_CONTACT_EN = buildWhatsAppLink({
  lang: "en",
  type: "general",
});

const WA_CONTACT_ES = buildWhatsAppLink({
  lang: "es",
  type: "general",
});

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
      {/* Language toggle (no JS). Unchecked = EN, Checked = ES */}
      <input id="lang-toggle" type="checkbox" className="peer sr-only" />

      <div className="peer-checked:[&_.en]:hidden peer-checked:[&_.es]:block [&_.es]:hidden">
        <div className="mx-auto max-w-6xl px-4 py-10">
          {/* Top row */}
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
                  <span className="en">Back Home</span>
                  <span className="es">Inicio</span>
                </Link>

                <span className="rounded-full border border-brand-white/10 bg-brand-white/5 px-3 py-1 text-xs text-brand-white/70">
                  <span className="en">Curated Work • JC Arizona</span>
                  <span className="es">Trabajos • JC Arizona</span>
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
                <span className="en">Gallery</span>
                <span className="es">Galería</span>
              </h1>

              <p className="mt-2 max-w-2xl text-brand-white/75">
                <span className="en">
                  Recent projects by JC Arizona. Tap any photo to view full size. Use filters to browse by service type.
                </span>
                <span className="es">
                  Proyectos recientes de JC Arizona. Toca cualquier foto para verla en grande. Usa los filtros para ver
                  por tipo de servicio.
                </span>
              </p>
            </div>

            {/* WhatsApp-first CTA (EN/ES) */}
            <div className="flex flex-wrap gap-2">
              <a
                href={WA_ESTIMATE_EN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-sm font-extrabold text-brand-white hover:bg-brand-green/90 en"
              >
                <MessageCircle className="h-4 w-4" />
                Free Estimate
              </a>
              <a
                href={WA_ESTIMATE_ES}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-sm font-extrabold text-brand-white hover:bg-brand-green/90 es"
              >
                <MessageCircle className="h-4 w-4" />
                Cotización
              </a>

              <a
                href={WA_CONTACT_EN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-white/15 bg-brand-black/40 px-5 py-3 text-sm font-extrabold text-brand-white hover:border-brand-white/30 en"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <ArrowUpRight className="h-4 w-4 text-brand-green" />
                General Question
              </a>
              <a
                href={WA_CONTACT_ES}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-white/15 bg-brand-black/40 px-5 py-3 text-sm font-extrabold text-brand-white hover:border-brand-white/30 es"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <ArrowUpRight className="h-4 w-4 text-brand-green" />
                Pregunta General
              </a>
            </div>
          </div>

          <div className="mt-8">
            <GalleryClient photos={PHOTOS} />
          </div>

          {/* CTA strip */}
          <div className="mt-12 rounded-3xl border border-brand-white/10 bg-brand-white/5 p-6 backdrop-blur md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-extrabold">
                  <span className="en">Like what you see?</span>
                  <span className="es">¿Te gustó lo que viste?</span>
                </p>
                <p className="mt-1 text-sm text-brand-white/70">
                  <span className="en">
                    Send us your city + the service you need and we’ll schedule quickly.
                  </span>
                  <span className="es">
                    Envíanos tu ciudad + el servicio que necesitas y agendamos rápido.
                  </span>
                </p>
                <p className="mt-2 text-xs text-brand-white/60">
                  <span className="en">
                    Tip: include your neighborhood + timeline for faster scheduling.
                  </span>
                  <span className="es">
                    Tip: agrega tu zona + cuándo te gustaría hacerlo para agendar más rápido.
                  </span>
                </p>
              </div>

              <a
                href={WA_ESTIMATE_EN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-extrabold text-brand-white hover:bg-brand-green/90 en"
              >
                Get a Free Estimate
              </a>
              <a
                href={WA_ESTIMATE_ES}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-extrabold text-brand-white hover:bg-brand-green/90 es"
              >
                Pedir Cotización
              </a>
            </div>
          </div>
        </div>

        {/* Footer (WhatsApp-first) */}
        <footer className="mt-16 border-t border-brand-white/10">
          <div className="mx-auto max-w-6xl px-6 py-7">
            <div className="grid items-start gap-6 md:grid-cols-3">
              {/* LEFT */}
              <div className="space-y-3">
                <p className="text-sm text-brand-white/80">© 2015 JC Arizona Landscape LLC</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-brand-green/30 bg-brand-white/5 px-5 py-2 text-sm text-brand-green/90 transition hover:border-brand-green/60 hover:bg-brand-white/10"
                  >
                    Instagram
                  </a>
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-brand-green/30 bg-brand-white/5 px-5 py-2 text-sm text-brand-green/90 transition hover:border-brand-green/60 hover:bg-brand-white/10"
                  >
                    Facebook
                  </a>
                  <a
                    href={TIKTOK}
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
                <span className="en">Serving Arizona and surrounding areas</span>
                <span className="es">Sirviendo Arizona y áreas cercanas</span>
              </div>

              {/* RIGHT */}
              <div className="space-y-2 text-sm text-brand-white/70 md:text-right">
                <p>{LOCATION}</p>

                <p>
                  <a
                    href={WA_CONTACT_EN}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-white/80 transition hover:text-brand-green en"
                  >
                    WhatsApp {PHONE_DISPLAY}
                  </a>
                  <a
                    href={WA_CONTACT_ES}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-white/80 transition hover:text-brand-green es"
                  >
                    WhatsApp {PHONE_DISPLAY}
                  </a>
                </p>

                <div className="pt-2 flex flex-wrap gap-6 text-xs md:justify-end">
                  <Link href="/privacy" className="text-brand-white/60 transition hover:text-brand-green">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-brand-white/60 transition hover:text-brand-green">
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
      </div>
    </BrandBackground>
  );
}