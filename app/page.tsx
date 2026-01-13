"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "../lib/products";
import { ProductCard } from "../components/product-card";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="relative mx-[calc(50%-50vw)] w-screen overflow-hidden bg-evyra-shell/5 px-6 py-10 shadow-[0_26px_90px_rgba(15,23,42,0.35)] md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/evyra-fabric.jpg"
            alt="Soft bridal fabric backdrop"
            fill
            priority
            sizes="100vw"
            className="object-cover hero-image"
          />
          <div className="absolute inset-0 hero-gradient-mask" />
        </div>
        <div className="relative max-w-xl space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
            Evyra Boutique · Bridal 2025
          </p>
          <h1 className="font-display text-3xl leading-tight tracking-tight text-evyra-ink md:text-4xl lg:text-5xl">
            Heirloom silhouettes for the modern bride.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-evyra-ink/80 md:text-base">
            Evyra curates made-to-measure gowns, lehengas and ceremony pieces
            that honour craft while feeling impossibly light to wear. Each look
            is designed for movement, laughter and long, sparkling evenings.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-evyra-forest px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-evyra-ivory shadow-md transition hover:bg-evyra-forest/95"
            >
              Begin your journey
            </Link>
            <Link
              href="#story"
              className="text-xs font-medium uppercase tracking-[0.22em] text-evyra-ink/80 hover:text-evyra-forest"
            >
              Discover our story
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-xs text-evyra-ink/70">
            <div>
              <p className="uppercase tracking-[0.2em]">Appointments</p>
              <p>By private viewing in New York & Mumbai.</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em]">Lead time</p>
              <p>10–14 weeks · artisan crafted.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-evyra-forest/70">
              New at Evyra
            </p>
            <h2 className="font-display text-2xl tracking-tight text-evyra-ink">
              Curated looks for your day.
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-medium uppercase tracking-[0.22em] text-evyra-ink/70 hover:text-evyra-forest"
          >
            View all pieces
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-[calc(50%-50vw)] w-screen overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-4 pb-3 md:px-10">
          <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
            Film at Evyra
          </p>
        </div>
        <video
          src="/Bridal_Wear_Video_Generation.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          controls
        />
      </section>

      <section
        id="story"
        className="rounded-[2.5rem] border border-white/70 bg-evyra-ivory/85 px-6 py-8 shadow-[0_22px_80px_rgba(15,23,42,0.16)] md:px-10 md:py-10"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
              The Evyra way
            </p>
            <h2 className="font-display text-2xl tracking-tight text-evyra-ink">
              Crafted between continents, grounded in ritual.
            </h2>
            <p className="text-sm leading-relaxed text-evyra-ink/75 md:text-base">
              Evyra works with small ateliers across India to bring heirloom
              techniques—zardosi, aari, handloom weaving—into silhouettes that
              move with you. From first sketch to final fitting, each gown is
              tailored to your rhythm, your ceremony, your version of forever.
            </p>
          </div>
          <div className="space-y-3 text-xs text-evyra-ink/70">
            <p className="uppercase tracking-[0.2em]">Private appointments</p>
            <p>
              Share your date, venue and moodboard. Our stylists curate three to
              five looks before you even step into the atelier.
            </p>
            <p className="uppercase tracking-[0.2em]">Beyond the wedding day</p>
            <p>
              Many pieces are designed to be restyled—shortened, layered or
              reworn for future celebrations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

