# SQZ — squiiz by Lemon Jelly (PRD)

## Original Problem Statement
> "tens no github todas as fotos dos meus produtos logos etc, preciso que cries um site para a minha loja. site colorido divertido letras grandes pelo menos na par tem de ter aquilo da parte do 'squiiz by Lemon jelly'. Slogan no site. Em alguma parte a dizer squizz. Produtos só da vendas dos produtos. Videos de limões a espremer e gotas de limões para ser um site animado. quero o site com video animado. sobre nos dentro da pagina de inicio e depois a pagina de produtos."

### Iteration 2 — User Redesign Request
> "nao gostei do design, quero algo que pareça premium tipo loja da zara extendes mas com animações profissionais nao emojis, tipo o site do spider man que tens no teu menu principal"

### Iteration 3 — User Theme Change
> "site em tons de branco, nao uses emojis"

## User Choices (literal)
- Brand: **SQZ** | Tag: **squiiz by Lemon Jelly**
- Slogan: **"When life gives you lemon..."**
- Word **"SQUIZZ"** must appear
- Catalog only (no checkout)
- Animated lemon-squeeze (no emojis allowed)
- Pages: Início (with About Us inline + featured products) + Produtos
- Language: **Portuguese**
- Design: **luxury editorial like Zara × cinematic like Spider-Man movie site**
- **NO emojis**, professional motion only

## Architecture
- **Frontend**: React 18 + React Router + Tailwind + Framer Motion + Lenis (smooth scroll) + custom cursor
- **Backend**: FastAPI minimal (`/api/health` only — site is static catalog)
- **Data**: 36 products static in `/app/frontend/src/data/products.js` across 5 categories
- **Assets**: cloned from `mendesrui19/teste` GitHub → `/app/frontend/public/assets/...`

## Design System (Iteration 3 — current)
- **Theme**: Light editorial luxury (Zara-like, off-white canvas)
- **Palette**: bg `#FAFAF7`, surface `#F1F0EB`, text `#0A0A0A`, mute `#6B6B6B`, accent `#9DAA10` (deep citrus)
- **Typography**: Instrument Serif (display, italic Q accent) + Manrope (body)
- **Motion**: Lenis smooth scroll, parallax hero, scroll-reveal masks, sticky editorial split, custom cursor (dot + ring follower), cinematic SVG lemon (squeeze + drip + droplets), marquees with serif italic
- **Layout**: 1600px max-width, massive negative space, asymmetric editorial grids, hairline borders, no rounded corners

## What's Implemented
### Home (`/`)
- Cinematic parallax hero with full-bleed lemon image, large serif "SQZ" (italic accent Q), slogan with italic "lemon" accent
- HUD top corners: location + edition; bottom: scroll indicator + "SQUIZZ · the act of squeezing colour into life"
- Marquee 1: "SQUIZZ · When life gives you lemon · SQZ them · Edition 2026 · squiiz"
- Filosofia 01 section with cinematic SVG lemon (corner ticks frame)
- Sobre Nós: editorial split with sticky parallax editorial image + 4 numbered story cards
- Featured products grid (8 picks, hover image-zoom + color tint glow)
- Marquee 2 + final CTA section "Toda a coleção, um click à frente"

### Produtos (`/produtos`)
- Big editorial title "Coleção SQZ" with italic accent SQZ
- Sticky filter bar (Tudo, Colares, Brincos, Anéis, Capas, Acessórios) with counts and underline animation
- 4-col Zara-style grid with reveal animations on filter change
- 36 products with hover zoom + color glow
- "Squizz. end of feed." closing

### Shared
- Glass navbar (auto-hide on scroll-down, glass on scroll)
- Custom cursor (dot + ring with mix-blend-difference)
- Lenis smooth scroll
- Subtle film grain overlay
- Editorial dark footer with huge "SQZ" logotype

## Tested
- Iteration 1 (pop-art): 100% — abandoned on user feedback
- Iteration 2 (dark editorial): 100% — abandoned on user feedback (wanted light)
- **Iteration 3 (light editorial)**: ✅ Backend 100%, Frontend 100%
  - Light theme confirmed: body bg `rgb(250,250,247)`, text `rgb(10,10,10)`
  - Zero emojis confirmed across both pages (Unicode regex scan)
  - All 36 product images load on /produtos
  - All 6 filters work with correct counts (11/10/5/5/5)
  - Custom cursor + Lenis smooth scroll + parallax + scroll-reveals all functional
  - Navbar glassmorphism on scroll with light tint
  - Lemon SVG animation cycling through idle → squeeze → drip phases on light bg

## Backlog / Future
- P1: Product detail modal with multiple photos
- P1: WebP optimization for the ~1.5MB product PNGs
- P2: WhatsApp "Quero este!" CTA per product
- P2: Newsletter signup
- P2: Instagram feed
- P3: Stripe Checkout if loja decide vender online
