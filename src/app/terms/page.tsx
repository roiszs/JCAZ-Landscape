export const metadata = {
    title: "Terms & Conditions | JC Arizona Landscape",
  };
  
  export default function TermsPage() {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-brand-white">
        <h1 className="mb-6 text-3xl font-extrabold">Terms & Conditions</h1>
  
        <p className="mb-4 text-brand-white/80">
          By accessing and using the JC Arizona Landscape website, you agree to the
          following terms and conditions.
        </p>
  
        <h2 className="mt-8 mb-3 text-xl font-bold">Services</h2>
        <p className="text-brand-white/80">
          JC Arizona Landscape provides landscaping and outdoor services. All
          estimates provided through this website are free and non-binding.
        </p>
  
        <h2 className="mt-8 mb-3 text-xl font-bold">User Responsibilities</h2>
        <p className="text-brand-white/80">
          You agree to provide accurate and truthful information when submitting
          forms on this website.
        </p>
  
        <h2 className="mt-8 mb-3 text-xl font-bold">Limitation of Liability</h2>
        <p className="text-brand-white/80">
          JC Arizona Landscape is not responsible for any damages arising from the
          use or inability to use this website.
        </p>
  
        <h2 className="mt-8 mb-3 text-xl font-bold">Changes to Terms</h2>
        <p className="text-brand-white/80">
          We reserve the right to update these terms at any time without prior
          notice.
        </p>
  
        <p className="mt-10 text-sm text-brand-white/50">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    );
  }
  