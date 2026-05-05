import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "../components/Marquee";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { FEATURED, PRODUCTS } from "../data/products";

const LOGO = "/assets/brand/logo.jpeg";
const BANNER_SQUEEZE = "/assets/brand/banner_squeeze.png";
const BANNER_LEMON_SPLASH = "/assets/brand/banner_lemon_splash.png";
const EDITORIAL_MODEL = "/assets/brand/editorial_model.png";
const SLOGAN_BLUE = "/assets/brand/slogan_blue.png";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroLogoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroLogoRot = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div data-testid="home-page">
      {/* HERO — light, colorful, premium with real SQZ logo */}
      <section
        ref={heroRef}
        className="relative h-[100vh] min-h-[700px] sm:h-[110vh] overflow-hidden"
        style={{ background: "#FAFAF7" }}
        data-testid="hero"
      >
        {/* Soft pastel orbs */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ background: "#FC6CA7" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 right-[-10%] w-[700px] h-[700px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "#6889EC" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "#B2D801" }}
          aria-hidden="true"
        />

        {/* Real SQZ Logo as hero focal — floating */}
        <motion.div
          style={{ y: heroLogoY, rotate: heroLogoRot }}
          className="absolute inset-0 flex items-center justify-end pointer-events-none z-0"
        >
          <img
            src={LOGO}
            alt="SQZ logo"
            className="w-[78vw] sm:w-[55vw] lg:w-[42vw] max-w-[760px] mix-blend-multiply animate-floatY"
            style={{ filter: "drop-shadow(0 30px 60px rgba(251,213,3,0.35))" }}
          />
        </motion.div>

        {/* HUD top */}
        <div className="absolute top-20 inset-x-0 px-6 lg:px-12 flex justify-between text-[10px] tracking-[0.3em] uppercase text-sqz-mute z-20 font-semibold">
          <span>Vila Nova de Gaia · Made in Portugal</span>
          <span>Vol. 01 · SS 26</span>
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
              className="text-[11px] tracking-[0.4em] uppercase text-sqz-pink mb-6 font-semibold"
            >
              squiiz · by Lemon Jelly
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="font-display text-[26vw] sm:text-[20vw] lg:text-[16vw] leading-[0.82] tracking-tightest text-sqz-ink"
              data-testid="hero-title"
            >
              SQ<span className="text-sqz-yellow" style={{ WebkitTextStroke: "3px #0a0a0a" }}>Z</span>
            </motion.h1>
          </div>

          <div className="mt-6 max-w-xl">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl leading-tight text-sqz-ink"
                data-testid="hero-slogan"
              >
                When life gives you lemons<span className="text-sqz-pink">,</span>{" "}
                <span className="font-display not-italic text-sqz-yellow inline-block px-2 py-0.5 bg-sqz-blue rounded-md">
                  SQZ them!
                </span>
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="text-sqz-mute font-light max-w-md mt-6 text-base sm:text-lg"
            >
              Acessórios perfumados a limão. A nova sub-marca da{" "}
              <span className="text-sqz-ink font-medium">Lemon Jelly</span>,
              criada pelo grupo Procalçado em Vila Nova de Gaia.
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
              className="group relative inline-flex items-center gap-3 px-7 py-4 bg-sqz-ink text-sqz-yellow uppercase text-xs tracking-[0.25em] font-bold hover:bg-sqz-pink hover:text-white transition-colors"
              data-testid="hero-cta-produtos"
            >
              Explorar Coleção
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="#sobre"
              className="inline-flex items-center gap-3 px-7 py-4 border-2 border-sqz-ink text-sqz-ink uppercase text-xs tracking-[0.25em] font-bold hover:bg-sqz-yellow transition-colors"
              data-testid="hero-cta-sobre"
            >
              Sobre Nós
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom HUD */}
        <div className="absolute bottom-8 inset-x-0 px-6 lg:px-12 flex justify-between items-end z-20">
          <div className="text-[10px] tracking-[0.3em] uppercase text-sqz-mute font-semibold">
            <span className="block">Scroll</span>
            <span className="block w-px h-10 bg-sqz-ink/30 mt-2 ml-2" />
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-mute mb-1 font-semibold">
              SQUIZZ · perfumed accessories. made in Portugal.
            </p>
            <p className="font-serif-italic text-2xl text-sqz-ink/90">
              fresh, never sour.
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE 1 — Yellow */}
      <Marquee
        words={["SQUIZZ", "When life gives you lemons", "SQZ them!", "Edition 2026", "squiiz"]}
        speedSec={42}
        bg="#FBD503"
        color="#0a0a0a"
      />

      {/* BRAND BANNER STRIP — uses your real banner, full image visible */}
      <section className="relative w-full bg-sqz-bg" data-testid="brand-banner-section">
        <img
          src={BANNER_SQUEEZE}
          alt="SQZ — squiiz by Lemon Jelly — SQUEEEZE!"
          className="w-full h-auto block"
        />
      </section>

      {/* PHILOSOPHY — colorful blocks like the real banner panels */}
      <section className="bg-sqz-bg" data-testid="lemon-section">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 sm:py-32 grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Block 1 — Yellow with logo */}
          <Reveal className="lg:col-span-5 bg-sqz-yellow p-10 sm:p-14 flex flex-col justify-between aspect-square lg:aspect-auto">
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink mb-5 font-bold">
              Filosofia · 01
            </p>
            <div className="flex-1 flex items-center justify-center my-8">
              <img
                src={LOGO}
                alt="SQZ"
                className="w-full max-w-[300px] mix-blend-multiply animate-breathe"
              />
            </div>
            <p className="font-display text-3xl sm:text-4xl text-sqz-ink leading-none">
              Espremer<br />
              <span className="text-sqz-pink">a essência</span><br />
              do dia.
            </p>
          </Reveal>

          {/* Block 2 — Pink */}
          <Reveal delay={0.1} className="lg:col-span-4 bg-sqz-pink p-10 sm:p-12 flex flex-col justify-between text-white aspect-square">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5 font-bold">
              Manifesto · 02
            </p>
            <p className="font-display text-4xl sm:text-5xl leading-[0.95]">
              Cor<br />com<br />
              <span className="font-serif-italic font-normal">intenção.</span>
            </p>
            <p className="text-sm font-light opacity-90 max-w-[260px]">
              Trabalhamos a cor como tinta de pintor — direta, viva, segura.
            </p>
          </Reveal>

          {/* Block 3 — Blue */}
          <Reveal delay={0.2} className="lg:col-span-3 bg-sqz-blue p-8 sm:p-10 flex flex-col justify-between text-white aspect-square">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5 font-bold">
              03
            </p>
            <p className="font-display text-3xl leading-[0.95]">
              Curado<br />à mão.
            </p>
            <p className="text-xs font-light opacity-90">
              Sem catálogos infinitos.
            </p>
          </Reveal>

          {/* Block 4 — Green wide */}
          <Reveal delay={0.05} className="lg:col-span-7 bg-sqz-green p-10 sm:p-14 flex flex-col justify-between aspect-[2/1] lg:aspect-auto">
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink mb-5 font-bold">
              SQUEEEZE!
            </p>
            <p className="font-display text-5xl sm:text-7xl text-white leading-[0.92]" style={{ WebkitTextStroke: "3px #0a0a0a" }}>
              squiiz<br />
              <span className="text-sqz-ink" style={{ WebkitTextStroke: "0" }}>by Lemon Jelly.</span>
            </p>
          </Reveal>

          {/* Block 5 — Lavender square */}
          <Reveal delay={0.15} className="lg:col-span-5 bg-sqz-lavender p-10 sm:p-14 flex flex-col justify-between aspect-square lg:aspect-auto">
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink mb-5 font-bold">
              Estúdio · Lisboa
            </p>
            <p className="font-display text-4xl sm:text-5xl text-sqz-ink leading-[0.95]">
              Made<br />for the<br />
              <span className="text-sqz-orange">moment.</span>
            </p>
            <p className="text-sm font-light text-sqz-ink/80 max-w-[280px]">
              Concebido e fotografado em estúdio próprio na cidade da luz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SLOGAN BANNER — at natural size to keep crisp */}
      <section
        className="relative w-full py-12 sm:py-16"
        style={{ background: "#6889EC" }}
        data-testid="slogan-banner-section"
      >
        <img
          src={SLOGAN_BLUE}
          alt="When life gives you lemons SQZ them!"
          className="w-full max-w-[760px] mx-auto h-auto block"
        />
      </section>

      {/* SOBRE NÓS — split with editorial model photo */}
      <section
        id="sobre"
        className="relative bg-sqz-bg border-t border-sqz-line"
        data-testid="sobre-section"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 sm:py-32 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-6 lg:sticky lg:top-32 self-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-sqz-surface">
              <img
                src={EDITORIAL_MODEL}
                alt="Editorial SQZ"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-sqz-yellow px-3 py-1 text-[10px] tracking-[0.3em] uppercase font-bold text-sqz-ink">
                Editorial · SS 26
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-6 space-y-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-pink mb-5 font-bold">
                Sobre Nós
              </p>
              <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tightest text-sqz-ink">
                Somos a <span className="text-sqz-yellow" style={{ WebkitTextStroke: "3px #0a0a0a" }}>SQZ</span>.<br />
                <span className="font-serif-italic font-normal">Fazemos</span> cor.
              </h2>
            </div>

            <div className="space-y-6 text-sqz-ink font-light text-lg leading-relaxed max-w-xl">
              <p>
                A SQZ nasceu da ideia simples de que um acessório deve fazer falar.
                Não é decoração — é <span className="font-display text-sqz-pink">declaração</span>.
              </p>
              <p>
                Inspiradas pelo espírito{" "}
                <span className="font-serif-italic text-2xl text-sqz-ink">
                  squiiz by Lemon Jelly
                </span>
                , trabalhamos a bijutaria, as capas e os acessórios como
                fragmentos de uma editorial: pensados, fotografados e curados
                para quem prefere a personalidade ao algoritmo.
              </p>
            </div>

            {/* Lemon splash banner inside about */}
            <div className="overflow-hidden rounded-sm">
              <img
                src={BANNER_LEMON_SPLASH}
                alt="Lemon splash"
                className="w-full h-[32vh] object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-10 pt-6">
              {[
                ["01", "Coleção curada", "Cada peça é selecionada à mão."],
                ["02", "Cor com intenção", "Direta, viva, segura."],
                ["03", "Made for you", "Para quem espreme tudo."],
                ["04", "Estúdio Lisboa", "Concebido na cidade da luz."],
              ].map(([n, t, d]) => (
                <div key={n}>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-blue font-bold">
                    {n}
                  </p>
                  <h3 className="font-display text-2xl mt-2 text-sqz-ink">{t}</h3>
                  <p className="text-sqz-mute font-light mt-2 text-sm">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section
        className="border-t border-sqz-line bg-sqz-bg"
        data-testid="featured-section"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-pink mb-4 font-bold">
                Coleção · Em destaque
              </p>
              <h2 className="font-display text-6xl sm:text-7xl leading-none tracking-tightest text-sqz-ink">
                As nossas{" "}
                <span className="text-sqz-yellow" style={{ WebkitTextStroke: "3px #0a0a0a" }}>
                  picks
                </span>
                <span className="font-serif-italic font-normal">.</span>
              </h2>
            </div>
            <Link
              to="/produtos"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase border-b-2 border-sqz-ink pb-1 hover:border-sqz-pink hover:text-sqz-pink transition-colors text-sqz-ink font-bold"
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

      {/* MARQUEE BOTTOM — Pink */}
      <Marquee
        words={["SQUEEZE", "the moment", "SQUIZZ", "into", "every detail", "SS 26"]}
        speedSec={50}
        bg="#FC6CA7"
        color="#FFFFFF"
      />

      {/* CTA STRIP */}
      <section className="border-t border-sqz-line bg-sqz-yellow">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 sm:py-32 text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-ink mb-6 font-bold">
              {PRODUCTS.length} peças · 5 categorias
            </p>
            <h2 className="font-display text-6xl sm:text-8xl lg:text-[10rem] leading-[0.85] tracking-tightest text-sqz-ink">
              Toda a <span className="font-serif-italic font-normal">coleção</span>,<br />
              um <span className="text-sqz-pink">click</span> à frente.
            </h2>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-3 mt-12 px-9 py-5 bg-sqz-ink text-sqz-yellow uppercase text-xs tracking-[0.3em] font-bold hover:bg-sqz-pink hover:text-white transition-colors"
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
