"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { CartProvider } from "./cart-context";
import { Navbar } from "./navbar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-0 md:px-8 md:pt-0">
          {children}
        </main>
        <footer className="border-t border-white/60 bg-evyra-ivory/90 text-xs text-evyra-ink/75">
          <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-evyra-forest/80">
                  Evyra Boutique
                </p>
                <p className="text-[0.78rem] leading-relaxed">
                  Heirloom-inspired bridal and occasionwear, tailored between New York
                  and Mumbai for ceremonies that linger long after the last song.
                </p>
              </div>

              <div className="flex flex-col gap-1 text-[0.78rem] md:items-center">
                <p className="mb-1 text-[0.7rem] uppercase tracking-[0.22em] text-evyra-forest/80">
                  Explore
                </p>
                <Link href="/shop" className="hover:text-evyra-forest">
                  Shop all pieces
                </Link>
                <Link href="/" className="hover:text-evyra-forest">
                  Bridal collections
                </Link>
                <Link href="#story" className="hover:text-evyra-forest">
                  Our story
                </Link>
                <span className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-evyra-ink/60">
                  By private appointment only
                </span>
              </div>

              <div className="space-y-2 text-[0.78rem] md:text-right">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-evyra-forest/80">
                  Visit & connect
                </p>
                <p>New York · Mumbai · By appointment</p>
                <p>
                  Email: <a href="mailto:hello@evyra.studio" className="underline-offset-4 hover:underline">hello@evyra.studio</a>
                </p>
                <p>
                  Instagram: <a href="https://instagram.com" target="_blank" className="underline-offset-4 hover:underline">@evyra.studio</a>
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/60 pt-4 text-[0.7rem] text-evyra-ink/60 md:flex-row">
              <p>© {new Date().getFullYear()} Evyra Boutique. All rights reserved.</p>
              <p className="uppercase tracking-[0.18em]">Crafted for the modern bride.</p>
            </div>

            <div className="mt-3 border-t border-white/50 pt-3 text-[0.68rem] leading-relaxed text-evyra-ink/60">
              <p>
                This experience is a representational website created by Evyra Private Limited.
                All images showcased are AI generated and intended for conceptual illustration only.
                For further information or collaboration inquiries, please contact Team Evyra via
                {" "}
                <a
                  href="https://www.evyra.in"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-evyra-forest underline-offset-4 hover:underline"
                >
                  www.evyra.in
                </a>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}
