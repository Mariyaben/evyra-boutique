"use client";

import { useState } from "react";
import {
  productCategories,
  products,
  ProductCategory,
} from "../../lib/products";
import { ProductCard } from "../../components/product-card";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | "All"
  >("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="shop-page-surface mt-6 md:mt-8 -mx-4 rounded-3xl px-3 md:px-4 py-4 md:py-6 shadow-[0_24px_80px_rgba(15,23,42,0.16)] md:-mx-8 md:px-8 md:py-8">
      <header className="flex flex-col gap-3 md:gap-4 border-b border-evyra-ink/10 pb-3 md:pb-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          <div className="relative">
            <label className="flex items-center gap-1.5 md:gap-2 rounded-full border border-evyra-ink/15 bg-white/70 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] md:tracking-[0.22em] text-evyra-ink/80">
              <span>Category</span>
              <span className="text-xs text-evyra-ink/50">▾</span>
              <select
                value={selectedCategory}
                onChange={(event) =>
                  setSelectedCategory(event.target.value as ProductCategory | "All")
                }
                className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-full border-none bg-transparent text-[10px] md:text-[11px] opacity-0"
              >
                {productCategories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All" ? "All pieces" : category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {["Price", "Color", "Size", "Brand"].map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-full border border-evyra-ink/10 bg-white/60 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] md:tracking-[0.22em] text-evyra-ink/70 hover:border-evyra-forest/50 hover:text-evyra-forest"
            >
              <span>{label}</span>
              <span className="ml-1 text-xs text-evyra-ink/50">▾</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.22em] text-evyra-ink/60">
          <span className="whitespace-nowrap">
            {filteredProducts.length} pieces
          </span>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full border border-evyra-ink/10 bg-white/60 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[11px] font-medium tracking-[0.18em] md:tracking-[0.22em] hover:border-evyra-forest/50 hover:text-evyra-forest"
          >
            <span>Sort</span>
            <span className="text-xs text-evyra-ink/50">▾</span>
          </button>
        </div>
      </header>

      <section className="mt-10 md:mt-12 grid gap-3 md:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
