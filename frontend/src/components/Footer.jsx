export default function Footer() {
  return (
    <footer
      className="relative bg-sqz-ink text-sqz-bg mt-32"
      data-testid="footer"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-yellow mb-4 font-semibold">
              squiiz · by Lemon Jelly
            </p>
            <h3 className="font-display text-[18vw] lg:text-[14rem] leading-[0.85] tracking-tightest text-sqz-yellow">
              SQZ
            </h3>
          </div>
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-pink mb-3 font-semibold">
                Categorias
              </p>
              <ul className="grid grid-cols-2 gap-y-2 text-sqz-bg/90">
                <li>Colares</li>
                <li>Brincos</li>
                <li>Anéis</li>
                <li>Capas</li>
                <li>Acessórios</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-green mb-3 font-semibold">
                Contacto
              </p>
              <a
                href="mailto:hello@sqz.pt"
                className="text-sqz-bg hover:text-sqz-yellow transition-colors text-lg border-b border-sqz-bg/30 pb-1"
                data-testid="footer-contact-btn"
              >
                hello@sqz.pt
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-sqz-bg/15 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-sqz-bg/60">
          <span>© {new Date().getFullYear()} SQZ. Todos os direitos reservados.</span>
          <span className="font-serif-italic normal-case tracking-normal text-sm text-sqz-yellow">
            When life gives you lemons SQZ them!
          </span>
        </div>
      </div>
    </footer>
  );
}
