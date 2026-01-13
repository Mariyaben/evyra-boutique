"use client";

import { Product } from "../lib/products";
import { useCart } from "./cart-context";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.24)]">
      <div className="mb-4 space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-evyra-forest/60">
          {product.category}
        </p>
        <h3 className="font-display text-lg tracking-tight text-evyra-ink">
          {product.name}
        </h3>
        <p className="text-sm text-evyra-ink/70">{product.shortDescription}</p>
        {product.tags && product.tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-evyra-shell/60 px-2 py-0.5 text-[11px] font-medium text-evyra-ink/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between pt-2">
        <p className="text-sm font-semibold text-evyra-ink">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={() => addItem(product.id)}
          className="inline-flex items-center gap-2 rounded-full bg-evyra-forest px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-evyra-ivory shadow-md transition group-hover:bg-evyra-forest/95"
        >
          <span>Reserve</span>
        </button>
      </div>
    </article>
  );
}
