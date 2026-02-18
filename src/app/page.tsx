"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroVideo } from "../components/sections/HeroVideo";
import Link from "next/link";

import {
  Instagram,
  Facebook,
  Music2,
  PhoneCall,
  Mail,
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
  DollarSign
} from "lucide-react";

const PHONE_DISPLAY = "480-227-7319";
const PHONE_HREF = "tel:+14802277319";
const EMAIL = "jcazlandscape@yahoo.com";
const EMAIL_HREF = `mailto:${EMAIL}`;
const LOCATION = "Phoenix, AZ";
const INSTAGRAM = "https://www.instagram.com/jcarizonalandscape/";
const FACEBOOK = "https://www.facebook.com/100083666319172/";
const TIKTOK = "https://www.tiktok.com/@jcarizonalandscape";
const FINANCING_URL = "https://www.gethearth.com/partners/jc-arizona-landscaping-llc/joshua";


const services = [
  {
    key: "hardscaping",
    enTitle: "Hardscaping",
    esTitle: "Hardscape",
    enDesc: "Patios, walkways, retaining walls and outdoor upgrades built to last.",
    esDesc: "Patios, andadores, muros de contención y mejoras exteriores hechas para durar.",
    icon: Hammer,
  },
  {
    key: "pavers",
    enTitle: "Pavers",
    esTitle: "Adoquín (Pavers)",
    enDesc: "Clean layouts and professional installation for patios, driveways and paths.",
    esDesc: "Diseño limpio e instalación profesional para patios, cocheras y pasillos.",
    icon: BrickWall,
  },
  {
    key: "pet-turf",
    enTitle: "Pet Friendly Turf",
    esTitle: "Pasto Pet Friendly",
    enDesc: "Durable turf designed for pets—easy to clean and built to handle daily use.",
    esDesc: "Pasto diseñado para mascotas—fácil de limpiar y hecho para uso diario.",
    icon: PawPrint,
  },
  {
    key: "irrigation",
    enTitle: "Irrigation",
    esTitle: "Irrigación",
    enDesc: "Efficient irrigation installs and repairs to keep your landscape healthy.",
    esDesc: "Instalación y reparación de riego para mantener tu jardín en buen estado.",
    icon: Droplet,
  },
  {
    key: "travertine",
    enTitle: "Travertine",
    esTitle: "Travertino",
    enDesc: "Premium stone finishes for patios, pool areas and outdoor living spaces.",
    esDesc: "Acabados premium en piedra para patios, albercas y áreas exteriores.",
    icon: Layers,
  },
  {
    key: "outdoorliving",
    enTitle: "Outdoor Living",
    esTitle: "Áreas Sociales",
    enDesc: "BBQs, pergolas and fire pits to turn your yard into a true gathering space.",
    esDesc: "Asadores, pérgolas y fogateros para convertir tu patio en un espacio para convivir.",
    icon: Flame,
  },
  {
    key: "maintenance",
    enTitle: "Maintenance & Cleanups",
    esTitle: "Mantenimiento y Limpiezas",
    enDesc: "Residential & commercial maintenance, cleanups, weed control and HOA support.",
    esDesc: "Mantenimiento residencial y comercial, limpiezas, control de maleza y apoyo a HOA.",
    icon: Wrench,
  },
  {
    key: "low-voltage-lighting",
    enTitle: "Low-Voltage Lighting",
    esTitle: "Iluminación de Bajo Voltaje",
    enDesc: "Outdoor lighting that boosts curb appeal, safety, and nighttime ambiance.",
    esDesc: "Iluminación exterior para mejorar vista, seguridad y ambiente por la noche.",
    icon: Lightbulb,
  },
  {
    key: "putting-greens",
    enTitle: "Putting Greens",
    esTitle: "Putting Greens",
    enDesc: "Custom putting greens for backyards—smooth roll, clean edges, pro finish.",
    esDesc: "Putting greens a medida—rodado suave, bordes limpios y acabado profesional.",
    icon: Flag,
  },
  {
    key: "3d-rendering",
    enTitle: "3D Design Rendering",
    esTitle: "Render 3D de Diseño",
    enDesc: "Visualize your project before we build—layouts, materials, and final look.",
    esDesc: "Visualiza tu proyecto antes de construir—diseño, materiales y resultado final.",
    icon: Box,
  },
];

export default function Home() {
  // ✅ Hooks SIEMPRE dentro del componente
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
                <a className="hover:text-brand-white" href="#contact">
                  <span className="en">Contact</span>
                  <span className="es">Contacto</span>
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

                <a
                  href="/gallery"
                  className="hidden md:inline-flex items-center gap-2 rounded-xl bg-brand-green px-3 py-2 text-sm font-extrabold text-brand-white hover:bg-brand-green/90"
                >
                  <Images className="h-4 w-4 text-brand-white" />
                  <span>Gallery</span>
                </a>
                <a
                href={FINANCING_URL}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm font-extrabold text-brand-white hover:border-brand-white/30"
              >
                <DollarSign className="h-4 w-4 text-brand-green" />
                Financing
              </a>



                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
                >
                  <PhoneCall className="h-4 w-4 text-brand-green" />
                  <span className="en">Call Now</span>
                  <span className="es">Llamar</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-3 py-2 text-sm font-extrabold text-brand-white hover:bg-brand-green/90"
                >
                  <ArrowUpRight className="h-4 w-4 text-brand-white" />
                  <span className="en">Free Estimate</span>
                  <span className="es">Cotización Gratis</span>
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
                  <span className="en">Phoenix & Valley-Wide • Licensed / Insured • Fast Scheduling</span>
                  <span className="es">Phoenix y todo el Valle • Licenciados / Asegurados • Agenda Rápida</span>
                </p>

                <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                  <span className="en">Landscaping & Hardscaping Services in Arizona.</span>
                  <span className="es">Hardscape y Exteriores en Arizona.</span>
                </h1>

                <p className="mt-4 text-brand-white/80">
                  <span className="en">
                    From pavers and turf to pergolas and fire pits—clear estimates, clean execution, and results you’ll love.
                  </span>
                  <span className="es">
                    Desde adoquín y pasto artificial hasta pérgolas y fogateros—cotizaciones claras, buen trabajo y resultados que te van a encantar.
                  </span>
                </p>

                              {/* Primary actions */}
                <div className="mt-6 flex flex-wrap gap-3">

                {/* Get Estimate */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-3 font-extrabold text-brand-white hover:bg-brand-green/90"
                >
                  <ArrowUpRight className="h-4 w-4 text-brand-white" />
                  <span className="en">Get a Free Estimate</span>
                  <span className="es">Pedir Cotización</span>
                </a>

                {/* Call */}
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-5 py-3 font-extrabold text-brand-white hover:border-brand-white/30"
                >
                  <PhoneCall className="h-4 w-4 text-brand-green" />
                  <span className="en">Call {PHONE_DISPLAY}</span>
                  <span className="es">Llama {PHONE_DISPLAY}</span>
                </a>

                {/* Gallery - mobile only, same style as primary */}
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

                {/* Financing badge (clickeable) */}
                <a
                  href={FINANCING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-brand-white/10 bg-brand-white/5 p-3 hover:border-brand-white/20 hover:bg-brand-white/10 transition"
                >
                  <FileText className="h-4 w-4 text-brand-green" />
                  <div className="leading-tight">
                    <span className="en">Financing Click Here</span>
                    <span className="es">Financiamiento Click Aquí</span>
                  </div>
                </a>
              </div>
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
                    posterSrc="/images/hero.png"
                    className="mt-4 h-[280px] w-full md:h-[260px] lg:max-w-[520px]"
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
                <img src="/images/services/google-icon.svg" alt="Google Reviews" className="h-8 w-8" />
                <div>
                  <p className="flex items-center gap-1 text-sm font-extrabold">
                    5.0 <span className="text-yellow-400">★★★★★</span>
                  </p>
                  <p className="text-xs text-brand-white/70">Based on 50+ Reviews</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-4 rounded-2xl border border-brand-white/10 bg-brand-black/40 px-5 py-4 backdrop-blur">
                <img src="/images/services/facebook-svg.svg" alt="Facebook Reviews" className="h-8 w-8" />
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
              <span className="en">Free estimates valley-wide. Tell us what you need—our team will handle the rest.</span>
              <span className="es">Cotizaciones gratis en todo el Valle. Dinos qué necesitas y nosotros nos encargamos.</span>
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.map((s) => {
                const Ico = s.icon;

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
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-white hover:text-brand-white/90"
                      >
                        <ArrowUpRight className="h-4 w-4 text-brand-green" />
                        <span className="en">Get Estimate</span>
                        <span className="es">Cotizar</span>
                      </a>

                      <a
                        href={PHONE_HREF}
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-white/85 hover:text-brand-white"
                      >
                        <PhoneCall className="h-4 w-4 text-brand-green" />
                        <span className="en">Call</span>
                        <span className="es">Llamar</span>
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
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
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

                  <a href="/gallery" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-brand-green hover:underline">
                    <span className="en">View full gallery →</span>
                    <span className="es">Ver galería completa →</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* CONTACT */}
          <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
            <div className="rounded-3xl border border-brand-white/10 bg-brand-white/5 p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-2 md:items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-6 w-6 text-brand-green" />
                    <h2 className="text-2xl font-extrabold">
                      <span className="en">Get a Free Estimate</span>
                      <span className="es">Cotización Gratis</span>
                    </h2>
                  </div>

                  <p className="mt-2 text-brand-white/75">
                    <span className="en">Call, email, or send your details and we’ll contact you shortly.</span>
                    <span className="es">Llama, envía email o deja tus datos y te contactamos pronto.</span>
                  </p>

                  <div className="mt-5 space-y-3 text-sm text-brand-white/80">
                    <p className="flex items-center gap-2">
                      <PhoneCall className="h-4 w-4 text-brand-green" />
                      <span className="font-extrabold text-brand-white">Phone:</span>{" "}
                      <a className="text-brand-white hover:text-brand-white/90" href={PHONE_HREF}>
                        {PHONE_DISPLAY}
                      </a>
                    </p>

                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-green" />
                      <span className="font-extrabold text-brand-white">Email:</span>{" "}
                      <a className="text-brand-white hover:text-brand-white/90" href={EMAIL_HREF}>
                        {EMAIL}
                      </a>
                    </p>

                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-green" />
                      <span className="font-extrabold text-brand-white">
                        <span className="en">Location:</span>
                        <span className="es">Ubicación:</span>
                      </span>{" "}
                      {LOCATION}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
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
                    </div>
                  </div>
                </div>

                {/* ✅ Form funcional (status + names + POST a /api/lead) */}
                <form
                  className="grid gap-3 md:grid-cols-2"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const fd = new FormData(form);
                    const payload = Object.fromEntries(fd);

                    setStatus("loading");

                    try {
                      const res = await fetch("/api", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                      });
                      

                      if (!res.ok) throw new Error("Request failed");
                      setStatus("success");
                      form.reset();
                    } catch (err) {
                      console.error(err);
                      setStatus("error");
                    }
                  }}
                >
                  <input
                    name="firstName"
                    required
                    className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60"
                    placeholder="First Name"
                  />
                  <input
                    name="lastName"
                    required
                    className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60"
                    placeholder="Last Name"
                  />

                  <input
                    name="phone"
                    required
                    className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60 md:col-span-2"
                    placeholder="Phone"
                  />

                  <input
                    name="address"
                    required
                    className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/70 md:col-span-2"
                    placeholder="Address (job site)"
                  />

                  <div className="grid gap-3 md:col-span-2 md:grid-cols-2">
                    <input
                      name="city"
                      className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/70"
                      placeholder="City"
                    />
                    <input
                      name="zip"
                      className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/70"
                      placeholder="ZIP"
                    />
                  </div>

                  <input
                    name="email"
                    className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60 md:col-span-2"
                    placeholder="Email"
                  />

                  <textarea
                    name="message"
                    className="min-h-28 rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60 md:col-span-2"
                    placeholder="Project details / Detalles del proyecto"
                  />

                  {/* metadata */}
                  <input type="hidden" name="lang" value="en" />
                  <input type="hidden" name="source" value="home" />

                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 font-extrabold text-brand-white hover:bg-brand-green/90 md:col-span-2 disabled:opacity-60"
                    type="submit"
                    disabled={status === "loading"}
                  >
                    <ArrowUpRight className="h-4 w-4 text-brand-white" />
                    {status === "loading" ? "Sending..." : "Submit"}
                  </button>

                  {status === "success" && (
                    <p className="md:col-span-2 text-sm text-brand-white/80">✅ Sent! We’ll contact you shortly.</p>
                  )}
                  {status === "error" && (
                    <p className="md:col-span-2 text-sm text-red-300">❌ Something went wrong. Please call us or try again.</p>
                  )}

                  <p className="md:col-span-2 text-xs text-brand-white/60">
                    <span className="en">Tip: include your city and the service you need for faster scheduling.</span>
                    <span className="es">Tip: agrega tu ciudad y el servicio que necesitas para agendar más rápido.</span>
                  </p>
                </form>
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

        </div>
      </div>
    </main>
  );
}
