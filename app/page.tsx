"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "../lib/products";

const collections = [
  {
    id: "bridal-gowns",
    name: "Bridal Gowns",
    image: "/evylenga2.png",
  },
  {
    id: "reception-dresses",
    name: "Reception Dresses",
    image: "/evydress.png",
  },
  {
    id: "sangeet-mehendi",
    name: "Sangeet & Mehendi",
    image: "/evysari.png",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/evysari.png",
  },
];

export default function Home() {
  return (
    <div className="home-page space-y-16 md:space-y-24">
      <section className="hero-section relative mx-[calc(50%-50vw)] w-screen overflow-hidden bg-evyra-shell/5 px-6 py-10 shadow-[0_26px_90px_rgba(15,23,42,0.35)] md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Mobile hero image */}
          <Image
            src="/hero-mobile.png"
            alt="Soft bridal fabric backdrop"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="block object-cover hero-image md:hidden"
          />
          {/* Desktop / tablet hero image */}
          <Image
            src="/evyra-fabric.jpg"
            alt="Soft bridal fabric backdrop"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="hidden object-cover hero-image md:block"
          />
          <div className="absolute inset-0 hero-gradient-mask" />
        </div>
        {/* Minimal overlay for mobile hero */}
        <div className="hero-mobile-overlay pointer-events-none absolute inset-x-10 top-24 z-10 text-center text-evyra-ivory md:hidden">
          <p className="text-[0.78rem] uppercase tracking-[0.28em] text-white/80">
            For the bride
          </p>
          <p className="mt-3 font-display text-3xl leading-snug tracking-tight text-white">
            Heirloom pieces for luminous ceremonies.
          </p>
          <Link
            href="/shop"
            className="pointer-events-auto mx-auto mt-5 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/90 px-6 py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-evyra-ink shadow-sm"
          >
            Shop now
          </Link>
        </div>

        {/* Detailed hero copy (desktop and tablet) */}
        <div className="hero-content relative hidden max-w-xl space-y-6 md:relative md:block">
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
          <div className="hero-actions flex flex-wrap items-center gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-evyra-forest px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-evyra-ivory shadow-md transition hover:bg-evyra-forest/95"
            >
              Begin your journey
            </Link>
            <Link
              href="/our-story"
              className="text-xs font-medium uppercase tracking-[0.22em] text-evyra-ink/80 hover:text-evyra-forest"
            >
              Discover our story
            </Link>
          </div>
          <div className="hero-meta mt-4 flex flex-wrap gap-6 text-xs text-evyra-ink/70">
            <div>
              <p className="uppercase tracking-[0.2em]">Appointments</p>
              <p>By private viewing in New York & Mumbai.</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em]">Jewellery</p>
              <p>Shop jewellery accents to complete your look.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-[calc(50%-50vw)] w-screen bg-evyra-ivory/95 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-evyra-shell/40 shadow-[0_24px_70px_rgba(15,23,42,0.32)]">
            <Image
              src="/evyra-fabric2.png"
              alt="Statement bridal jewellery styled on model"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              unoptimized
              className="object-cover object-[60%_center]"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
                Couture fabric library
              </p>
              <h2 className="font-display text-3xl tracking-[0.22em] text-evyra-ink md:text-4xl">
                SCULPTED IN SILK & TULLE
              </h2>
              <p className="text-sm leading-relaxed text-evyra-ink/80 md:text-base">
                From whisper–light organza to hand–loomed silks, every Evyra gown
                begins with rare fabrics sourced from small mills and dyed to our
                own palette of shell, rose and ink.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-evyra-forest/40 bg-evyra-forest px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-evyra-ivory shadow-sm transition hover:bg-evyra-forest/95 hover:shadow-md"
              >
                Explore fabrics
              </Link>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-evyra-ink/60">
                Hand–loomed weaves · Silk–rich blends · Cloud–light layers
              </p>
            </div>

            <div className="grid gap-4 text-xs text-evyra-ink/80 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="uppercase tracking-[0.2em] text-evyra-forest/80">
                  Sheer veils
                </p>
                <p>Airy tulles and nets that float with every step.</p>
              </div>
              <div className="space-y-1">
                <p className="uppercase tracking-[0.2em] text-evyra-forest/80">
                  Liquid silks
                </p>
                <p>Bias–cut satins that drape like water across the body.</p>
              </div>
              <div className="space-y-1">
                <p className="uppercase tracking-[0.2em] text-evyra-forest/80">
                  Textured layers
                </p>
                <p>Organza, jacquard and hand–quilted panels for volume.</p>
              </div>
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
        <div className="featured-grid grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id} className="group space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.25rem] bg-evyra-shell/40 shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 100vw"
                    className="object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div className="space-y-1 text-center md:text-left">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-evyra-forest/70">
                  {product.category}
                </p>
                <p className="font-display text-base tracking-tight text-evyra-ink">
                  {product.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-[calc(50%-50vw)] w-screen bg-evyra-ivory/95 py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-24 px-6 md:space-y-32 md:px-10">
          <div className="relative aspect-[21/9] overflow-hidden rajasthani-frame">
            <video
              src="/Bridal_Wear_Video_Generation.mp4"
              className="absolute inset-0 h-full w-full object-cover evyra-film-video"
              autoPlay
              muted
              playsInline
              loop
            />
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
                Collections
              </p>
              <h2 className="font-display text-2xl tracking-tight text-evyra-ink md:text-3xl">
                Explore our signature categories.
              </h2>
            </div>

            <div className="collections-grid grid gap-8 md:grid-cols-4">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href="/shop"
                  className="group space-y-3"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-evyra-shell/40 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-center text-sm font-medium tracking-[0.18em] text-evyra-ink">
                    {collection.name}
                    <span className="ml-2">→</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-[calc(50%-50vw)] w-screen bg-evyra-ivory px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl space-y-10 md:space-y-12">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
              Signature saree edit
            </p>
            <h2 className="font-display text-2xl tracking-[0.22em] text-evyra-ink md:text-3xl lg:text-4xl">
              LUMINOUS HANDWOVEN SILKS
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-evyra-ink/80 md:text-base">
              A luminous edit of handwoven silks and brocades, reimagined in fluid, shoulder-skimming
              drapes and soft metallics that move like liquid light across the body.
            </p>
          </div>

          <div className="silk-grid grid gap-6 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden bg-evyra-shell/40 shadow-[0_26px_90px_rgba(15,23,42,0.32)]">
              <Image
                src="/evysaree2.png"
                alt="Handwoven silk saree in rose tone"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-evyra-shell/40 shadow-[0_26px_90px_rgba(15,23,42,0.32)]">
              <Image
                src="/evygoldsaree.png"
                alt="Handwoven silk saree in antique gold tone"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
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
              techniques, zardosi, aari, handloom weaving, into silhouettes that
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
              Many pieces are designed to be restyled, shortened, layered or
              reworn for future celebrations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

