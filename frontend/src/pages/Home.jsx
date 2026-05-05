import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import LemonSqueezeAnim from "../components/LemonSqueezeAnim";
import Marquee from "../components/Marquee";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { FEATURED, PRODUCTS } from "../data/products";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroLemonY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroLemonScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const sobreRef = useRef(null);
  const { scrollYProgress: sobreProg } = useScroll({
    target: sobreRef,
    offset: ["start end", "end start"],
  });
  const sobreImgY = useTransform(sobreProg, [0, 1], ["-12%", "12%"]);

  return (
    <div data-testid="home-page">
      {/* HERO — luminous, white, oversized */}
      <section
        ref={heroRef}
        className="relative h-[110vh] sm:h-[120vh] overflow-hidden bg-sqz-bg"
        data-testid="hero"
      >
        {/* Soft radial glow for warmth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 65% 45%, rgba(240,220,46,0.18) 0%, rgba(240,220,46,0) 70%)",
          }}
          aria-hidden="true"
        />

        {/* Big SVG lemon as hero focal — parallax scaled, pushed off-right */}
        <motion.div
          style={{ y: heroLemonY, scale: heroLemonScale }}
          className="absolute inset-0 flex items-center justify-end pointer-events-none"
        >
          <div className="w-[90vw] sm:w-[55vw] lg:w-[45vw] h-[80%] translate-x-[12%] sm:translate-x-[8%] opacity-90">
            <LemonSqueezeAnim />
          </div>
        </motion.div>

        {/* HUD top */}
        <div className="absolute top-20 inset-x-0 px-6 lg:px-12 flex justify-between text-[10px] tracking-[0.3em] uppercase text-sqz-mute z-20">
          <span>Lisboa · 38.7223° N</span>
          <span>Vol. 01 · 2026</span>
        </div>

        {/* Hero text content */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center max-w-[1600px] mx-auto px-6 lg:px-12"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[10px] tracking-[0.4em] uppercase text-sqz-ink mb-6"
            >
              squiiz · by Lemon Jelly
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="font-display text-[22vw] sm:text-[18vw] lg:text-[15vw] leading-[0.82] tracking-tightest text-sqz-ink"
              data-testid="hero-title"
            >
              S<span className="italic">Q</span>Z
            </motion.h1>
          </div>

          <div className="mt-6 max-w-xl">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-sqz-ink"
                data-testid="hero-slogan"
              >
                When life gives you{" "}
                <span className="italic">lemon</span>
                <span>...</span>
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="text-sqz-mute font-light max-w-md mt-6"
            >
              Bijutaria, capas e acessórios pensados como peças de coleção.
              Editorial. Vibrante. Inesquecível.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="mt-12 flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              to="/produtos"
              className="group relative inline-flex items-center gap-3 px-7 py-4 bg-sqz-ink text-sqz-bg uppercase text-xs tracking-[0.25em] font-semibold hover:bg-sqz-mute transition-colors"
              data-testid="hero-cta-produtos"
            >
              Explorar Coleção
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="#sobre"
              className="inline-flex items-center gap-3 px-7 py-4 border border-sqz-ink text-sqz-ink uppercase text-xs tracking-[0.25em] hover:bg-sqz-ink hover:text-sqz-bg transition-colors"
              data-testid="hero-cta-sobre"
            >
              Sobre Nós
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom HUD */}
        <div className="absolute bottom-10 inset-x-0 px-6 lg:px-12 flex justify-between items-end z-20">
          <div className="text-[10px] tracking-[0.3em] uppercase text-sqz-mute">
            <span className="block">Scroll</span>
            <span className="block w-px h-10 bg-sqz-line mt-2 ml-2" />
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-mute mb-1">
              SQUIZZ · the act of squeezing colour into life
            </p>
            <p className="font-italic-serif text-2xl text-sqz-ink/90">
              fresh, never sour.
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE 1 */}
      <Marquee
        words={["SQUIZZ", "When life gives you lemon", "SQZ them", "Edition 2026", "squiiz"]}
        speedSec={42}
      />

      {/* CINEMATIC LEMON SECTION */}
      <section className="relative bg-sqz-bg" data-testid="lemon-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 sm:py-40 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink mb-5">
              Filosofia · 01
            </p>
            <h2 className="font-display text-5xl sm:text-7xl leading-[0.95] tracking-tightest text-sqz-ink">
              Espremer<br />a essência<br />
              <span className="italic">do dia.</span>
            </h2>
            <p className="text-sqz-mute font-light max-w-md mt-8 leading-relaxed">
              Pegamos numa fruta e fazemos dela manifesto. Cada peça SQZ é um gesto
              — pequeno, ácido, brilhante — para tornar o ordinário em extraordinário.
              <span className="block mt-4 font-italic-serif text-sqz-ink text-xl">
                squiiz · the squeeze of style.
              </span>
            </p>
          </Reveal>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-square bg-sqz-surface border border-sqz-line overflow-hidden">
              <div className="absolute inset-0 p-6 sm:p-10">
                <LemonSqueezeAnim />
              </div>
              <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-sqz-ink" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-sqz-ink" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-sqz-ink" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-sqz-ink" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section
        id="sobre"
        ref={sobreRef}
        className="relative border-t border-sqz-line"
        data-testid="sobre-section"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 sm:py-40 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-sqz-surface">
              {/* Editorial composition built from logo + caption (no dark image) */}
              <motion.div
                style={{ y: sobreImgY }}
                className="absolute inset-0 flex flex-col items-center justify-center p-10"
              >
                <p className="text-[10px] tracking-[0.4em] uppercase text-sqz-mute mb-6">
                  Estúdio · Lisboa
                </p>
                <p className="font-display italic text-[18vw] lg:text-[10rem] leading-none text-sqz-ink">
                  squiiz
                </p>
                <p className="font-display text-2xl mt-4 text-sqz-ink">
                  by Lemon Jelly
                </p>
                <div className="absolute bottom-6 inset-x-6 flex justify-between text-[10px] tracking-[0.3em] uppercase text-sqz-mute">
                  <span>SS · 26</span>
                  <span>Edição limitada</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-16">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink mb-5">
                Sobre Nós
              </p>
              <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tightest text-sqz-ink">
                Somos a <span className="italic">SQZ</span>.<br />
                Fazemos cor.
              </h2>
            </div>

            <Reveal className="space-y-6 text-sqz-mute font-light text-lg leading-relaxed max-w-xl">
              <p>
                A SQZ nasceu da ideia simples de que um acessório deve fazer
                falar. Não é decoração — é declaração.
              </p>
              <p>
                Inspiradas pelo espírito{" "}
                <span className="text-sqz-ink font-italic-serif text-xl">
                  squiiz by Lemon Jelly
                </span>
                , trabalhamos a bijutaria, as capas e os acessórios como
                fragmentos de uma editorial: pensados, fotografados e curados
                para quem prefere a personalidade ao algoritmo.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-x-10 gap-y-12 pt-8 border-t border-sqz-line">
              {[
                ["01", "Coleção curada", "Cada peça é selecionada à mão. Sem catálogos infinitos."],
                ["02", "Cor com intenção", "Trabalhamos a cor como tinta de pintor — direta, viva, segura."],
                ["03", "Made for you", "Pensamos em quem usa: quem espreme tudo o que a vida tem para dar."],
                ["04", "Estúdio Lisboa", "Concebido e fotografado em estúdio próprio na cidade da luz."],
              ].map(([n, t, d]) => (
                <Reveal key={n} delay={parseInt(n) * 0.05}>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink">
                    {n}
                  </p>
                  <h3 className="font-display text-3xl mt-2 text-sqz-ink">{t}</h3>
                  <p className="text-sqz-mute font-light mt-3 text-sm leading-relaxed">
                    {d}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section
        className="border-t border-sqz-line"
        data-testid="featured-section"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink mb-4">
                Coleção · Em destaque
              </p>
              <h2 className="font-display text-6xl sm:text-7xl leading-none tracking-tightest text-sqz-ink">
                As nossas <span className="italic">picks</span>.
              </h2>
            </div>
            <Link
              to="/produtos"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase border-b border-sqz-line pb-1 hover:border-sqz-ink transition-colors text-sqz-ink"
              data-testid="featured-view-all"
            >
              Ver toda a coleção
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {FEATURED.slice(0, 8).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE BOTTOM */}
      <Marquee
        words={["SQUEEZE", "the moment", "SQUIZZ", "into", "every detail", "—", "SS 26"]}
        speedSec={50}
      />

      {/* CTA STRIP */}
      <section className="border-t border-sqz-line bg-sqz-bg">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 sm:py-32 text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink mb-6">
              {PRODUCTS.length} peças · 5 categorias
            </p>
            <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.85] tracking-tightest text-sqz-ink">
              Toda a <span className="italic">coleção</span>,<br />
              um <span className="italic">click</span> à frente.
            </h2>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-3 mt-12 px-9 py-5 bg-sqz-ink text-sqz-bg uppercase text-xs tracking-[0.3em] font-semibold hover:bg-sqz-mute transition-colors"
              data-testid="cta-explorar"
            >
              Explorar agora →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
