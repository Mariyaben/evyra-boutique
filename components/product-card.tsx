"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../lib/products";
import { useCart } from "./cart-context";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col">
      <Link href={`/shop/${product.id}`} className="flex flex-col">
        {product.image && (
          <div className="relative overflow-hidden bg-evyra-shell/40">
            <div className="relative aspect-[3/5] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full bg-white/80 px-2 py-1 text-xs tracking-[0.18em] text-evyra-ink/70 shadow-sm backdrop-blur-sm transition hover:bg-white"
              aria-label="Save to favourites"
              onClick={(event) => event.preventDefault()}
            >
              ♡
            </button>
          </div>
        )}

        <div className="mt-3 md:mt-4 space-y-1">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-evyra-ink/60">
            {product.category}
          </p>
          <h3 className="font-display text-xs md:text-sm tracking-tight text-evyra-ink truncate">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-evyra-ink">
            ${product.price.toFixed(0)}
          </p>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => addItem(product.id)}
        className="mt-3 inline-flex w-max items-center rounded-full border border-evyra-ink/20 bg-white/70 px-3 md:px-4 py-1.5 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] md:tracking-[0.22em] text-evyra-ink/80 shadow-sm transition hover:border-evyra-forest/60 hover:text-evyra-forest whitespace-nowrap"
      >
        Ready to ship
      </button>
    </article>
  );
}
