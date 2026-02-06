import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JC Arizona Landscape | Landscaping & Hardscaping in Arizona",
  description:
    "JC Arizona Landscape offers professional landscaping, hardscaping, outdoor living and yard services in Arizona. Free estimates available.",

  icons: {
    icon: "/favicon-jcaz-2026.ico",
  },

  openGraph: {
    title: "JC Arizona Landscape | Landscaping & Hardscaping",
    description:
      "Professional landscaping and hardscaping services in Arizona. Free estimates.",
    url: "https://www.jcazlandscape.co",
    siteName: "JC Arizona Landscape",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


