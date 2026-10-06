import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import { CursorGlow } from "@/src/components/cursor-glow";
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "Software Solutions for Modern Businesses",
    template: "%s | SeedStack Labz",
  },
  description:
    "Custom software development and ready-to-use business software solutions for modern businesses.",
  icons: { icon: "/logos/logo.png", apple: "/logos/logo.png" },
  openGraph: {
    title: "SeedStack Labz",
    description: "Thoughtful software for the way your business works.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} dark`}>
      <body>
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

