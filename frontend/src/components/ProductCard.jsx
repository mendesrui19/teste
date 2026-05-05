import React from "react";

export default function ProductCard({ product, index = 0 }) {
  return (
    <article
      className="group bg-white btl rounded-3xl overflow-hidden shadow-brutal flex flex-col hover:-translate-y-2 hover:shadow-brutal-lg transition-all"
      data-testid={`product-card-${product.id}`}
    >
      <div
        className="aspect-square w-full border-b-[3px] border-sqz-ink overflow-hidden flex items-center justify-center relative"
        style={{ background: `${product.color}33` }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <span
            className="absolute top-3 left-3 bg-sqz-yellow btl rounded-full px-3 py-1 font-display font-bold text-xs uppercase tracking-wider shadow-brutal-sm"
            data-testid={`featured-badge-${product.id}`}
          >
            ⭐ SQZ Pick
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col gap-1 bg-white">
        <h3 className="font-display font-bold text-lg sm:text-xl leading-tight" data-testid={`product-name-${product.id}`}>
          {product.name}
        </h3>
        <span className="text-sm font-body font-semibold uppercase text-sqz-ink/60 tracking-wider">
          {product.category}
        </span>
      </div>
    </article>
  );
}
