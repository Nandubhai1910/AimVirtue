import type { Metadata } from "next";
import { Bricolage_Grotesque, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/sections/Navbar";
import VolumeToggle from "@/src/components/VolumeToggle";
import { SoundProvider } from "@/src/hooks/SoundContext";
import LenisProvider from "../components/providers/LenisProvider";
import { Analytics } from "@vercel/analytics/next";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AimVirtue – Talent Ecosystem for Life",
  description:
    "AimVirtue helps students, early talent, and professionals discover purpose, build future skills, and grow into impactful leaders. From career discovery to leadership — one ecosystem that grows with you.",
  keywords: [
    "AimVirtue",
    "Career Development",
    "Skill Development",
    "Purpose Discovery",
    "Leadership Growth",
    "Students",
    "Early Talent",
    "Corporate Training",
    "University Partnerships",
  ],
  authors: [{ name: "AimVirtue Team" }],
  creator: "AimVirtue",
  publisher: "AimVirtue",
  metadataBase: new URL("https://www.aimvirtue.com"),
  openGraph: {
    title: "AimVirtue – Talent Ecosystem for Life",
    description:
      "Discover purpose. Grow skills. Lead with impact. AimVirtue supports your growth journey from education to leadership.",
    url: "https://www.aimvirtue.com",
    siteName: "AimVirtue",
    images: [
      {
        url: "/aimvirtue-og-image.png",
        width: 1200,
        height: 630,
        alt: "AimVirtue Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AimVirtue – Talent Ecosystem for Life",
    description:
      "Discover purpose. Grow skills. Lead with impact. AimVirtue supports your journey from education to leadership.",
    images: ["/av-logo.png"],
  },
  icons: {
    icon: "/av-logo.png",
  },
  alternates: {
    canonical: "https://www.aimvirtue.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${lato.variable}`}>
      <body className="font-sans">
        <SoundProvider>
          <LenisProvider>
            <div className="relative min-h-screen">
              <Navbar />
              <main className="relative">{children}</main>
              <VolumeToggle />
            </div>
          </LenisProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
