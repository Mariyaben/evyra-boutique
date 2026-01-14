"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { productsById } from "../../../lib/products";
import { useCart } from "../../../components/cart-context";

type RouteParams = {
  id: string;
};

export default function ProductPage() {
  const params = useParams<RouteParams>();
  const product = productsById[params.id];

  if (!product) {
    notFound();
  }

  const { addItem } = useCart();

  const specs: { label: string; value: string }[] = [
    {
      label: "Category",
      value: product.category,
    },
    {
      label: "Craft",
      value:
        product.tags?.join(" · ") ??
        "Hand-finished in the Evyra Atelier with archival detailing.",
    },
    {
      label: "Silhouette",
      value:
        product.category === "Bridal Gown"
          ? "Sweeping bridal silhouette designed to trail softly across courtyards."
          : product.category === "Reception Dress"
          ? "Fluid reception-ready silhouette that moves with candlelight."
          : product.category === "Sangeet & Mehendi"
          ? "Playful, movement-led silhouette for courtyard celebrations."
          : "Lightweight styling piece to layer with your heirloom wardrobe.",
    },
    {
      label: "Delivery",
      value: "Ships in 7–10 business days from our Jaipur studio.",
    },
  ];

  return (
    <div className="mt-6 md:mt-10 -mx-4 md:-mx-8 overflow-hidden rounded-3xl bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-stretch">
        <div className="relative h-full bg-evyra-shell/40">
          <div className="relative aspect-[3/4] w-full md:aspect-[4/5] md:h-full">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center md:object-[60%_center]"
              />
            )}
          </div>
          <div className="pointer-events-none absolute inset-x-6 bottom-6 flex justify-between text-[10px] uppercase tracking-[0.22em] text-white/80 drop-shadow-sm">
            <span>{product.category}</span>
            <span>Evyra Boutique · Jaipur</span>
          </div>
        </div>

        <div className="space-y-6 px-4 py-6 md:space-y-8 md:px-8 md:py-10">
          <header className="space-y-4 border-b border-evyra-ink/10 pb-5">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-evyra-ink/60 transition hover:text-evyra-forest"
            >
              <span className="text-sm">←</span>
              <span>Back to shop</span>
            </Link>
            <p className="text-[11px] uppercase tracking-[0.22em] text-evyra-ink/60">
              {product.category}
            </p>
            <h1 className="font-display text-2xl md:text-3xl tracking-tight text-evyra-ink">
              {product.name}
            </h1>
            <p className="max-w-xl text-sm text-evyra-ink/80">
              {product.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
              <span className="text-lg font-semibold text-evyra-ink">
                ${product.price.toFixed(0)}
              </span>
              <span className="rounded-full bg-evyra-shell/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-evyra-forest">
                Ready to ship
              </span>
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-evyra-ink/70">
              Specifications
            </h2>
            <dl className="grid grid-cols-1 gap-4 text-sm text-evyra-ink/80 md:grid-cols-2">
              {specs.map((spec) => (
                <div key={spec.label} className="space-y-1">
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-evyra-ink/50">
                    {spec.label}
                  </dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="space-y-3">
            <button
              type="button"
              onClick={() => addItem(product.id)}
              className="inline-flex w-full items-center justify-center rounded-full border border-evyra-ink/80 bg-evyra-ink px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-evyra-ivory shadow-[0_18px_40px_rgba(42,31,27,0.65)] transition hover:bg-evyra-forest hover:border-evyra-forest md:w-max md:px-10"
            >
              Add to trousseau
            </button>
            <p className="text-[11px] uppercase tracking-[0.22em] text-evyra-ink/60">
              Complimentary global shipping on bridal silhouettes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

