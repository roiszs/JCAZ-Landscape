import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JC Arizona Landscape",
  description: "Hardscaping & Outdoor Living",
  icons: {
    icon: "/favicon-jcaz-2026.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-jcaz-2026.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon-jcaz-2026.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}


