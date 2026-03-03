"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroVideo } from "../components/sections/HeroVideo";
import Link from "next/link";

import {
  Instagram,
  Facebook,
  Music2,
  MapPin,
  Hammer,
  BrickWall,
  Layers,
  Droplet,
  Flame,
  Wrench,
  ShieldCheck,
  BadgeCheck,
  Clock,
  FileText,
  HardHat,
  Images,
  ArrowUpRight,
  PawPrint,
  Lightbulb,
  Flag,
  Box,
  X,
  DollarSign,
  MessageCircle,
} from "lucide-react";

const PHONE_DISPLAY = "480-227-7319";
const WHATSAPP_PHONE = "14802277319";

const LOCATION = "Phoenix, AZ";
const INSTAGRAM = "https://www.instagram.com/jcarizonalandscape/";
const FACEBOOK = "https://www.facebook.com/100083666319172/";
const TIKTOK = "https://www.tiktok.com/@jcarizonalandscape";
const FINANCING_URL =
  "https://www.gethearth.com/partners/jc-arizona-landscaping-llc/joshua";

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

const services = [
  {
    key: "hardscaping",
    enTitle: "Hardscaping",
    esTitle: "Hardscape",
    enDesc: "Patios, walkways, retaining walls and outdoor upgrades built to last.",
    esDesc:
      "Patios, andadores, muros de contención y mejoras exteriores hechas para durar.",
    icon: Hammer,
  },
  {
    key: "pavers",
    enTitle: "Pavers",
    esTitle: "Adoquín (Pavers)",
    enDesc:
      "Clean layouts and professional installation for patios, driveways and paths.",
    esDesc:
      "Diseño limpio e instalación profesional para patios, cocheras y pasillos.",
    icon: BrickWall,
  },
  {
    key: "pet-turf",
    enTitle: "Pet Friendly Turf",
    esTitle: "Pasto Pet Friendly",
    enDesc:
      "Durable turf designed for pets—easy to clean and built to handle daily use.",
    esDesc:
      "Pasto diseñado para mascotas—fácil de limpiar y hecho para uso diario.",
    icon: PawPrint,
  },
  {
    key: "irrigation",
    enTitle: "Irrigation",
    esTitle: "Irrigación",
    enDesc:
      "Efficient irrigation installs and repairs to keep your landscape healthy.",
    esDesc:
      "Instalación y reparación de riego para mantener tu jardín en buen estado.",
    icon: Droplet,
  },
  {
    key: "travertine",
    enTitle: "Travertine",
    esTitle: "Travertino",
    enDesc:
      "Premium stone finishes for patios, pool areas and outdoor living spaces.",
    esDesc:
      "Acabados premium en piedra para patios, albercas y áreas exteriores.",
    icon: Layers,
  },
  {
    key: "outdoorliving",
    enTitle: "Outdoor Living",
    esTitle: "Áreas Sociales",
    enDesc:
      "BBQs, pergolas and fire pits to turn your yard into a true gathering space.",
    esDesc:
      "Asadores, pérgolas y fogateros para convertir tu patio en un espacio para convivir.",
    icon: Flame,
  },
  {
    key: "maintenance",
    enTitle: "Maintenance & Cleanups",
    esTitle: "Mantenimiento y Limpiezas",
    enDesc:
      "Residential & commercial maintenance, cleanups, weed control and HOA support.",
    esDesc:
      "Mantenimiento residencial y comercial, limpiezas, control de maleza y apoyo a HOA.",
    icon: Wrench,
  },
  {
    key: "low-voltage-lighting",
    enTitle: "Low-Voltage Lighting",
    esTitle: "Iluminación de Bajo Voltaje",
    enDesc:
      "Outdoor lighting that boosts curb appeal, safety, and nighttime ambiance.",
    esDesc:
      "Iluminación exterior para mejorar vista, seguridad y ambiente por la noche.",
    icon: Lightbulb,
  },
  {
    key: "putting-greens",
    enTitle: "Putting Greens",
    esTitle: "Putting Greens",
    enDesc:
      "Custom putting greens for backyards—smooth roll, clean edges, pro finish.",
    esDesc:
      "Putting greens a medida—rodado suave, bordes limpios y acabado profesional.",
    icon: Flag,
  },
  {
    key: "3d-rendering",
    enTitle: "3D Design Rendering",
    esTitle: "Render 3D de Diseño",
    enDesc:
      "Visualize your project before we build—layouts, materials, and final look.",
    esDesc:
      "Visualiza tu proyecto antes de construir—diseño, materiales y resultado final.",
    icon: Box,
  },
];

export default function Home() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  // ✅ general WhatsApp links
  const WA_ESTIMATE_EN = buildWhatsAppLink({
    lang: "en",
    type: "estimate",
    service: "Landscaping / Hardscaping",
  });
  const WA_ESTIMATE_ES = buildWhatsAppLink({
    lang: "es",
    type: "estimate",
    service: "Hardscape / Jardinería",
  });

  const WA_CONTACT_EN = buildWhatsAppLink({
    lang: "en",
    type: "general",
  });
  const WA_CONTACT_ES = buildWhatsAppLink({
    lang: "es",
    type: "general",
  });

  return (
    <main
      className="relative min-h-screen bg-brand-black text-brand-white"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            115deg,
            rgba(15, 99, 0, 0.12) 0px,
            rgba(15, 99, 0, 0.12) 1px,
            transparent 1px,
            transparent 110px
          ),
          radial-gradient(900px circle at 10% 10%, rgba(15, 99, 0, 0.40), transparent 62%),
          radial-gradient(850px circle at 92% 12%, rgba(15, 99, 0, 0.26), transparent 62%),
          radial-gradient(900px circle at 18% 55%, rgba(15, 99, 0, 0.22), transparent 66%),
          radial-gradient(950px circle at 92% 58%, rgba(15, 99, 0, 0.20), transparent 66%),
          radial-gradient(1100px circle at 22% 115%, rgba(15, 99, 0, 0.22), transparent 68%),
          radial-gradient(1200px circle at 85% 175%, rgba(15, 99, 0, 0.18), transparent 70%)
        `,
      }}
    >
      <div className="relative z-10">
        {/* Language toggle (no JS). Unchecked = EN, Checked = ES */}
        <input id="lang-toggle" type="checkbox" className="peer sr-only" />

        <div className="peer-checked:[&_.en]:hidden peer-checked:[&_.es]:block [&_.es]:hidden">
          {/* HEADER */}
          <header className="sticky top-0 z-50 border-b border-brand-white/10 bg-brand-black/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <a href="#" className="flex items-center gap-3">
                <Image
                  src="/brand/logo-main.png"
                  alt="JCAZ Landscape LLC"
                  width={160}
                  height={40}
                  priority
                  className="h-10 w-auto"
                />
              </a>

              <nav className="hidden gap-6 text-sm text-brand-white/80 md:flex">
                <a className="hover:text-brand-white" href="#services">
                  <span className="en">Services</span>
                  <span className="es">Servicios</span>
                </a>
                <a className="hover:text-brand-white" href="#about">
                  <span className="en">About</span>
                  <span className="es">Nosotros</span>
                </a>
                <a className="hover:text-brand-white" href="#projects">
                  <span className="en">Projects</span>
                  <span className="es">Proyectos</span>
                </a>

                {/* Contact -> WhatsApp */}
                <a
                  className="hover:text-brand-white en"
                  href={WA_CONTACT_EN}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
                <a
                  className="hover:text-brand-white es"
                  href={WA_CONTACT_ES}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contacto
                </a>
              </nav>

              <div className="flex items-center gap-2">
                {/* Language switch */}
                <label
                  htmlFor="lang-toggle"
                  className="hidden cursor-pointer select-none rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30 md:inline-flex"
                  title="Toggle language"
                >
                  <span className="en">ES</span>
                  <span className="es">EN</span>
                </label>

                {/* ✅ DO NOT TOUCH: Gallery */}
                <a
                  href="/gallery"
                  className="hidden md:inline-flex items-center gap-2 rounded-xl bg-brand-green px-3 py-2 text-sm font-extrabold text-brand-white hover:bg-brand-green/90"
                >
                  <Images className="h-4 w-4 text-brand-white" />
                  <span>Gallery</span>
                </a>

                {/* ✅ DO NOT TOUCH: Financing */}
                <a
                  href={FINANCING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden md:inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm font-extrabold text-brand-white hover:border-brand-white/30"
                >
                  <DollarSign className="h-4 w-4 text-brand-green" />
                  Financing
                </a>

                {/* WhatsApp quick button */}
                <a
                  href={WA_CONTACT_EN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30 en"
                >
                  <MessageCircle className="h-4 w-4 text-brand-green" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={WA_CONTACT_ES}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30 es"
                >
                  <MessageCircle className="h-4 w-4 text-brand-green" />
                  <span>WhatsApp</span>
                </a>

                {/* Free Estimate -> WhatsApp */}
                <a
                  href={WA_ESTIMATE_EN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-3 py-2 text-sm font-extrabold text-brand-white hover:bg-brand-green/90 en"
                >
                  <ArrowUpRight className="h-4 w-4 text-brand-white" />
                  <span>Free Estimate</span>
                </a>
                <a
                  href={WA_ESTIMATE_ES}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-3 py-2 text-sm font-extrabold text-brand-white hover:bg-brand-green/90 es"
                >
                  <ArrowUpRight className="h-4 w-4 text-brand-white" />
                  <span>Cotización Gratis</span>
                </a>
              </div>
            </div>
          </header>

          {/* HERO */}
          <section className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-white/15 px-3 py-1 text-xs text-brand-white/80">
                  <MapPin className="h-4 w-4 text-brand-green" />
                  <span className="en">
                    Phoenix & Valley-Wide • Licensed / Insured • Fast Scheduling
                  </span>
                  <span className="es">
                    Phoenix y todo el Valle • Licenciados / Asegurados • Agenda Rápida
                  </span>
                </p>

                <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                  <span className="en">
                    Landscaping & Hardscaping Services in Arizona.
                  </span>
                  <span className="es">Hardscape y Exteriores en Arizona.</span>
                </h1>

                <p className="mt-4 text-brand-white/80">
                  <span className="en">
                    From pavers and turf to pergolas and fire pits—clear estimates,
                    clean execution, and results you’ll love.
                  </span>
                  <span className="es">
                    Desde adoquín y pasto artificial hasta pérgolas y fogateros—cotizaciones
                    claras, buen trabajo y resultados que te van a encantar.
                  </span>
                </p>

                {/* Primary actions */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {/* Get Estimate -> WhatsApp */}
                  <a
                    href={WA_ESTIMATE_EN}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-3 font-extrabold text-brand-white hover:bg-brand-green/90 en"
                  >
                    <ArrowUpRight className="h-4 w-4 text-brand-white" />
                    <span>Get a Free Estimate</span>
                  </a>
                  <a
                    href={WA_ESTIMATE_ES}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-3 font-extrabold text-brand-white hover:bg-brand-green/90 es"
                  >
                    <ArrowUpRight className="h-4 w-4 text-brand-white" />
                    <span>Pedir Cotización</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={WA_CONTACT_EN}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-5 py-3 font-extrabold text-brand-white hover:border-brand-white/30 en"
                  >
                    <MessageCircle className="h-4 w-4 text-brand-green" />
                    <span>WhatsApp {PHONE_DISPLAY}</span>
                  </a>
                  <a
                    href={WA_CONTACT_ES}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-5 py-3 font-extrabold text-brand-white hover:border-brand-white/30 es"
                  >
                    <MessageCircle className="h-4 w-4 text-brand-green" />
                    <span>WhatsApp {PHONE_DISPLAY}</span>
                  </a>

                  {/* ✅ DO NOT TOUCH: Gallery - mobile only */}
                  <a
                    href="/gallery"
                    className="inline-flex md:hidden items-center gap-2 rounded-xl bg-brand-green px-5 py-3 font-extrabold text-brand-white hover:bg-brand-green/90"
                  >
                    <Images className="h-4 w-4 text-brand-white" />
                    <span className="en">Gallery</span>
                    <span className="es">Galería</span>
                  </a>
                </div>

                {/* Trust badges */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-brand-white/85 md:grid-cols-4">
                  {[
                    { en: "Licensed", es: "Licenciados", icon: BadgeCheck },
                    { en: "Insured", es: "Asegurados", icon: ShieldCheck },
                    { en: "Warranty", es: "Garantía", icon: Clock },
                  ].map((t) => {
                    const Ico = t.icon;
                    return (
                      <div
                        key={t.en}
                        className="flex items-center gap-2 rounded-xl border border-brand-white/10 bg-brand-white/5 p-3"
                      >
                        <Ico className="h-4 w-4 text-brand-green" />
                        <div className="leading-tight">
                          <span className="en">{t.en}</span>
                          <span className="es">{t.es}</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* ✅ DO NOT TOUCH: Financing badge (clickeable) */}
                  <a
                    href={FINANCING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border-2 border-brand-green/60 bg-brand-green/10 p-3 transition hover:bg-brand-green hover:text-brand-white"
                  >
                    <FileText className="h-4 w-4 text-brand-green" />
                    <div className="leading-tight font-extrabold">
                      <span className="en">Financing (Click here) </span>
                      <span className="es">Financiamiento (Click Aquí) </span>
                    </div>
                  </a>
                </div>

                {/* WhatsApp microcopy */}
                <p className="mt-4 text-xs text-brand-white/60">
                  <span className="en">
                    Fast response via WhatsApp during business hours.
                  </span>
                  <span className="es">
                    Respuesta rápida por WhatsApp en horario laboral.
                  </span>
                </p>
              </div>

              {/* Video card */}
              <div className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-white/15 bg-brand-black/40 px-4 py-1.5 text-xs text-brand-white/80 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-brand-green" />
                  <span>Owner introduction & recent projects</span>
                </div>

                <div className="mt-3">
                  <HeroVideo
                    mp4Src="/videos/hero-intro.mp4"
                    posterSrc="/brand/hero-poster.png"
                    className="mt-4 h-[200px] w-full md:h-[200x] lg:max-w-[420px]"
                  />
                </div>

                {/* Social media */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
                  >
                    <Instagram className="h-4 w-4 text-brand-green" />
                    Instagram
                  </a>

                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
                  >
                    <Facebook className="h-4 w-4 text-brand-green" />
                    Facebook
                  </a>

                  <a
                    href={TIKTOK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
                  >
                    <Music2 className="h-4 w-4 text-brand-green" />
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* SOCIAL PROOF */}
          <section className="mx-auto max-w-6xl px-4 py-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Google */}
              <div className="flex items-center gap-4 rounded-2xl border border-brand-white/10 bg-brand-black/40 px-5 py-4 backdrop-blur">
                <img
                  src="/images/services/google-icon.svg"
                  alt="Google Reviews"
                  className="h-8 w-8"
                />
                <div>
                  <p className="flex items-center gap-1 text-sm font-extrabold">
                    5.0 <span className="text-yellow-400">★★★★★</span>
                  </p>
                  <p className="text-xs text-brand-white/70">Based on 50+ Reviews</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-4 rounded-2xl border border-brand-white/10 bg-brand-black/40 px-5 py-4 backdrop-blur">
                <img
                  src="/images/services/facebook-svg.svg"
                  alt="Facebook Reviews"
                  className="h-8 w-8"
                />
                <div>
                  <p className="flex items-center gap-1 text-sm font-extrabold">
                    5.0 <span className="text-yellow-400">★★★★★</span>
                  </p>
                  <p className="text-xs text-brand-white/70">Based on 50+ Reviews</p>
                </div>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-4 rounded-2xl border border-brand-white/10 bg-brand-black/40 px-5 py-4 backdrop-blur">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green/15">
                  <span className="text-brand-green">✔</span>
                </div>
                <div>
                  <p className="text-sm font-extrabold">Licensed & Insured</p>
                  <p className="text-xs text-brand-white/70">Arizona Contractors</p>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-extrabold">
              <span className="en">Services</span>
              <span className="es">Servicios</span>
            </h2>
            <p className="mt-2 text-brand-white/75">
              <span className="en">
                Free estimates valley-wide. Tell us what you need—our team will handle the rest.
              </span>
              <span className="es">
                Cotizaciones gratis en todo el Valle. Dinos qué necesitas y nosotros nos encargamos.
              </span>
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.map((s) => {
                const Ico = s.icon;

                const WA_SERVICE_EN = buildWhatsAppLink({
                  lang: "en",
                  type: "estimate",
                  service: s.enTitle,
                });

                const WA_SERVICE_ES = buildWhatsAppLink({
                  lang: "es",
                  type: "estimate",
                  service: s.esTitle,
                });

                return (
                  <div
                    key={s.key}
                    className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-5 hover:border-brand-white/20"
                  >
                    <div className="flex items-center gap-2">
                      <Ico className="h-5 w-5 text-brand-green" />
                      <p className="font-extrabold">
                        <span className="en">{s.enTitle}</span>
                        <span className="es">{s.esTitle}</span>
                      </p>
                    </div>

                    <p className="mt-2 text-sm text-brand-white/70">
                      <span className="en">{s.enDesc}</span>
                      <span className="es">{s.esDesc}</span>
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      {/* Get Estimate -> WhatsApp */}
                      <a
                        href={WA_SERVICE_EN}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-white hover:text-brand-white/90 en"
                      >
                        <ArrowUpRight className="h-4 w-4 text-brand-green" />
                        <span>Get Estimate</span>
                      </a>
                      <a
                        href={WA_SERVICE_ES}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-white hover:text-brand-white/90 es"
                      >
                        <ArrowUpRight className="h-4 w-4 text-brand-green" />
                        <span>Cotizar</span>
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={WA_SERVICE_EN}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-white/85 hover:text-brand-white en"
                        title="WhatsApp"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-4 w-4 text-brand-green" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href={WA_SERVICE_ES}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-white/85 hover:text-brand-white es"
                        title="WhatsApp"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-4 w-4 text-brand-green" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="mx-auto max-w-6xl px-4 py-10">
            <div className="rounded-3xl border border-brand-white/10 bg-brand-white/5 p-6 md:p-10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-brand-green" />
                <h2 className="text-2xl font-extrabold">
                  <span className="en">About JC Arizona</span>
                  <span className="es">Sobre JC Arizona</span>
                </h2>
              </div>

              <p className="mt-3 text-brand-white/80">
                <span className="en">
                  Great service begins and ends with experienced professionals. We work efficiently, stay on schedule,
                  and focus on lasting results—built on professionalism, excellence, and timeliness.
                </span>
                <span className="es">
                  Un gran servicio comienza y termina con profesionales con experiencia. Trabajamos de forma eficiente,
                  cumplimos tiempos y nos enfocamos en resultados duraderos—con profesionalismo, excelencia y puntualidad.
                </span>
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-brand-white/10 bg-brand-black/40 p-5">
                  <p className="flex items-center gap-2 font-extrabold text-brand-white">
                    <BadgeCheck className="h-5 w-5 text-brand-green" />
                    <span className="en">Mission</span>
                    <span className="es">Misión</span>
                  </p>
                  <p className="mt-2 text-sm text-brand-white/75">
                    <span className="en">
                      Provide quality design and attention to detail with every job. Integrity and quality drive our work.
                    </span>
                    <span className="es">
                      Brindar diseño de calidad y atención al detalle en cada trabajo. La integridad y la calidad nos definen.
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-white/10 bg-brand-black/40 p-5">
                  <p className="flex items-center gap-2 font-extrabold text-brand-white">
                    <Clock className="h-5 w-5 text-brand-green" />
                    <span className="en">Vision</span>
                    <span className="es">Visión</span>
                  </p>
                  <p className="mt-2 text-sm text-brand-white/75">
                    <span className="en">
                      Every project is unique. We maximize your vision to bring a beautiful landscape to every home.
                    </span>
                    <span className="es">
                      Cada proyecto es único. Maximizamos tu visión para lograr un paisaje hermoso en cada hogar.
                    </span>
                  </p>
                </div>
              </div>

              {/* Values row */}
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {[
                  { en: "Professionalism", es: "Profesionalismo", icon: HardHat },
                  { en: "Integrity", es: "Integridad", icon: ShieldCheck },
                  { en: "Excellence", es: "Excelencia", icon: BadgeCheck },
                ].map((v) => {
                  const Ico = v.icon;
                  return (
                    <div
                      key={v.en}
                      className="flex items-center gap-2 rounded-2xl border border-brand-white/10 bg-brand-white/5 p-4"
                    >
                      <Ico className="h-5 w-5 text-brand-green" />
                      <p className="text-sm font-extrabold text-brand-white/90">
                        <span className="en">{v.en}</span>
                        <span className="es">{v.es}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Images className="h-6 w-6 text-brand-green" />
                  <h2 className="text-2xl font-extrabold">
                    <span className="en">Recent Projects</span>
                    <span className="es">Proyectos Recientes</span>
                  </h2>
                </div>

                <p className="mt-2 text-brand-white/75">
                  <span className="en">Explore more work on Instagram & Facebook.</span>
                  <span className="es">Mira más trabajos en Instagram y Facebook.</span>
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-4 py-2 text-sm font-extrabold text-brand-white hover:bg-brand-green/90"
                >
                  <Instagram className="h-4 w-4 text-brand-white" />
                  Instagram
                </a>

                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-4 py-2 text-sm font-extrabold text-brand-white hover:border-brand-white/30"
                >
                  <Facebook className="h-4 w-4 text-brand-green" />
                  Facebook
                </a>

                <a
                  href={TIKTOK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-4 py-2 text-sm font-extrabold text-brand-white hover:border-brand-white/30"
                >
                  <Music2 className="h-4 w-4 text-brand-green" />
                  TikTok
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setOpenProject(n)}
                  className="group relative w-full overflow-hidden rounded-2xl border border-brand-white/10 bg-brand-white/5 text-left transition-transform duration-300 hover:-translate-y-1 hover:border-brand-white/20"
                >
                  <div className="relative h-56 md:h-44">
                    <Image
                      src={`/images/projects/project-${String(n).padStart(2, "0")}.jpg`}
                      alt={`Project ${n}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                    <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-brand-white/15 bg-brand-black/40 px-3 py-1 text-xs text-brand-white/90 backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-brand-green" />
                      <span className="en">Recent Work</span>
                      <span className="es">Trabajo Reciente</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Lightbox */}
          {openProject !== null && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={() => setOpenProject(null)}
                className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-xl border border-brand-white/15 bg-brand-black/40 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
              >
                <X className="h-4 w-4 text-brand-green" />
                Close
              </button>

              <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-brand-white/10 bg-brand-black/60">
                <Image
                  src={`/images/projects/project-${String(openProject).padStart(2, "0")}.jpg`}
                  alt={`Project ${openProject}`}
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-contain"
                  priority
                />

                <div className="border-t border-brand-white/10 p-4">
                  <p className="text-sm font-extrabold text-brand-white">
                    <span className="en">Recent Project</span>
                    <span className="es">Proyecto Reciente</span>
                  </p>
                  <p className="mt-1 text-sm text-brand-white/70">
                    <span className="en">Hardscaping & Outdoor Living</span>
                    <span className="es">Hardscape y Áreas Exteriores</span>
                  </p>

                  <a
                    href="/gallery"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-brand-green hover:underline"
                  >
                    <span className="en">View full gallery →</span>
                    <span className="es">Ver galería completa →</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ✅ NEW WhatsApp contact section (replaces old form) */}
          <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
            <div className="rounded-3xl border border-brand-white/10 bg-brand-white/5 p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                {/* Left copy */}
                <div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-brand-green" />
                    <h2 className="text-2xl font-extrabold">
                      <span className="en">Contact us on WhatsApp</span>
                      <span className="es">Contáctanos por WhatsApp</span>
                    </h2>
                  </div>

                  <p className="mt-3 text-brand-white/80">
                    <span className="en">
                      Tap the button and send a message. We’ll reply with availability and a quick estimate.
                    </span>
                    <span className="es">
                      Pica el botón y envía un mensaje. Te respondemos con disponibilidad y un estimado rápido.
                    </span>
                  </p>

                  <div className="mt-5 grid gap-3">
                    {[
                      {
                        en: "Include your city + service for faster scheduling.",
                        es: "Incluye tu ciudad + servicio para agendar más rápido.",
                      },
                      {
                        en: "If you can, add a photo/video of the area.",
                        es: "Si puedes, agrega foto/video del área.",
                      },
                      {
                        en: "Tell us your timeline (this week / next week).",
                        es: "Dinos tu timeline (esta semana / la próxima).",
                      },
                    ].map((t) => (
                      <div
                        key={t.en}
                        className="flex items-start gap-3 rounded-2xl border border-brand-white/10 bg-brand-black/40 p-4"
                      >
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                          ✓
                        </span>
                        <p className="text-sm leading-snug text-brand-white/80">
                          <span className="en">{t.en}</span>
                          <span className="es">{t.es}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right CTA card */}
                <div className="rounded-3xl border border-brand-white/10 bg-brand-black/40 p-6 md:p-8">
                  <p className="text-sm text-brand-white/70">
                    <span className="en">Fast reply via WhatsApp</span>
                    <span className="es">Respuesta rápida por WhatsApp</span>
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    <span className="en">Get a Free Estimate</span>
                    <span className="es">Cotización Gratis</span>
                  </p>

                  <p className="mt-2 text-sm text-brand-white/75">
                    <span className="en">We’ll confirm availability and send a rough estimate.</span>
                    <span className="es">Confirmamos disponibilidad y te damos un estimado.</span>
                  </p>

                  <div className="mt-6 grid gap-3">
                    {/* BIG primary button */}
                    <a
                      href={WA_ESTIMATE_EN}
                      target="_blank"
                      rel="noreferrer"
                      className="en inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 py-4 text-base font-extrabold text-brand-white hover:bg-brand-green/90"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Message us on WhatsApp
                    </a>
                    <a
                      href={WA_ESTIMATE_ES}
                      target="_blank"
                      rel="noreferrer"
                      className="es inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 py-4 text-base font-extrabold text-brand-white hover:bg-brand-green/90"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Enviar WhatsApp
                    </a>

                    {/* Secondary button */}
                    <a
                      href={WA_CONTACT_EN}
                      target="_blank"
                      rel="noreferrer"
                      className="en inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-white/15 bg-brand-white/5 px-6 py-3 text-sm font-extrabold text-brand-white hover:border-brand-white/30"
                    >
                      <ArrowUpRight className="h-4 w-4 text-brand-green" />
                      General question
                    </a>
                    <a
                      href={WA_CONTACT_ES}
                      target="_blank"
                      rel="noreferrer"
                      className="es inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-white/15 bg-brand-white/5 px-6 py-3 text-sm font-extrabold text-brand-white hover:border-brand-white/30"
                    >
                      <ArrowUpRight className="h-4 w-4 text-brand-green" />
                      Pregunta general
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-brand-white/60">
                    <span className="en">Tip: you can attach photos to speed up your estimate.</span>
                    <span className="es">Tip: puedes adjuntar fotos para acelerar la cotización.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
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
                  Serving Arizona and surrounding areas
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

          {/* Floating WhatsApp button */}
          <a
            href={WA_ESTIMATE_EN}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-5 right-5 z-[80] hidden en md:inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-extrabold text-brand-white shadow-lg hover:bg-brand-green/90"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={WA_ESTIMATE_ES}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-5 right-5 z-[80] hidden es md:inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-extrabold text-brand-white shadow-lg hover:bg-brand-green/90"
            aria-label="Chatear por WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          {/* Mobile floating */}
          <a
            href={WA_ESTIMATE_EN}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-5 right-5 z-[80] inline-flex md:hidden en items-center justify-center rounded-full bg-brand-green p-4 text-brand-white shadow-lg hover:bg-brand-green/90"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={WA_ESTIMATE_ES}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-5 right-5 z-[80] inline-flex md:hidden es items-center justify-center rounded-full bg-brand-green p-4 text-brand-white shadow-lg hover:bg-brand-green/90"
            aria-label="Chatear por WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </main>
  );
}