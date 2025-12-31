import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JCAZ Landscape LLC | Arizona",
  description: "High-quality outdoor and construction services in Arizona. Free estimates.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
