import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "../components/sections/HeroVideo";
import {
  Instagram,
  Facebook,
  PhoneCall,
  Mail,
  MapPin,
  Hammer,
  BrickWall,
  Leaf,
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
  Play,
} from "lucide-react";

const PHONE_DISPLAY = "480-227-7319";
const PHONE_HREF = "tel:+14802277319";
const EMAIL = "jcazlandscape@yahoo.com";
const EMAIL_HREF = `mailto:${EMAIL}`;
const LOCATION = "Phoenix, AZ";
const INSTAGRAM = "https://www.instagram.com/jcarizonalandscape/";
const FACEBOOK = "https://www.facebook.com/100083666319172/";

const services = [
  {
    key: "hardscaping",
    enTitle: "Hardscaping",
    esTitle: "Hardscape",
    enDesc: "Patios, walkways, retaining walls and outdoor upgrades built to last.",
    esDesc: "Patios, andadores, muros de contención y mejoras exteriores hechas para durar.",
  },
  {
    key: "pavers",
    enTitle: "Pavers",
    esTitle: "Adoquín (Pavers)",
    enDesc: "Clean layouts and professional installation for patios, driveways and paths.",
    esDesc: "Diseño limpio e instalación profesional para patios, cocheras y pasillos.",
  },
  {
    key: "turf",
    enTitle: "Artificial Turf",
    esTitle: "Pasto Artificial",
    enDesc: "Low-maintenance turf that stays green year-round.",
    esDesc: "Pasto de bajo mantenimiento que se mantiene verde todo el año.",
  },
  {
    key: "irrigation",
    enTitle: "Irrigation",
    esTitle: "Irrigación",
    enDesc: "Efficient irrigation installs and fixes to keep your landscape healthy.",
    esDesc: "Instalación y reparación de riego para mantener tu jardín en buen estado.",
  },
  {
    key: "travertine",
    enTitle: "Travertine",
    esTitle: "Travertino",
    enDesc: "Premium stone finishes for patios, pool areas and outdoor living spaces.",
    esDesc: "Acabados premium en piedra para patios, albercas y áreas exteriores.",
  },
  {
    key: "outdoorliving",
    enTitle: "Outdoor Living",
    esTitle: "Áreas Sociales",
    enDesc: "BBQs, pergolas and fire pits to turn your yard into a true gathering space.",
    esDesc: "Asadores, pérgolas y fogateros para convertir tu patio en un espacio para convivir.",
  },
  {
    key: "maintenance",
    enTitle: "Maintenance & Cleanups",
    esTitle: "Mantenimiento y Limpiezas",
    enDesc: "Residential & commercial maintenance, cleanups, weed control and HOA support.",
    esDesc: "Mantenimiento residencial y comercial, limpiezas, control de maleza y apoyo a HOA.",
  },
];

const processSteps = [
  { en: "Call / Message", es: "Llama / Mensaje", icon: PhoneCall },
  { en: "On-Site Visit", es: "Visita al Sitio", icon: MapPin },
  { en: "Free Estimate", es: "Cotización Gratis", icon: FileText },
  { en: "Build & Walkthrough", es: "Construcción y Entrega", icon: HardHat },
];

const serviceIconByKey: Record<string, any> = {
  hardscaping: Hammer,
  pavers: BrickWall,
  turf: Leaf,
  irrigation: Droplet,
  travertine: FileText,
  outdoorliving: Flame,
  maintenance: Wrench,
};

export default function Home() {
  return (
    <main
  className="relative min-h-screen text-brand-white bg-brand-black"
  style={{
    backgroundImage: `
      /* Diagonal rays (very subtle) */
      repeating-linear-gradient(
        115deg,
        rgba(15, 99, 0, 0.12) 0px,
        rgba(15, 99, 0, 0.12) 1px,
        transparent 1px,
        transparent 110px
      ),

      /* Top-left glow */
      radial-gradient(900px circle at 10% 10%, rgba(15, 99, 0, 0.40), transparent 62%),

      /* Top-right glow */
      radial-gradient(850px circle at 92% 12%, rgba(15, 99, 0, 0.26), transparent 62%),

      /* Mid-left glow */
      radial-gradient(900px circle at 18% 55%, rgba(15, 99, 0, 0.22), transparent 66%),

      /* Mid-right glow */
      radial-gradient(950px circle at 92% 58%, rgba(15, 99, 0, 0.20), transparent 66%),

      /* Bottom-left glow */
      radial-gradient(1100px circle at 22% 115%, rgba(15, 99, 0, 0.22), transparent 68%),

      /* Bottom-right glow (deeper scroll) */
      radial-gradient(1200px circle at 85% 175%, rgba(15, 99, 0, 0.18), transparent 70%)
    `,
  }}
>

    <div className="relative z-10">
      {/* Content */}
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
              <a className="hover:text-brand-white" href="#process">
                <span className="en">Process</span>
                <span className="es">Proceso</span>
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
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
                  >
                    <Images className="h-4 w-4 text-brand-green" />
                    <span className="hidden sm:inline">Gallery</span>
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
        <span className="en">Hardscaping & Outdoor Living Built to Last.</span>
        <span className="es">Hardscape y Exteriores Hechos Para Durar.</span>
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
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-3 font-extrabold text-brand-white hover:bg-brand-green/90"
        >
          <ArrowUpRight className="h-4 w-4 text-brand-white" />
          <span className="en">Get a Free Estimate</span>
          <span className="es">Pedir Cotización</span>
        </a>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-xl border border-brand-white/15 px-5 py-3 font-extrabold text-brand-white hover:border-brand-white/30"
        >
          <PhoneCall className="h-4 w-4 text-brand-green" />
          <span className="en">Call {PHONE_DISPLAY}</span>
          <span className="es">Llama {PHONE_DISPLAY}</span>
        </a>

         {/* Gallery button (mobile-first, premium placement) */}
      <div className="mt-5 md:hidden">
        <a
          href="/gallery"
          className="inline-flex items-center gap-2 rounded-xl border border-brand-green/30 bg-brand-black/40 px-4 py-2
                     text-sm font-semibold text-brand-white backdrop-blur
                     hover:border-brand-green hover:bg-brand-white/5"
        >
          <Images className="h-4 w-4 text-brand-green" />
          <span className="en">Gallery</span>
          <span className="es">Galeria</span>
        </a>
      </div>
      </div>

      {/* Trust badges */}
      <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-brand-white/85 md:grid-cols-4">
        {[
          { en: "Licensed", es: "Licenciados", icon: BadgeCheck },
          { en: "Insured", es: "Asegurados", icon: ShieldCheck },
          { en: "Warranty", es: "Garantía", icon: Clock },
          { en: "Financing Available", es: "Financiamiento", icon: FileText },
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
      </div>
    </div>

    {/* Video card */}
    <div className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-6">
      <p className="text-sm text-brand-white/70">
        <span className="en">Watch a quick intro and see recent work.</span>
        <span className="es">Mira una breve presentación y trabajos recientes.</span>
      </p>

      <div className="flex md:justify-end">
        <HeroVideo mp4Src="/videos/hero-intro.mp4" posterSrc="/images/hero-poster.jpg" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
        >
          <span className="inline-flex items-center gap-2">
            <Instagram className="h-4 w-4 text-brand-green" />
            Instagram
          </span>
        </a>

        <a
          href={FACEBOOK}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
        >
          <span className="inline-flex items-center gap-2">
            <Facebook className="h-4 w-4 text-brand-green" />
            Facebook
          </span>
        </a>
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
              const Ico = serviceIconByKey[s.key] ?? Wrench;

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
                <span className="en">About JCAZ</span>
                <span className="es">Sobre JCAZ</span>
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

            {/* Values row (extra trust) */}
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                { en: "Professionalism", es: "Profesionalismo", icon: HardHat },
                { en: "Integrity", es: "Integridad", icon: ShieldCheck },
                { en: "Excellence", es: "Excelencia", icon: BadgeCheck },
              ].map((v) => {
                const Ico = v.icon;
                return (
                  <div key={v.en} className="flex items-center gap-2 rounded-2xl border border-brand-white/10 bg-brand-white/5 p-4">
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

        {/* PROCESS */}
        <section id="process" className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-green" />
            <h2 className="text-2xl font-extrabold">
              <span className="en">Our Process</span>
              <span className="es">Nuestro Proceso</span>
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, i) => {
              const Ico = step.icon;
              return (
                <div
                  key={step.en}
                  className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-extrabold text-brand-white/90">
                      <span className="en">Step {i + 1}</span>
                      <span className="es">Paso {i + 1}</span>
                    </p>
                    <Ico className="h-5 w-5 text-brand-green" />
                  </div>

                  <p className="mt-2 font-extrabold">
                    <span className="en">{step.en}</span>
                    <span className="es">{step.es}</span>
                  </p>

                  <p className="mt-2 text-sm text-brand-white/70">
                    <span className="en">Fast communication and clear next steps.</span>
                    <span className="es">Comunicación rápida y pasos claros.</span>
                  </p>
                </div>
              );
            })}
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
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="overflow-hidden rounded-2xl border border-brand-white/10 bg-brand-white/5"
              >
                <div className="relative h-44">
                  <Image
                    src={`/images/projects/project-${String(n).padStart(2, "0")}.jpg`}
                    alt={`Project ${n}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-4">
                  <p className="flex items-center gap-2 font-extrabold">
                    <ArrowUpRight className="h-4 w-4 text-brand-green" />
                    <span className="en">Project {n}</span>
                    <span className="es">Proyecto {n}</span>
                  </p>
                  <p className="mt-1 text-sm text-brand-white/70">
                    <span className="en">Phoenix Area • Outdoor Upgrade</span>
                    <span className="es">Área de Phoenix • Mejora Exterior</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

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

              <form className="grid gap-3 md:grid-cols-2">
                <input
                  className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60"
                  placeholder="First Name / Nombre"
                />
                <input
                  className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60"
                  placeholder="Last Name / Apellido"
                />
                <input
                  className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60 md:col-span-2"
                  placeholder="Phone / Teléfono"
                />
                <input
                  className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60 md:col-span-2"
                  placeholder="Email"
                />
                <textarea
                  className="min-h-28 rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-green/60 md:col-span-2"
                  placeholder="Project details / Detalles del proyecto"
                />
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 font-extrabold text-brand-white hover:bg-brand-green/90 md:col-span-2"
                  type="button"
                >
                  <ArrowUpRight className="h-4 w-4 text-brand-white" />
                  <span className="en">Submit</span>
                  <span className="es">Enviar</span>
                </button>

                <p className="md:col-span-2 text-xs text-brand-white/60">
                  <span className="en">Tip: include your city and the service you need for faster scheduling.</span>
                  <span className="es">Tip: agrega tu ciudad y el servicio que necesitas para agendar más rápido.</span>
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
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
        </footer>
      </div>
      </div>
      </div>
    </main>

  );
}