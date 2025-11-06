import type { Metadata } from "next";
import { Bricolage_Grotesque, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/sections/Navbar";
import VolumeToggle from "@/src/components/VolumeToggle";
import { SoundProvider } from "@/src/hooks/SoundContext";
import LenisProvider from "../components/providers/LenisProvider";

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
  title: "AimVirture",
  description: "Developed With lots of Love by Nandu",
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
