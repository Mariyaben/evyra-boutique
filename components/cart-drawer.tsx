"use client";

import { useCart } from "./cart-context";
import { productsById } from "../lib/products";
import Link from "next/link";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, setQuantity, removeItem } = useCart();

  const subtotal = items.reduce((sum, item) => {
    const product = productsById[item.productId];
    if (!product) return sum;
    return sum + product.price * item.quantity;
  }, 0);

  return (
    <div
      className={`fixed inset-0 z-40 transition ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-evyra-ivory/95 shadow-[0_24px_80px_rgba(15,23,42,0.35)] border-l border-white/60 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pb-4 pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-evyra-forest/70">
              Your bridal bag
            </p>
            <h2 className="font-display text-xl tracking-tight text-evyra-ink">
              Selected pieces
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-evyra-ink/10 bg-white/60 px-3 py-1 text-xs font-medium text-evyra-ink/80 shadow-sm hover:bg-white"
          >
            Close
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-6 pb-6">
          {items.length === 0 && (
            <p className="text-sm text-evyra-ink/60">
              Your bag feels light. Start with a gown that makes your
              heart pause.
            </p>
          )}
          {items.map((item) => {
            const product = productsById[item.productId];
            if (!product) return null;
            return (
              <div
                key={item.productId}
                className="flex items-start justify-between gap-3 rounded-2xl bg-white/70 p-3 shadow-sm"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-evyra-forest/60">
                    {product.category}
                  </p>
                  <p className="font-medium text-evyra-ink">{product.name}</p>
                  <p className="text-xs text-evyra-ink/60">
                    {product.shortDescription}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-evyra-ink">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-evyra-shell/40 px-2 py-1 text-xs text-evyra-ink/80">
                    <button
                      onClick={() => setQuantity(item.productId, item.quantity - 1)}
                      className="h-6 w-6 rounded-full border border-evyra-ink/10 text-center text-xs"
                    >
                      –
                    </button>
                    <span className="w-6 text-center text-xs font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(item.productId, item.quantity + 1)}
                      className="h-6 w-6 rounded-full border border-evyra-ink/10 text-center text-xs"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-[11px] text-evyra-ink/60 hover:text-evyra-ink/90"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-white/60 bg-white/80 px-6 py-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-evyra-ink/70">Estimated total</span>
            <span className="font-semibold text-evyra-ink">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <Link
            href="/checkout"
            onClick={onClose}
            className="mt-4 flex h-11 items-center justify-center rounded-full bg-evyra-forest text-sm font-medium text-evyra-ivory shadow-md transition hover:bg-evyra-forest/90"
          >
            Proceed to checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
