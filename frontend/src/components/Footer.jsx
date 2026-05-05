import React from "react";

export default function Footer() {
  return (
    <footer
      className="relative z-10 bg-sqz-ink text-white mt-20 border-t-[3px] border-sqz-ink"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-sqz-yellow btl flex items-center justify-center font-display font-bold text-xl text-sqz-ink">
              SQZ
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-2xl">squiiz</p>
              <p className="text-xs opacity-70">by Lemon Jelly</p>
            </div>
          </div>
          <p className="font-display text-2xl font-semibold text-sqz-yellow">
            When life gives you lemon...
          </p>
          <p className="text-sm opacity-80 mt-1">...nós espremêmo-los por ti. 🍋</p>
        </div>

        <div>
          <h4 className="font-display font-bold text-xl mb-3 text-sqz-pink">Categorias</h4>
          <ul className="space-y-1 font-medium text-white/80">
            <li>Colares</li>
            <li>Brincos</li>
            <li>Anéis</li>
            <li>Capas</li>
            <li>Acessórios</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-xl mb-3 text-sqz-green">Contacta-nos</h4>
          <p className="text-sm opacity-80">
            Para encomendas especiais, pedidos personalizados ou apenas para dizer olá:
          </p>
          <a
            href="mailto:hello@sqz.pt"
            className="inline-block mt-3 bg-sqz-pink text-white btl rounded-full px-5 py-2 font-display font-bold shadow-brutal-sm hover:-translate-y-1 transition-transform"
            data-testid="footer-contact-btn"
          >
            hello@sqz.pt
          </a>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} SQZ — squiiz by Lemon Jelly. Feito com sumo. 🍋
      </div>
    </footer>
  );
}
