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
    <div className="space-y-10 md:space-y-14">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
          The Evyra rail
        </p>
        <h1 className="font-display text-3xl tracking-tight text-evyra-ink md:text-4xl">
          Gowns, lehengas & reception looks.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-evyra-ink/70 md:text-base">
          Explore signature silhouettes across ceremony, sangeet, mehendi and
          intimate celebrations. Every piece can be tailored to length, sleeve
          and detailing at your appointment.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {productCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] transition ${
              selectedCategory === category
                ? "border-evyra-forest bg-evyra-forest text-evyra-ivory shadow-md"
                : "border-evyra-ink/15 bg-white/70 text-evyra-ink/70 hover:border-evyra-forest/60 hover:text-evyra-forest"
            }`}
          >
            {category === "All" ? "All pieces" : category}
          </button>
        ))}
      </div>

      <section className="grid gap-5 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
