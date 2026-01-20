import { ReactNode } from "react";

export default function BrandBackground({ children }: { children: ReactNode }) {
  return (
    <main
      className="relative min-h-screen text-brand-white bg-brand-black"
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
      <div className="relative z-10">{children}</div>
    </main>
  );
}
