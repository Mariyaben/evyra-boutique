"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="mx-[calc(50%-50vw)] w-screen overflow-hidden bg-evyra-shell/10 px-6 py-14 shadow-[0_26px_90px_rgba(15,23,42,0.35)] md:px-10 md:py-20">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          <div className="relative z-10 max-w-xl space-y-5">
            <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
              The Evyra story
            </p>
            <h1 className="font-display text-3xl leading-tight tracking-tight text-evyra-ink md:text-4xl lg:text-5xl">
              Born between New York skylines and Indian ateliers.
            </h1>
            <p className="text-sm leading-relaxed text-evyra-ink/80 md:text-base">
              Evyra began as a conversation between continents: the quiet precision
              of New York fittings and the luminous craft of Indian embroidery
              studios. Every piece is a love letter to ceremony, family stories and
              the small, unphotographed moments that make a wedding day yours.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2 rounded-full bg-evyra-forest px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-evyra-ivory shadow-md transition hover:bg-evyra-forest/95"
              >
                Book a private viewing
              </Link>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-evyra-ink/60">
                New York · Mumbai · By appointment only
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-evyra-shell/40 shadow-[0_26px_90px_rgba(15,23,42,0.42)] md:max-w-md">
            <Image
              src="/evyra-fabric2.png"
              alt="Evyra bride in hand-embroidered lehenga"
              fill
              sizes="(min-width: 1024px) 26vw, (min-width: 768px) 38vw, 100vw"
              className="object-cover object-[60%_center]"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/70 bg-evyra-ivory/85 px-6 py-10 shadow-[0_22px_80px_rgba(15,23,42,0.16)] md:px-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_minmax(0,1fr)] md:items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
              The beginning
            </p>
            <h2 className="font-display text-2xl tracking-tight text-evyra-ink md:text-3xl">
              A bridge between heirloom and ease.
            </h2>
            <p className="text-sm leading-relaxed text-evyra-ink/80 md:text-base">
              Evyra was born from a simple question: what if bridalwear could feel
              as considered and storied as an heirloom, yet as effortless as your
              favourite dress? Our founders spent seasons inside family trunks,
              studying old zardosi borders, temple jewellery and woven silks, then
              reimagined them in silhouettes that invite you to dance, breathe and
              move without thinking about the garment.
            </p>
            <p className="text-sm leading-relaxed text-evyra-ink/75 md:text-base">
              Today, each collection is designed in New York and brought to life by
              small ateliers across India. We work in slow, deliberate volumes so
              artisans have the time, space and respect they deserve.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl bg-white/70 p-6 text-xs text-evyra-ink/80 shadow-[0_18px_60px_rgba(15,23,42,0.16)] md:p-7">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-evyra-forest/80">
              Details we hold close
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-evyra-gold" />
                <p>
                  Limited yearly appointments, so each bride receives unrushed
                  fittings and genuinely tailored sketches.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-evyra-gold" />
                <p>
                  Collaborative design calls where we listen first—to your playlists,
                  venues, rituals and the mood of the day.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-evyra-gold" />
                <p>
                  Atelier partners paid above-market rates, with transparent
                  timelines and flexible calendars around their own festivals.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-[calc(50%-50vw)] w-screen bg-evyra-ivory/95 py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-6 md:px-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
              Craft & ateliers
            </p>
            <h2 className="font-display text-2xl tracking-tight text-evyra-ink md:text-3xl">
              Pieces stitched with many hands, worn by one heart.
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-evyra-ink/80 md:text-base">
              From Kolkata weaving clusters to Mumbai embroidery studios, Evyra works
              with multi-generational artisans who carry rare techniques in their
              fingertips. We pair these crafts with featherlight pattern-making, so
              your outfit feels as gentle on the body as it is rich to the eye.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2 rounded-3xl bg-white/70 p-5 text-sm text-evyra-ink/80 shadow-[0_18px_60px_rgba(15,23,42,0.16)]">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-evyra-forest/80">
                Embroidery studios
              </p>
              <p>
                Zardosi, aari and beadwork executed on silk organza, tulle and
                handloom bases so the surface detail never feels heavy.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl bg-white/70 p-5 text-sm text-evyra-ink/80 shadow-[0_18px_60px_rgba(15,23,42,0.16)]">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-evyra-forest/80">
                Weaving clusters
              </p>
              <p>
                Small-batch silks, brocades and tissue weaves, dyed to our
                signature palette of shell, rose, ivory and ink.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl bg-white/70 p-5 text-sm text-evyra-ink/80 shadow-[0_18px_60px_rgba(15,23,42,0.16)]">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-evyra-forest/80">
                Pattern rooms
              </p>
              <p>
                Bias-cut gowns, structured lehengas and versatile separates built to
                be restyled, shortened or layered long after the wedding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/60 bg-evyra-ivory/80 px-6 py-10 shadow-[0_22px_80px_rgba(15,23,42,0.18)] md:px-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
              Quiet luxuries
            </p>
            <h2 className="font-display text-2xl tracking-tight text-evyra-ink md:text-3xl">
              Designed for the moments only you will remember.
            </h2>
            <p className="text-sm leading-relaxed text-evyra-ink/80 md:text-base">
              We think about the way your sleeve brushes your wrist during vows,
              the way a dupatta can be unpinned for the after-party, the way a
              train lifts when you hug an old friend. These are the moments that
              never make it to the album, but stay with you forever—and they are
              where Evyra pieces quietly shine.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl bg-white/60 p-6 text-sm text-evyra-ink/80 shadow-[0_18px_60px_rgba(15,23,42,0.16)] md:p-7">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-evyra-forest/80">
              A note from the atelier
            </p>
            <p className="italic leading-relaxed">
              “We always ask our brides what they want to feel, not just what they
              want to wear. Confident. Soft. Powerful. Like themselves, plus one
              small layer of magic. Everything—from fabric swatches to finishing
              threads—is chosen with that feeling in mind.”
            </p>
          </div>
        </div>
      </section>

      <section className="mx-[calc(50%-50vw)] w-screen bg-evyra-ivory/95 py-14 md:py-18">
        <div className="mx-auto max-w-6xl space-y-8 px-6 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
            Your chapter with Evyra
          </p>
          <h2 className="font-display text-2xl tracking-tight text-evyra-ink md:text-3xl">
            Begin with a conversation, not a catalogue.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-evyra-ink/80 md:text-base">
            Share your date, venue and a few details about how you hope the day
            will feel. Our team curates looks, fabrics and craft stories tailored to
            you—so when you step into the atelier, it already feels a little like
            home.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-full bg-evyra-forest px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-evyra-ivory shadow-md transition hover:bg-evyra-forest/95"
            >
              Request an appointment
            </Link>
            <Link
              href="/shop"
              className="text-xs font-medium uppercase tracking-[0.22em] text-evyra-ink/75 hover:text-evyra-forest"
            >
              Explore current pieces
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
