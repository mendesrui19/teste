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
    "relative px-1 py-1 text-xs uppercase tracking-[0.22em] font-semibold transition-colors";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-sqz-bg/85 backdrop-blur-xl border-b border-sqz-line"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo-link">
          <img
            src="/assets/brand/logo.jpeg"
            alt="SQZ"
            className="w-10 h-10 object-contain rounded-full bg-white"
          />
          <span className="hidden sm:inline font-serif-italic text-[12px] text-sqz-mute tracking-wider">
            squiiz · by Lemon Jelly
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "text-sqz-ink" : "text-sqz-mute hover:text-sqz-ink"
              }`
            }
            data-testid="nav-link-inicio"
          >
            Início
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "text-sqz-ink" : "text-sqz-mute hover:text-sqz-ink"
              }`
            }
            data-testid="nav-link-produtos"
          >
            Produtos
          </NavLink>
          <a
            href="/#sobre"
            className={`${linkBase} hidden md:inline text-sqz-mute hover:text-sqz-ink`}
            data-testid="nav-link-sobre"
          >
            Sobre Nós
          </a>
        </nav>
      </div>
    </header>
  );
}
