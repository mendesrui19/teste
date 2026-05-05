import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative px-1 py-1 text-xs uppercase tracking-[0.22em] font-medium transition-colors";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}
      data-testid="navbar"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group" data-testid="nav-logo-link">
          <span className="font-display text-3xl leading-none tracking-tightest">SQZ</span>
          <span className="hidden sm:inline font-italic-serif text-[11px] text-sqz-mute tracking-wider">
            squiiz · by Lemon Jelly
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-sqz-accent" : "text-sqz-ink hover:text-sqz-accent"}`
            }
            data-testid="nav-link-inicio"
          >
            Início
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-sqz-accent" : "text-sqz-ink hover:text-sqz-accent"}`
            }
            data-testid="nav-link-produtos"
          >
            Produtos
          </NavLink>
          <a
            href="/#sobre"
            className={`${linkBase} hidden md:inline text-sqz-ink hover:text-sqz-accent`}
            data-testid="nav-link-sobre"
          >
            Sobre Nós
          </a>
        </nav>
      </div>
    </header>
  );
}
