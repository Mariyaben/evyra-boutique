"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./cart-context";
import { CartDrawer } from "./cart-drawer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/our-story", label: "Our Story" },
];

export function Navbar() {
  const pathname = usePathname();
  const { totalCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header
        className="relative z-40 border-b border-white/60 bg-[radial-gradient(circle_at_top_left,#fdf4ea_0,#f6e2d6_35%,#f6c2cf_80%)]/90 backdrop-blur-2xl shadow-[0_18px_60px_rgba(190,120,150,0.35)]"
        onMouseLeave={() => setIsShopOpen(false)}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-evyra-forest text-xs font-semibold tracking-[0.18em] text-evyra-ivory">
              EB
            </span>
            <div>
              <Link
                href="/"
                className="font-display text-xl tracking-[0.14em] text-evyra-forest uppercase"
              >
                Evyra Boutique
              </Link>
              <p className="text-xs text-evyra-ink/60">
                Bridal & occasionwear atelier
              </p>
            </div>
          </div>
          <nav
            className="relative hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.22em] text-evyra-ink/70 md:flex"
          >
            {navLinks.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#", "/"));
              const isShop = item.label === "Shop";
              return (
                <div
                  key={item.href}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => isShop && setIsShopOpen(true)}
                >
                  <Link
                    href={item.href}
                    className={
                      active || isShopOpen && isShop
                        ? "text-evyra-forest"
                        : "hover:text-evyra-forest/80"
                    }
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>
          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden inline-flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-evyra-forest transition-all ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-5 bg-evyra-forest transition-all ${isSidebarOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-evyra-forest transition-all ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
          
          {/* Bag button - desktop only */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-evyra-ink/10 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-evyra-ink shadow-sm hover:bg-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-evyra-gold" />
            Bag
            {totalCount > 0 && (
              <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-evyra-forest px-1 text-[11px] font-semibold text-evyra-ivory">
                {totalCount}
              </span>
            )}
          </button>
        </div>
        {isShopOpen && (
          <div className="absolute inset-x-0 top-full z-30 border-b border-white/60 bg-[radial-gradient(circle_at_top_left,#fdf4ea_0,#f6e2d6_35%,#f6c2cf_80%)] shadow-[0_28px_110px_rgba(190,120,150,0.35)]">
            <div className="mx-auto max-w-6xl px-10 py-8 text-[11px]">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.26em] text-evyra-forest/70">
                    Shop Evyra
                  </p>
                  <p className="font-display text-lg tracking-tight text-evyra-ink">
                    Curated silhouettes, ready for your story.
                  </p>
                </div>
                <Link
                  href="/shop"
                  className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.24em] text-evyra-ink/70 hover:text-evyra-forest"
                >
                  View all pieces
                </Link>
              </div>
              <div className="grid gap-10 md:grid-cols-4">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-evyra-forest/70">
                    New & notable
                  </p>
                  <ul className="space-y-1.5 text-evyra-ink/80">
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        New arrivals
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Ready to ship
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Limited editions
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-evyra-forest/70">
                    Bridal silhouettes
                  </p>
                  <ul className="space-y-1.5 text-evyra-ink/80">
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Gowns & trains
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Lehengas
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Reception looks
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Pre-wedding edits
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-evyra-forest/70">
                    Craft stories
                  </p>
                  <ul className="space-y-1.5 text-evyra-ink/80">
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Zardosi work
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Handloom silks
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Lightweight tulle
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-evyra-forest/70">
                    Accessories & services
                  </p>
                  <ul className="space-y-1.5 text-evyra-ink/80">
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Veils & dupattas
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-evyra-forest">
                        Belts & jewellery notes
                      </Link>
                    </li>
                    <li>
                      <Link href="/checkout" className="hover:text-evyra-forest">
                        Private appointment
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <nav className="fixed left-0 top-0 h-screen w-64 bg-evyra-ivory z-40 shadow-xl flex flex-col p-6 pt-20 md:hidden">
            {/* Close button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-6 right-6 p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-evyra-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation links */}
            <div className="space-y-4 flex-1">
              <Link
                href="/"
                onClick={() => setIsSidebarOpen(false)}
                className={`block text-sm font-medium uppercase tracking-[0.22em] transition ${
                  pathname === "/"
                    ? "text-evyra-forest"
                    : "text-evyra-ink/70 hover:text-evyra-forest"
                }`}
              >
                Home
              </Link>
              <Link
                href="/shop"
                onClick={() => setIsSidebarOpen(false)}
                className={`block text-sm font-medium uppercase tracking-[0.22em] transition ${
                  pathname === "/shop"
                    ? "text-evyra-forest"
                    : "text-evyra-ink/70 hover:text-evyra-forest"
                }`}
              >
                Shop
              </Link>
              <Link
                href="/our-story"
                onClick={() => setIsSidebarOpen(false)}
                className={`block text-sm font-medium uppercase tracking-[0.22em] transition ${
                  pathname === "/our-story"
                    ? "text-evyra-forest"
                    : "text-evyra-ink/70 hover:text-evyra-forest"
                }`}
              >
                Our Story
              </Link>
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsSidebarOpen(false);
                }}
                className="block w-full text-left text-sm font-medium uppercase tracking-[0.22em] text-evyra-ink/70 hover:text-evyra-forest transition"
              >
                Bag ({totalCount})
              </button>
            </div>
          </nav>
        </>
      )}
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
