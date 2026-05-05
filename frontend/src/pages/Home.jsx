import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LemonSqueezeAnim from "../components/LemonSqueezeAnim";
import Marquee from "../components/Marquee";
import ProductCard from "../components/ProductCard";
import { FEATURED } from "../data/products";

export default function Home() {
  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: text */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-sqz-pink text-white btl rounded-full px-4 py-1 font-display font-bold uppercase tracking-wider text-sm shadow-brutal-sm"
              data-testid="hero-tag"
            >
              squiiz by Lemon Jelly
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-7xl sm:text-8xl lg:text-[10rem] leading-[0.85] mt-4 text-sqz-ink"
              data-testid="hero-title"
            >
              SQ
              <span className="text-sqz-pink">Z</span>
              <span className="block text-outline">SQUIZZ!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl mt-6 text-sqz-ink/90"
              data-testid="hero-slogan"
            >
              When life gives you lemon
              <span className="text-sqz-pink">...</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-base sm:text-lg max-w-md mt-3 text-sqz-ink/80 font-body"
            >
              ...nós fazemos bijutaria, capas e acessórios cheios de cor e
              boa-disposição. Espreme a tua personalidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/produtos"
                className="bg-sqz-pink text-white btl rounded-full px-7 py-3 font-display font-bold text-lg sm:text-xl uppercase tracking-wider shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all"
                data-testid="hero-cta-produtos"
              >
                Ver Produtos →
              </Link>
              <a
                href="#sobre"
                className="bg-white text-sqz-ink btl rounded-full px-7 py-3 font-display font-bold text-lg sm:text-xl uppercase tracking-wider shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all"
                data-testid="hero-cta-sobre"
              >
                Sobre Nós
              </a>
            </motion.div>

            {/* Sticker decoration */}
            <motion.div
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 right-0 sm:right-8 lg:right-0 bg-sqz-blue text-white btl rounded-2xl px-4 py-2 font-display font-bold text-sm sm:text-base shadow-brutal-sm hidden sm:block"
              data-testid="hero-sticker"
            >
              🍋 100% suminho
            </motion.div>
          </div>

          {/* Right: lemon animation card */}
          <div className="relative">
            <div
              className="relative bg-sqz-yellow btl rounded-3xl shadow-brutal-lg p-6 sm:p-10 aspect-square sm:aspect-auto sm:min-h-[480px] overflow-hidden"
              data-testid="hero-lemon-card"
            >
              {/* polka dot bg */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(#151515 1.5px, transparent 1.5px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative h-full flex items-center justify-center">
                <LemonSqueezeAnim />
              </div>
              <div className="absolute bottom-4 left-4 bg-white btl rounded-full px-4 py-1 font-display font-bold text-xs sm:text-sm shadow-brutal-sm">
                ▶ animação ao vivo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee
        items={[
          "SQUEEEZE!",
          "SQZ THEM!",
          "WHEN LIFE GIVES YOU LEMON...",
          "🍋",
          "SQUIZZ",
          "by Lemon Jelly",
        ]}
        bg="#151515"
        color="#FBD503"
      />

      {/* SOBRE NÓS */}
      <section
        id="sobre"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        data-testid="sobre-section"
      >
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-2 bg-sqz-pink text-white btl rounded-3xl p-8 shadow-brutal flex flex-col justify-between">
            <div>
              <span className="inline-block bg-white text-sqz-ink btl rounded-full px-3 py-1 font-display font-bold text-xs uppercase tracking-wider">
                Sobre Nós
              </span>
              <h2 className="font-display font-bold text-5xl sm:text-6xl mt-4 leading-none">
                Olá, somos a <span className="text-sqz-yellow">SQZ</span>!
              </h2>
            </div>
            <p className="font-display text-xl mt-6 opacity-90">
              Acreditamos que a vida deve ser tão colorida como uma limonada
              fresquinha 🍋
            </p>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            <div className="bg-white btl rounded-3xl p-6 shadow-brutal">
              <div className="w-12 h-12 rounded-full bg-sqz-blue btl flex items-center justify-center font-display font-bold text-white text-xl mb-3">
                01
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">A vibe</h3>
              <p className="text-sqz-ink/80">
                Cores fortes, peças divertidas e um sorriso garantido sempre que
                te olhares ao espelho.
              </p>
            </div>
            <div className="bg-sqz-yellow btl rounded-3xl p-6 shadow-brutal">
              <div className="w-12 h-12 rounded-full bg-sqz-ink text-sqz-yellow btl flex items-center justify-center font-display font-bold text-xl mb-3">
                02
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">A magia</h3>
              <p className="text-sqz-ink">
                Cada peça é pensada para espremer ao máximo a tua personalidade.
                Sem medo. Sem regras.
              </p>
            </div>
            <div className="bg-sqz-green btl rounded-3xl p-6 shadow-brutal">
              <div className="w-12 h-12 rounded-full bg-white btl flex items-center justify-center font-display font-bold text-xl mb-3">
                03
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">A missão</h3>
              <p className="text-sqz-ink">
                Transformar dias cinzentos em dias amarelos. Quando a vida te
                dá limões... <span className="font-bold">SQZ them!</span>
              </p>
            </div>
            <div className="bg-sqz-lavender btl rounded-3xl p-6 shadow-brutal">
              <div className="w-12 h-12 rounded-full bg-sqz-pink text-white btl flex items-center justify-center font-display font-bold text-xl mb-3">
                04
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">O squiiz</h3>
              <p className="text-sqz-ink">
                Inspirado no espírito{" "}
                <span className="font-bold">"squiiz by Lemon Jelly"</span> —
                pop, brincalhão e sempre fora da caixa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        data-testid="featured-section"
      >
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-block bg-sqz-blue text-white btl rounded-full px-3 py-1 font-display font-bold text-xs uppercase tracking-wider shadow-brutal-sm">
              SQZ Picks
            </span>
            <h2 className="font-display font-bold text-5xl sm:text-7xl leading-none mt-3">
              Frescos & <span className="text-sqz-pink">sumarentos</span>
            </h2>
          </div>
          <Link
            to="/produtos"
            className="bg-sqz-ink text-sqz-yellow btl rounded-full px-6 py-3 font-display font-bold uppercase tracking-wider shadow-brutal-sm hover:-translate-y-1 transition-transform"
            data-testid="featured-view-all"
          >
            Ver tudo →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURED.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Bottom marquee */}
      <Marquee
        items={["🍋", "SQUEEEZE EVERYTHING", "🍋", "FRESH DROP", "🍋", "SQZ x YOU"]}
        bg="#FC6CA7"
        color="#FFFFFF"
      />
    </main>
  );
}
