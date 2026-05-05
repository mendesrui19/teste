export default function Footer() {
  return (
    <footer
      className="relative bg-sqz-bg border-t border-sqz-line mt-32"
      data-testid="footer"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-mute mb-4">
              squiiz · by Lemon Jelly
            </p>
            <h3 className="font-display text-[18vw] lg:text-[14rem] leading-[0.85] tracking-tightest text-sqz-ink">
              S<span className="italic">Q</span>Z
            </h3>
          </div>
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-mute mb-3">
                Categorias
              </p>
              <ul className="grid grid-cols-2 gap-y-2 text-sqz-ink">
                <li>Colares</li>
                <li>Brincos</li>
                <li>Anéis</li>
                <li>Capas</li>
                <li>Acessórios</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-sqz-mute mb-3">
                Contacto
              </p>
              <a
                href="mailto:hello@sqz.pt"
                className="text-sqz-ink hover:text-sqz-mute transition-colors text-lg border-b border-sqz-line pb-1"
                data-testid="footer-contact-btn"
              >
                hello@sqz.pt
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-sqz-line flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-sqz-mute">
          <span>© {new Date().getFullYear()} SQZ. Todos os direitos reservados.</span>
          <span className="font-italic-serif normal-case tracking-normal text-sm text-sqz-ink/80">
            When life gives you lemon...
          </span>
        </div>
      </div>
    </footer>
  );
}
