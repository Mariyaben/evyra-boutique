"use client";

import { FormEvent, useState } from "react";
import { useCart } from "../../components/cart-context";
import { productsById } from "../../lib/products";

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subtotal = items.reduce((sum, item) => {
    const product = productsById[item.productId];
    if (!product) return sum;
    return sum + product.price * item.quantity;
  }, 0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    clear();
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-xl space-y-6 rounded-[2rem] border border-white/70 bg-evyra-ivory/90 px-6 py-8 text-center shadow-[0_22px_80px_rgba(15,23,42,0.22)] md:px-10 md:py-10">
        <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
          Thank you
        </p>
        <h1 className="font-display text-2xl tracking-tight text-evyra-ink md:text-3xl">
          Your appointment request has been sent.
        </h1>
        <p className="text-sm leading-relaxed text-evyra-ink/75">
          Our styling team will reach out within 24 hours with available
          appointment slots, tailoring details and next steps for your Evyra
          look.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-evyra-forest/70">
            Confirm your details
          </p>
          <h1 className="font-display text-3xl tracking-tight text-evyra-ink">
            Reserve your Evyra pieces.
          </h1>
          <p className="text-sm leading-relaxed text-evyra-ink/70 md:text-base">
            This is a styling appointment request rather than an instant
            checkout. Share your details and we will confirm availability,
            alterations and delivery timelines.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-[0.2em] text-evyra-ink/70">
                First name
              </label>
              <input
                required
                className="h-10 w-full rounded-full border border-evyra-ink/15 bg-white/80 px-4 text-sm text-evyra-ink outline-none ring-0 focus:border-evyra-forest/70"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-[0.2em] text-evyra-ink/70">
                Last name
              </label>
              <input
                required
                className="h-10 w-full rounded-full border border-evyra-ink/15 bg-white/80 px-4 text-sm text-evyra-ink outline-none ring-0 focus:border-evyra-forest/70"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-[0.2em] text-evyra-ink/70">
              Email address
            </label>
            <input
              type="email"
              required
              className="h-10 w-full rounded-full border border-evyra-ink/15 bg-white/80 px-4 text-sm text-evyra-ink outline-none ring-0 focus:border-evyra-forest/70"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-[0.2em] text-evyra-ink/70">
              Ceremony city
            </label>
            <input
              required
              className="h-10 w-full rounded-full border border-evyra-ink/15 bg-white/80 px-4 text-sm text-evyra-ink outline-none ring-0 focus:border-evyra-forest/70"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-[0.2em] text-evyra-ink/70">
              Wedding date (or month)
            </label>
            <input
              type="text"
              required
              className="h-10 w-full rounded-full border border-evyra-ink/15 bg-white/80 px-4 text-sm text-evyra-ink outline-none ring-0 focus:border-evyra-forest/70"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-[0.2em] text-evyra-ink/70">
              Notes for your stylist
            </label>
            <textarea
              rows={4}
              className="w-full rounded-3xl border border-evyra-ink/15 bg-white/80 px-4 py-3 text-sm text-evyra-ink outline-none ring-0 focus:border-evyra-forest/70"
              placeholder="Share your venue, outfit inspirations or ceremony rituals youd like us to honour."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-evyra-forest px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-evyra-ivory shadow-md transition hover:bg-evyra-forest/95"
          >
            Submit appointment request
          </button>
        </form>
      </section>

      <aside className="space-y-4 rounded-[2rem] border border-white/70 bg-evyra-ivory/90 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.22)] md:p-7">
        <h2 className="font-display text-lg tracking-tight text-evyra-ink">
          Your curated rail
        </h2>
        {items.length === 0 ? (
          <p className="text-sm text-evyra-ink/70">
            Your bridal bag is currently empty. Return to the gowns to add
            pieces youd like to explore in your appointment.
          </p>
        ) : (
          <ul className="space-y-3 text-sm text-evyra-ink/80">
            {items.map((item) => {
              const product = productsById[item.productId];
              if (!product) return null;
              return (
                <li
                  key={item.productId}
                  className="flex items-center justify-between gap-2"
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-xs text-evyra-ink/60">
                      {product.category} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold">
                    ${(product.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
        <div className="mt-4 flex items-center justify-between border-t border-white/70 pt-4 text-sm">
          <span className="text-evyra-ink/70">Estimated total</span>
          <span className="font-semibold text-evyra-ink">
            ${subtotal.toFixed(2)}
          </span>
        </div>
      </aside>
    </div>
  );
}
