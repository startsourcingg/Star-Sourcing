"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductModal from './ProductModal';

type Product = {
  id: string;
  category?: string;
  title: string;
  description?: string;
  price?: string;
  priceUnit?: string;
  badge?: string;
  badgeType?: string;
  image?: string;
  features?: string[];
};

export default function ProductCard({ product, href, hideDetails = false }: { product: Product; href?: string; hideDetails?: boolean }) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const imgHeight = hideDetails ? 300 : 400;

  const handleOrderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;
    const hidden = document.getElementById('input-product-hidden') as HTMLInputElement | null;
    if (hidden) hidden.value = product.title;
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const message = document.getElementById('input-message') as HTMLElement | null;
      if (message) message.focus();
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: 'relative' }}
    >
      {/* Clickable area (image + header) */}
      {href ? (
        <Link href={href} className="product-card-link">
          <div style={{ cursor: 'pointer' }}>
            <div className="product-card-image" style={{ position: 'relative', height: imgHeight, width: '100%' }}>
              {product.image ? (
                <Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              ) : null}
              {product.badge ? (
                <div className="product-card-badge"><span className={`badge ${product.badgeType}`}>{product.badge}</span></div>
              ) : null}
            </div>

            <div style={{ padding: '0.75rem' }}>
              {product.category ? <p className="product-card-category">{product.category}</p> : null}
              <h3 className="product-card-title" style={{ margin: '0.25rem 0' }}>{product.title}</h3>
            </div>
          </div>
        </Link>
      ) : (
        <div>
          <div className="product-card-image" style={{ position: 'relative', height: imgHeight, width: '100%' }}>
            {product.image ? (
              <Image src={product.image} alt={product.title} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            ) : null}
            {product.badge ? (
              <div className="product-card-badge"><span className={`badge ${product.badgeType}`}>{product.badge}</span></div>
            ) : null}
          </div>
          <div style={{ padding: '0.75rem' }}>
            {product.category ? <p className="product-card-category">{product.category}</p> : null}
            <h3 className="product-card-title" style={{ margin: '0.25rem 0' }}>{product.title}</h3>
          </div>
        </div>
      )}

      {/* Hover overlay button (outside of Link to avoid nested anchors) */}
      <div style={{ position: 'absolute', top: 12, right: 12, transition: 'opacity 160ms', opacity: hover ? 1 : 0 }}>
        <button
          onClick={(e) => { e.preventDefault(); setOpen(true); }}
          className="btn btn-sm btn-outline"
          aria-label={`View more ${product.title}`}
          style={{ cursor: 'pointer' }}
        >
          View More
        </button>
      </div>

      {/* Footer with price and order button (hide when requested) */}
      <div className="product-card-body" style={{ padding: '0.75rem' }}>
        {!hideDetails && product.description ? (
          <p className="product-card-description" style={{ color: 'var(--color-muted)', margin: '0 0 0.75rem' }}>{product.description}</p>
        ) : null}

        {!hideDetails ? (
          <div className="product-card-footer" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button onClick={handleOrderClick} className="btn btn-primary" id={`btn-order-${product.id}`} aria-label={`Order ${product.title}`}>
              Order Now
            </button>
          </div>
        ) : null}
      </div>

      <ProductModal open={open} onClose={() => setOpen(false)} product={product} />
    </div>
  );
}
