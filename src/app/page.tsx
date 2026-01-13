import Image from "next/image";
import { HeroVideo } from "../components/sections/HeroVideo";



export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white">
      <header className="sticky top-0 z-50 border-b border-brand-white/10 bg-brand-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
        <Image
          src="/brand/logo-main.png"
          alt="JCAZ Landscape LLC"
          width={140}
          height={32}
          priority
          className="h-10 w-auto"
        />
      </a>


          <nav className="hidden gap-6 text-sm text-brand-white/80 md:flex">
            <a className="hover:text-brand-white" href="#services">Services</a>
            <a className="hover:text-brand-white" href="#process">Process</a>
            <a className="hover:text-brand-white" href="#projects">Projects</a>
            <a className="hover:text-brand-white" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+1XXXXXXXXXX"
              className="rounded-xl border border-brand-white/15 px-3 py-2 text-sm text-brand-white/90 hover:border-brand-white/30"
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-brand-gold px-3 py-2 text-sm font-bold text-brand-black hover:bg-brand-gold/90"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">

          <div>
            <p className="mb-3 inline-flex rounded-full border border-brand-white/15 px-3 py-1 text-xs text-brand-white/80">
              Arizona • Licensed / Insured • Fast Scheduling
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Outdoor & Construction Work Built to Last.
            </h1>

            <p className="mt-4 text-brand-white/80">
              Clear estimates, clean execution, and a crew you can trust. Serving Arizona with quality craftsmanship.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-brand-gold px-5 py-3 font-bold text-brand-black hover:bg-brand-gold/90"
              >
                Get a Free Estimate
              </a>
              <a
                href="#services"
                className="rounded-xl border border-brand-white/15 px-5 py-3 font-bold text-brand-white hover:border-brand-white/30"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-brand-white/85 md:grid-cols-4">
              {["Licensed", "Insured", "Warranty", "Free Estimates"].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-brand-white/10 bg-brand-white/5 p-3"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-6">
            <p className="text-sm text-brand-white/70">
              
            </p>
            <div className="flex md:justify-end">
            <HeroVideo mp4Src="/videos/hero-intro.mp4" posterSrc="/images/hero-poster.jpg" />
            </div>



          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold">Services</h2>
        <p className="mt-2 text-brand-white/75">
          Select a service and request a free estimate.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Hardscaping", "Pavers", "Artificial Turf", "Grading", "Concrete", "Outdoor Lighting"].map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-5 hover:border-brand-white/20"
            >
              <p className="font-bold">{s}</p>
              <p className="mt-2 text-sm text-brand-white/70">
                Short benefit line for conversion. (We’ll replace with real copy.)
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-bold text-brand-gold hover:text-brand-gold/90"
              >
                Get Estimate →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold">Our Process</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Call / Form", "Site Visit", "Estimate", "Build & Walkthrough"].map((step, i) => (
            <div
              key={step}
              className="rounded-2xl border border-brand-white/10 bg-brand-white/5 p-5"
            >
              <p className="text-brand-gold font-bold">Step {i + 1}</p>
              <p className="mt-2 font-bold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold">Recent Projects</h2>

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
                <p className="font-bold">Project {n}</p>
                <p className="mt-1 text-sm text-brand-white/70">City • Service type</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-brand-white/10 bg-brand-white/5 p-6 md:p-10">
          <h2 className="text-2xl font-extrabold">Get a Free Estimate</h2>
          <p className="mt-2 text-brand-white/75">
            Send your details and we’ll contact you shortly.
          </p>

          <form className="mt-6 grid gap-3 md:grid-cols-2">
            <input
              className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-gold/60"
              placeholder="Name"
            />
            <input
              className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-gold/60"
              placeholder="Phone"
            />
            <input
              className="rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-gold/60 md:col-span-2"
              placeholder="Email (optional)"
            />
            <textarea
              className="min-h-28 rounded-xl border border-brand-white/10 bg-brand-black/40 px-4 py-3 outline-none placeholder:text-brand-white/40 focus:border-brand-gold/60 md:col-span-2"
              placeholder="Tell us about your project..."
            />
            <button
              className="rounded-xl bg-brand-gold px-5 py-3 font-extrabold text-brand-black hover:bg-brand-gold/90 md:col-span-2"
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-brand-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-brand-white/75">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} JCAZ Landscape LLC</p>
            <p className="text-brand-white/60">Arizona • (Phone) • (Email)</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
