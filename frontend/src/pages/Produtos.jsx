import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { CATEGORIES, PRODUCTS } from "../data/products";

const CATEGORY_COLORS = {
  all: "#FBD503",
  colares: "#FC6CA7",
  brincos: "#6889EC",
  aneis: "#B2D801",
  capas: "#D0B2FF",
  acessorios: "#FE8E04",
};

export default function Produtos() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  const accent = CATEGORY_COLORS[active] || "#FBD503";

  return (
    <div className="pt-32 bg-sqz-bg" data-testid="produtos-page">
      {/* Header */}
      <header className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-16 sm:pb-20">
        <Reveal>
          <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-pink mb-5 font-bold">
            Catálogo · SS 26
          </p>
          <h1
            className="font-display text-[20vw] sm:text-[14vw] lg:text-[11rem] leading-[0.82] tracking-tightest text-sqz-ink"
            data-testid="produtos-title"
          >
            Coleção{" "}
            <span
              className="text-sqz-yellow"
              style={{ WebkitTextStroke: "3px #0a0a0a" }}
            >
              SQZ
            </span>
          </h1>
          <p className="mt-6 text-sqz-ink font-light max-w-xl text-base sm:text-lg">
            <span className="font-display text-sqz-pink">{PRODUCTS.length} peças.</span>{" "}
            5 categorias. Uma única filosofia: espremer cor, atitude e
            personalidade em cada detalhe.
          </p>
        </Reveal>
      </header>

      <div className="hairline max-w-[1600px] mx-auto" />

      {/* Filters */}
      <div
        className="sticky top-16 z-40 bg-sqz-bg/90 backdrop-blur-xl border-b border-sqz-line"
        data-testid="filter-bar"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5 flex items-center gap-2 sm:gap-4 overflow-x-auto no-scroll-bar">
          {CATEGORIES.map((c) => {
            const isActive = active === c.id;
            const color = CATEGORY_COLORS[c.id];
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative whitespace-nowrap text-xs tracking-[0.25em] uppercase py-2 px-4 transition-all font-bold border-2 ${
                  isActive
                    ? "text-sqz-ink border-sqz-ink"
                    : "text-sqz-mute border-transparent hover:text-sqz-ink hover:border-sqz-ink/30"
                }`}
                style={isActive ? { background: color } : {}}
                data-testid={`filter-button-${c.id}`}
              >
                {c.label}
                <span className="ml-2 text-[10px] opacity-70">
                  {c.id === "all"
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === c.id).length}
                </span>
              </button>
            );
          })}
          <div className="ml-auto hidden sm:block text-[10px] tracking-[0.3em] uppercase text-sqz-mute font-semibold">
            <span style={{ color: accent, fontWeight: 700 }}>{filtered.length}</span> resultados
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
            <p className="font-display text-5xl text-sqz-mute">Nada encontrado.</p>
          </div>
        )}
      </section>

      {/* End line */}
      <section className="border-t border-sqz-line bg-sqz-yellow">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 text-center">
          <p className="font-display text-5xl sm:text-7xl leading-tight tracking-tightest text-sqz-ink">
            <span className="font-serif-italic font-normal">Squizz.</span>{" "}
            <span className="text-sqz-pink">end of feed.</span>
          </p>
        </div>
      </section>
    </div>
  );
}
