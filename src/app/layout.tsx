import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
<link rel="icon" href="/favicon.png" />

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JC Arizona Landscape",
  description: "Hardscaping & Outdoor Living",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

