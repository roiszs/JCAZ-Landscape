export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-wide">
            <span className="text-brand-fg">JCAZ</span>
            <span className="text-brand-yellow">.</span>
          </div>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#process">Process</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+1XXXXXXXXXX"
              className="rounded-xl border border-white/15 px-3 py-2 text-sm text-white/90 hover:border-white/30"
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-brand-yellow px-3 py-2 text-sm font-semibold text-black hover:bg-brand-yellow2"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
              Arizona • Licensed / Insured • Fast Scheduling
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Outdoor & Construction Work Built to Last.
            </h1>
            <p className="mt-4 text-white/80">
              Clear estimates, clean execution, and a crew you can trust. Serving Arizona with quality craftsmanship.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-brand-yellow px-5 py-3 font-semibold text-black hover:bg-brand-yellow2"
              >
                Get a Free Estimate
              </a>
              <a
                href="#services"
                className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white hover:border-white/30"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/85 md:grid-cols-4">
              <div className="rounded-xl border border-white/10 p-3">Licensed</div>
              <div className="rounded-xl border border-white/10 p-3">Insured</div>
              <div className="rounded-xl border border-white/10 p-3">Warranty</div>
              <div className="rounded-xl border border-white/10 p-3">Free Estimates</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/70">Aquí irá: imagen/slider tipo AZTop (proyectos reales).</p>
            <div className="mt-4 h-64 rounded-xl bg-black/40" />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="mt-2 text-white/75">Select a service and request a free estimate.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Hardscaping", "Pavers", "Artificial Turf", "Grading", "Concrete", "Outdoor Lighting"].map((s) => (
            <div key={s} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20">
              <p className="font-semibold">{s}</p>
              <p className="mt-2 text-sm text-white/70">
                Short benefit line for conversion. (We’ll replace with real copy.)
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Our Process</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Call / Form", "Site Visit", "Estimate", "Build & Walkthrough"].map((step, i) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-brand-yellow font-semibold">Step {i + 1}</p>
              <p className="mt-2 font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Recent Projects</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="h-44 bg-black/40" />
              <div className="p-4">
                <p className="font-semibold">Project {n}</p>
                <p className="mt-1 text-sm text-white/70">City • Service type</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <h2 className="text-2xl font-bold">Get a Free Estimate</h2>
          <p className="mt-2 text-white/75">Send your details and we’ll contact you shortly.</p>

          <form className="mt-6 grid gap-3 md:grid-cols-2">
            <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/25" placeholder="Name" />
            <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/25" placeholder="Phone" />
            <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/25 md:col-span-2" placeholder="Email (optional)" />
            <textarea className="min-h-28 rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/25 md:col-span-2" placeholder="Tell us about your project..." />
            <button className="rounded-xl bg-brand-yellow px-5 py-3 font-semibold text-black hover:bg-brand-yellow2 md:col-span-2">
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/75">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} JCAZ Landscape LLC</p>
            <p className="text-white/60">Arizona • (Phone) • (Email)</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
