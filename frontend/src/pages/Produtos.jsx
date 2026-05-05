import React, { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/products";

export default function Produtos() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14" data-testid="produtos-page">
      {/* Header */}
      <header className="mb-10">
        <span className="inline-block bg-sqz-yellow btl rounded-full px-4 py-1 font-display font-bold text-sm uppercase tracking-wider shadow-brutal-sm">
          🍋 Catálogo SQZ
        </span>
        <h1 className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl leading-[0.9] mt-3" data-testid="produtos-title">
          Os nossos <span className="text-sqz-pink">produtos</span>
        </h1>
        <p className="font-body text-lg mt-3 max-w-2xl text-sqz-ink/80">
          Cada peça é uma fatia de sumo. Escolhe a tua cor, a tua vibe e <strong>SQZ</strong> bem alto.
        </p>
      </header>

      {/* Filters */}
      <div
        className="flex flex-wrap gap-3 mb-10 sticky top-20 z-40 py-2"
        data-testid="filter-bar"
      >
        {CATEGORIES.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`btl rounded-full px-5 py-2 font-display font-bold uppercase tracking-wider text-sm sm:text-base shadow-brutal-sm transition-all hover:-translate-y-1 ${
                isActive ? "text-white" : "bg-white text-sqz-ink hover:bg-sqz-yellow"
              }`}
              style={isActive ? { background: c.color, color: c.id === "all" ? "#151515" : "#fff" } : {}}
              data-testid={`filter-button-${c.id}`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        data-testid="products-grid"
      >
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20" data-testid="empty-state">
          <p className="font-display font-bold text-3xl">
            Nada por aqui... ainda 🍋
          </p>
        </div>
      )}

      {/* Footer CTA banner */}
      <div className="mt-20 bg-sqz-ink text-white btl rounded-3xl p-8 sm:p-12 shadow-brutal text-center relative overflow-hidden" data-testid="bottom-cta">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#FBD503 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <h3 className="relative font-display font-bold text-4xl sm:text-6xl text-sqz-yellow leading-none">
          SQUEEEZE!
        </h3>
        <p className="relative font-display text-xl sm:text-2xl mt-3">
          When life gives you lemon... <span className="text-sqz-pink">SQZ them!</span>
        </p>
      </div>
    </main>
  );
}
