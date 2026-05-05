import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkBase =
    "px-4 py-2 rounded-full font-display font-semibold text-base sm:text-lg transition-all";
  return (
    <nav
      className="sticky top-3 mx-3 sm:mx-6 z-50 bg-white btl rounded-full px-4 sm:px-6 py-3 flex justify-between items-center shadow-brutal-sm"
      data-testid="navbar"
    >
      <Link to="/" className="flex items-center gap-3" data-testid="nav-logo-link">
        <div className="w-10 h-10 rounded-full btl bg-sqz-yellow flex items-center justify-center font-display font-bold text-lg">
          SQZ
        </div>
        <span className="hidden sm:inline font-display font-bold text-lg leading-none">
          squiiz
          <span className="block text-[10px] font-body font-medium text-sqz-ink/70 -mt-1">
            by Lemon Jelly
          </span>
        </span>
      </Link>

      <div className="flex items-center gap-1 sm:gap-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${
              isActive ? "bg-sqz-pink text-white btl shadow-brutal-sm" : "hover:bg-sqz-yellow"
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
              isActive ? "bg-sqz-blue text-white btl shadow-brutal-sm" : "hover:bg-sqz-yellow"
            }`
          }
          data-testid="nav-link-produtos"
        >
          Produtos
        </NavLink>
        <a
          href="#sobre"
          className={`${linkBase} hidden md:inline-block hover:bg-sqz-yellow`}
          data-testid="nav-link-sobre"
        >
          Sobre Nós
        </a>
      </div>
    </nav>
  );
}
