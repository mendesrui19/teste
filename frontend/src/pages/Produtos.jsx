import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { CATEGORIES, PRODUCTS } from "../data/products";

export default function Produtos() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="pt-32" data-testid="produtos-page">
      {/* Header */}
      <header className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-16 sm:pb-20">
        <Reveal>
          <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-accent mb-5">
            Catálogo · SS 26
          </p>
          <h1
            className="font-display text-[18vw] sm:text-[12vw] lg:text-[10rem] leading-[0.82] tracking-tightest"
            data-testid="produtos-title"
          >
            Coleção <span className="italic text-sqz-accent">SQZ</span>
          </h1>
          <p className="mt-6 text-sqz-mute font-light max-w-xl">
            {PRODUCTS.length} peças. 5 categorias. Uma única filosofia: espremer
            cor, atitude e personalidade em cada detalhe.
          </p>
        </Reveal>
      </header>

      <div className="hairline max-w-[1600px] mx-auto" />

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-sqz-bg/85 backdrop-blur-xl border-b border-sqz-line" data-testid="filter-bar">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5 flex items-center gap-2 sm:gap-6 overflow-x-auto no-scroll-bar">
          {CATEGORIES.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative whitespace-nowrap text-xs tracking-[0.25em] uppercase py-2 px-1 transition-colors ${
                  isActive ? "text-sqz-accent" : "text-sqz-mute hover:text-sqz-ink"
                }`}
                data-testid={`filter-button-${c.id}`}
              >
                {c.label}
                <span
                  className={`absolute left-0 right-0 -bottom-1 h-px transition-all duration-500 ${
                    isActive ? "bg-sqz-accent" : "bg-transparent"
                  }`}
                />
                <span className="ml-2 text-[10px] text-sqz-mute/70">
                  {c.id === "all"
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === c.id).length}
                </span>
              </button>
            );
          })}
          <div className="ml-auto hidden sm:block text-[10px] tracking-[0.3em] uppercase text-sqz-mute">
            {filtered.length} resultados
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 sm:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16"
            data-testid="products-grid"
          >
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i * 0.04, 0.4)}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-32" data-testid="empty-state">
            <p className="font-display text-4xl text-sqz-mute">Nada encontrado.</p>
          </div>
        )}
      </section>

      {/* End line */}
      <section className="border-t border-sqz-line">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 text-center">
          <p className="font-display text-5xl sm:text-7xl leading-tight tracking-tightest">
            <span className="italic text-sqz-accent">Squizz.</span>{" "}
            <span className="text-sqz-mute">end of feed.</span>
          </p>
        </div>
      </section>
    </div>
  );
}
