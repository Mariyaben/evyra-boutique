"use client";

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
        <footer className="border-t border-white/60 bg-evyra-ivory/80 py-6 text-xs text-evyra-ink/70">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 md:flex-row md:px-8">
            <p>© {new Date().getFullYear()} Evyra Boutique. Crafted with care.</p>
            <p className="uppercase tracking-[0.18em]">For the modern bride.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}
