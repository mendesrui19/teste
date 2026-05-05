import { Link } from "react-router-dom";

export default function ProductCard({ product, index = 0 }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <Link
      to="/produtos"
      className="group block relative"
      data-testid={`product-card-${product.id}`}
      data-cursor-hover
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-sqz-surface relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-6 sm:p-10 transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
        />
        {/* gentle color tint on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none mix-blend-multiply"
          style={{
            background: `radial-gradient(120% 120% at 50% 70%, ${product.color}22 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
        <span className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase text-sqz-mute">
          {num}
        </span>
        {product.featured && (
          <span
            className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-sqz-ink border-b border-sqz-ink pb-0.5"
            data-testid={`featured-badge-${product.id}`}
          >
            SQZ Pick
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3
          className="font-display text-xl sm:text-2xl leading-tight text-sqz-ink"
          data-testid={`product-name-${product.id}`}
        >
          {product.name}
        </h3>
        <span className="text-[10px] tracking-[0.25em] uppercase text-sqz-mute">
          {product.category}
        </span>
      </div>
    </Link>
  );
}
