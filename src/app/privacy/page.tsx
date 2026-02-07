export const metadata = {
    title: "Privacy Policy | JC Arizona Landscape",
  };
  
  export default function PrivacyPage() {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-brand-white">
        <h1 className="mb-6 text-3xl font-extrabold">Privacy Policy</h1>
  
        <p className="mb-4 text-brand-white/80">
          At JC Arizona Landscape, we respect your privacy and are committed to
          protecting the personal information you share with us.
        </p>
  
        <h2 className="mt-8 mb-3 text-xl font-bold">Information We Collect</h2>
        <p className="text-brand-white/80">
          When you submit a form on our website, we may collect personal
          information such as your name, phone number, email address, project
          address, and details related to your request.
        </p>
  
        <h2 className="mt-8 mb-3 text-xl font-bold">How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-brand-white/80">
          <li>To respond to inquiries and provide estimates</li>
          <li>To contact you regarding your landscaping project</li>
          <li>To improve our services and customer experience</li>
        </ul>
  
        <h2 className="mt-8 mb-3 text-xl font-bold">Data Protection</h2>
        <p className="text-brand-white/80">
          Your information is never sold or shared with third parties. We take
          reasonable measures to protect your data from unauthorized access.
        </p>
  
        <h2 className="mt-8 mb-3 text-xl font-bold">Contact</h2>
        <p className="text-brand-white/80">
          If you have any questions about this Privacy Policy, please contact us
          directly through our website.
        </p>
  
        <p className="mt-10 text-sm text-brand-white/50">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    );
  }
  