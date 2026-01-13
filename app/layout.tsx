import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppShell } from "../components/app-shell";

const evyraSans = DM_Sans({
  variable: "--font-evyra-sans",
  subsets: ["latin"],
});

const evyraDisplay = Playfair_Display({
  variable: "--font-evyra-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evyra Boutique",
  description: "A modern bridal and occasionwear boutique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${evyraSans.variable} ${evyraDisplay.variable} antialiased`}
      >
        <div className="relative min-h-screen text-evyra-ink">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-evyra-shell/70 blur-3xl" />
            <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-evyra-rose/65 blur-3xl" />
            <div className="absolute left-1/3 bottom-[-10rem] h-72 w-72 rounded-full bg-evyra-gold/35 blur-3xl" />
          </div>
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
