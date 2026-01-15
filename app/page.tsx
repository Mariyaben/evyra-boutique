"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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

const heroImages = [
  "/evygoldsaree.png",
  "/hero-mobile3.png",
  "/evysaree2.png",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page space-y-16 md:space-y-24">
      <section className="hero-section relative mx-[calc(50%-50vw)] w-screen overflow-hidden bg-evyra-shell/5 py-0 px-0 md:px-10 md:py-16 md:shadow-[0_26px_90px_rgba(15,23,42,0.35)] shadow-none md:bg-evyra-shell/5">
        {/* Mobile hero image carousel */}
        <div className="md:hidden pointer-events-none relative">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt="Soft bridal fabric backdrop"
                width={1080}
                height={1200}
                priority={index === 0}
                unoptimized
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
          
          {/* Carousel indicators */}
          <div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-3 h-2"
                    : "bg-white/50 w-2 h-2 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop / tablet hero background */}
        <div className="hidden md:block pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/evyra-fabric.jpg"
            alt="Soft bridal fabric backdrop"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover hero-image"
          />
          <div className="absolute inset-0 hero-gradient-mask" />
        </div>
        
        {/* Minimal overlay for mobile hero */}
        <div className="hero-mobile-overlay pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2 z-10 text-center md:hidden">
          <div className="absolute inset-0 -z-10 hero-gradient-mask blur-2xl opacity-80" />
          <p className="text-xs uppercase tracking-[0.28em] text-white/90 animate-fadeInSlow" style={{animationDuration: '1.2s', animationFillMode: 'both'}}>
            Evyra Boutique
          </p>
          <p className="mt-4 font-display text-3xl leading-snug tracking-tight text-white drop-shadow-lg animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.2s', animationFillMode: 'both'}}>
            Heirloom pieces for luminous ceremonies.
          </p>
          <Link
            href="/shop"
            className="pointer-events-auto mx-auto mt-6 inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm px-8 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-white shadow-md hover:bg-white/20 transition animate-riseGently"
            style={{animationDuration: '1.8s', animationDelay: '0.4s', animationFillMode: 'both'}}
          >
            Shop now
          </Link>
        </div>

        {/* Scroll invitation - downward arrow */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 z-10 md:hidden">
          <div className="animate-bounce">
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Detailed hero copy (desktop and tablet) */}
        <div className="hero-content relative hidden max-w-xl space-y-6 md:relative md:block">
          <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70 animate-fadeInSlow" style={{animationDuration: '1.2s', animationFillMode: 'both'}}>
            Evyra Boutique · Bridal 2025
          </p>
          <h1 className="font-display text-3xl leading-tight tracking-tight text-evyra-ink md:text-4xl lg:text-5xl animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.2s', animationFillMode: 'both'}}>
            Heirloom silhouettes for the modern bride.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-evyra-ink/80 md:text-base animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.3s', animationFillMode: 'both'}}>
            Evyra curates made-to-measure gowns, lehengas and ceremony pieces
            that honour craft while feeling impossibly light to wear. Each look
            is designed for movement, laughter and long, sparkling evenings.
          </p>
          <div className="hero-actions flex flex-wrap items-center gap-3 animate-riseGently" style={{animationDuration: '1.8s', animationDelay: '0.5s', animationFillMode: 'both'}}>
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
          <div className="hero-meta mt-4 flex flex-wrap gap-6 text-xs text-evyra-ink/70 animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.4s', animationFillMode: 'both'}}>
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

      {/* Mobile-only couture fabric intro section */}
      <section className="md:hidden bg-evyra-ivory/95 px-6 py-1">
        <div className="space-y-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70 animate-fadeInSlow" style={{animationDuration: '1.2s', animationFillMode: 'both'}}>
              Couture fabric library
            </p>
            <h2 className="font-display text-3xl tracking-[0.22em] text-evyra-ink animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.2s', animationFillMode: 'both'}}>
              SCULPTED IN SILK & TULLE
            </h2>
            <p className="text-sm leading-relaxed text-evyra-ink/80 animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.3s', animationFillMode: 'both'}}>
              From whisper–light organza to hand–loomed silks, every Evyra gown
              begins with rare fabrics sourced from small mills and dyed to our
              own palette of shell, rose and ink.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-[calc(50%-50vw)] w-screen bg-evyra-ivory/95 px-6 py-12 md:px-10 md:py-16 md:pt-12 pt-0">
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

          <div className="space-y-6 hidden md:block">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70 animate-fadeInSlow" style={{animationDuration: '1.2s', animationFillMode: 'both'}}>
                Couture fabric library
              </p>
              <h2 className="font-display text-3xl tracking-[0.22em] text-evyra-ink md:text-4xl animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.2s', animationFillMode: 'both'}}>
                SCULPTED IN SILK & TULLE
              </h2>
              <p className="text-sm leading-relaxed text-evyra-ink/80 md:text-base animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.3s', animationFillMode: 'both'}}>
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
            <p className="text-xs uppercase tracking-[0.22em] text-evyra-forest/70 animate-fadeInSlow" style={{animationDuration: '1.2s', animationFillMode: 'both'}}>
              New at Evyra
            </p>
            <h2 className="font-display text-2xl tracking-tight text-evyra-ink animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.2s', animationFillMode: 'both'}}>
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
              <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70 animate-fadeInSlow" style={{animationDuration: '1.2s', animationFillMode: 'both'}}>
                Collections
              </p>
              <h2 className="font-display text-2xl tracking-tight text-evyra-ink md:text-3xl animate-fadeInSlow" style={{animationDuration: '1.5s', animationDelay: '0.2s', animationFillMode: 'both'}}>
                Explore our signature categories.
              </h2>
            </div>

            <div className="collections-grid grid gap-8 grid-cols-2 md:grid-cols-4">
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

